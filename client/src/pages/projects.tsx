
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PROJECTS_DATA } from "@/lib/constants";
import { MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Projects() {
  useDocumentTitle("Proyectos de Vivienda en Guatemala");
  const getImage = (slug: string) => {
    if (slug === 'paseo-los-bosques') return '/paseo-los-bosques.jpg';
    if (slug === 'paseo-las-lomas') return '/paseo-las-lomas.jpg';
    return '/paseo-los-bosques.jpg';
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="pt-32 pb-16 bg-muted/30 border-b border-border">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Proyectos de Grupo Las Margaritas Guatemala</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestro portafolio de desarrollos. Cada uno diseñado pensando en la calidad de vida de sus residentes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project) => (
              <div key={project.id} className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                  <img 
                    src={getImage(project.slug)} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground uppercase tracking-wide mr-2">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground text-sm mb-6">
                    <MapPin className="w-4 h-4 mr-2 text-secondary" />
                    {project.location}
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <Link href={`/proyectos/${project.slug}`} className="flex items-center justify-center w-full gap-2 bg-primary text-white py-3 rounded font-medium hover:bg-primary/90 transition-colors">
                        Ver ficha del proyecto <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a 
                      href={project.externalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full gap-2 text-primary font-medium hover:bg-muted/50 py-2 rounded transition-colors text-sm"
                    >
                      Sitio oficial <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
