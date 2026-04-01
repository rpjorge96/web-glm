import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Página no encontrada");
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/30">
      <Card className="w-full max-w-md mx-4 border-border shadow-lg">
        <CardContent className="pt-8 pb-8 text-center">
          <AlertCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-primary mb-2">404</h1>
          <p className="text-lg text-muted-foreground mb-6">
            La página que buscas no existe o fue movida.
          </p>
          <Link href="/">
            <a className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </a>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
