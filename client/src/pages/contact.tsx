
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(8, "Teléfono inválido"),
  message: z.string().min(10, "El mensaje es muy corto"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  useDocumentTitle("Contacto Corporativo");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Nos pondremos en contacto pronto.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "No se pudo enviar el mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  function onSubmit(values: FormData) {
    setIsSubmitting(true);
    submitContactMutation.mutate(values);
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contacto - Grupo Las Margaritas Guatemala</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Estamos listos para atenderte. Para consultas sobre un proyecto específico, recomendamos visitar la página del proyecto.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom flex flex-col-reverse md:grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Oficinas Centrales</h4>
                    <p className="text-muted-foreground">{COMPANY_INFO.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Teléfono</h4>
                    <p className="text-muted-foreground">{COMPANY_INFO.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-muted p-3 rounded text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Correo Electrónico</h4>
                    <p className="text-muted-foreground">{COMPANY_INFO.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <h4 className="font-serif text-lg text-primary mb-2">¿Buscas vivienda?</h4>
              <p className="text-muted-foreground mb-4">
                Visita nuestra sección de proyectos para encontrar el hogar ideal y contactar directamente a la sala de ventas correspondiente.
              </p>
              <a href="/proyectos" className="text-secondary font-medium hover:underline">
                Ir a Proyectos &rarr;
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-2xl font-serif text-primary mb-6">Envíanos un mensaje</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo</FormLabel>
                        <FormControl>
                          <Input placeholder="tucorreo@ejemplo.com" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="+502 ..." {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿En qué podemos ayudarte?" className="min-h-[120px]" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"} <Send className="w-4 h-4" />
                </button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
