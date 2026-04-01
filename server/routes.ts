import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

async function sendToAirtable(data: { name: string; email: string; phone: string; message: string }) {
  const airtableToken = process.env.AIRTABLE_API_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!airtableToken || !baseId || !tableName) {
    console.error("Airtable configuration missing");
    return;
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${airtableToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Nombre: data.name,
              Email: data.email,
              Telefono: data.phone,
              Mensaje: data.message,
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Airtable error:", error);
    } else {
      console.log("Contact sent to Airtable successfully");
    }
  } catch (error) {
    console.error("Error sending to Airtable:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send to Airtable (async, don't wait for response)
      sendToAirtable(validatedData).catch(err => console.error("Airtable sync error:", err));
      
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid input", details: error.errors });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get all contacts (admin use - could add auth later)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  return httpServer;
}
