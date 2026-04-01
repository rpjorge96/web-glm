
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PROJECTS_DATA, Project, ProjectUnit } from "@/lib/constants";
import { useRoute, Link } from "wouter";
import { MapPin, ExternalLink, ArrowLeft, Check, Ruler, Bed, Bath, Layers, Home, Building } from "lucide-react";
import NotFound from "@/pages/not-found";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const getHeroImage = (slug: string) => {
  if (slug === 'paseo-los-bosques') return '/paseo-los-bosques.jpg';
  if (slug === 'paseo-las-lomas') return '/paseo-las-lomas.jpg';
  return '/paseo-los-bosques.jpg';
};

// Formatter for currency
const formatCurrency = (value?: number) => {
  if (!value) return "Consultar";
  return new Intl.NumberFormat('es-GT', { style: 'currency', currency: 'GTQ', maximumFractionDigits: 0 }).format(value);
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/proyectos/:slug");
  const project = match && params ? PROJECTS_DATA.find(p => p.slug === params.slug) : null;
  
  useDocumentTitle(project ? `${project.name} - Vivienda en ${project.location}` : "Proyecto no encontrado");
  
  if (!match || !params) return <NotFound />;
  if (!project) return <NotFound />;

  const heroImage = getHeroImage(project.slug);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* 1) Hero del Proyecto */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        </div>
        
        <div className="container-custom relative z-10 text-white pb-16 animate-in slide-in-from-bottom-10 duration-700">
           <Link href="/proyectos">
             <a className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors">
               <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Proyectos
             </a>
           </Link>
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
             <div>
               <div className="flex gap-3 mb-4">
                 <Badge variant="secondary" className="bg-secondary text-white border-none uppercase tracking-wider font-bold">
                   {project.status}
                 </Badge>
                 <Badge variant="outline" className="text-white border-white/40 uppercase tracking-wider">
                   {project.type}
                 </Badge>
               </div>
               <h1 className="text-4xl md:text-6xl font-serif mb-2">{project.name}</h1>
               <p className="text-xl md:text-2xl text-white/90 font-light">{project.tagline}</p>
             </div>
             
             <div className="flex flex-col gap-2 md:text-right">
                <span className="flex items-center md:justify-end text-white/80">
                  <MapPin className="w-4 h-4 mr-2" /> {project.location}
                </span>
                <a 
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded font-bold hover:bg-white/90 transition-colors"
                >
                  Visitar sitio oficial <ExternalLink className="w-4 h-4 ml-2" />
                </a>
             </div>
           </div>
        </div>
      </section>

      {/* 2) Overview & Stats */}
      <section className="py-16 border-b border-border">
        <div className="container-custom grid md:grid-cols-3 gap-12">
           <div className="md:col-span-2 space-y-6">
             <h2 className="text-3xl font-serif text-primary">Sobre el proyecto</h2>
             <p className="text-lg text-muted-foreground leading-relaxed">
               {project.description}
             </p>
           </div>
           <div className="grid grid-cols-2 gap-6">
             {project.stats.map((stat, idx) => (
               <div key={idx} className="bg-muted/30 p-4 rounded border border-border">
                 <div className="text-2xl font-serif text-primary font-bold">{stat.value}</div>
                 <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3) Tabs: Unidades, Amenidades, Ubicación */}
      <section className="py-16 bg-white min-h-[500px]">
        <div className="container-custom">
          <Tabs defaultValue="unidades" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 max-w-lg mx-auto bg-muted">
              <TabsTrigger value="unidades">Modelos Disponibles</TabsTrigger>
              <TabsTrigger value="amenidades">Amenidades</TabsTrigger>
              <TabsTrigger value="ubicacion">Ubicación</TabsTrigger>
            </TabsList>

            {/* TAB: Unidades */}
            <TabsContent value="unidades" className="animate-in fade-in zoom-in-95 duration-300">
               <div className="text-center max-w-2xl mx-auto mb-8">
                 <h3 className="text-2xl font-serif text-primary mb-2">Encuentra tu espacio ideal</h3>
                 <p className="text-muted-foreground">Explora nuestros modelos disponibles. Precios y cuotas sujetos a cambios sin previo aviso.</p>
               </div>

               {project.unitType === 'Apartment' ? (
                 /* APARTMENT TABLE VIEW */
                 <div className="border rounded-lg overflow-hidden shadow-sm">
                   <Table>
                     <TableHeader className="bg-muted/50">
                       <TableRow>
                         <TableHead className="w-[200px]">Modelo</TableHead>
                         <TableHead>Ubicación</TableHead>
                         <TableHead>Área</TableHead>
                         <TableHead>Habitaciones</TableHead>
                         <TableHead>Precio desde</TableHead>
                         <TableHead className="text-right">Acción</TableHead>
                       </TableRow>
                     </TableHeader>
                     <TableBody>
                       {project.units.map((unit) => (
                         <TableRow key={unit.id} className="hover:bg-muted/5">
                           <TableCell className="font-medium">
                             <div className="flex items-center gap-2">
                               <Building className="w-4 h-4 text-muted-foreground" />
                               {unit.model}
                             </div>
                           </TableCell>
                           <TableCell>{unit.condo}</TableCell>
                           <TableCell>
                             <div className="flex items-center gap-1 text-muted-foreground">
                               <Ruler className="w-3 h-3" /> {unit.area} m²
                             </div>
                           </TableCell>
                           <TableCell>
                             <div className="flex gap-3 text-muted-foreground">
                               <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {unit.bedrooms}</span>
                               <span className="flex items-center gap-1"><Bath className="w-3 h-3" /> {unit.bathrooms}</span>
                             </div>
                           </TableCell>
                           <TableCell className="font-medium text-primary">
                             {formatCurrency(unit.price)}
                           </TableCell>
                           <TableCell className="text-right">
                             <a href={project.externalUrl} target="_blank" className="text-sm font-medium text-secondary hover:underline">
                               Ver detalle
                             </a>
                           </TableCell>
                         </TableRow>
                       ))}
                     </TableBody>
                   </Table>
                 </div>
               ) : (
                 /* HOUSE GRID VIEW */
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {project.units.map((unit) => (
                     <div key={unit.id} className="border border-border rounded-lg p-6 hover:shadow-lg transition-all bg-card">
                       <div className="flex justify-between items-start mb-4">
                         <h4 className="text-xl font-serif text-primary font-bold">{unit.model}</h4>
                         <Badge variant="outline">{unit.levels} Niveles</Badge>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-muted-foreground">
                         <div className="flex items-center gap-2"><Ruler className="w-4 h-4 text-secondary" /> {unit.area} m²</div>
                         <div className="flex items-center gap-2"><Bed className="w-4 h-4 text-secondary" /> {unit.bedrooms} Hab.</div>
                         <div className="flex items-center gap-2"><Bath className="w-4 h-4 text-secondary" /> {unit.bathrooms} Baños</div>
                         <div className="flex items-center gap-2"><Layers className="w-4 h-4 text-secondary" /> {unit.levels} Niveles</div>
                       </div>
                       
                       <div className="border-t border-border pt-4 mb-4">
                         <div className="flex justify-between items-end">
                           <div>
                             <p className="text-xs text-muted-foreground uppercase">Precio desde</p>
                             <p className="text-xl font-bold text-primary">{formatCurrency(unit.price)}</p>
                           </div>
                           <div className="text-right">
                             <p className="text-xs text-muted-foreground uppercase">Cuota aprox.</p>
                             <p className="text-sm font-medium text-foreground">{formatCurrency(unit.monthly)}</p>
                           </div>
                         </div>
                       </div>
                       
                       <a 
                         href={project.externalUrl} 
                         target="_blank" 
                         className="block w-full text-center bg-primary text-white py-2 rounded font-medium hover:bg-primary/90 transition-colors"
                       >
                         Cotizar Modelo
                       </a>
                     </div>
                   ))}
                 </div>
               )}
            </TabsContent>

            {/* TAB: Amenidades */}
            <TabsContent value="amenidades" className="animate-in fade-in zoom-in-95 duration-300">
               <div className="grid md:grid-cols-2 gap-8">
                  {project.amenities.map((cat, idx) => (
                    <div key={idx} className="bg-muted/30 p-8 rounded-lg border border-border/50">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-white rounded-full text-secondary shadow-sm">
                          <cat.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-serif text-primary">{cat.category}</h4>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-center text-muted-foreground">
                            <Check className="w-4 h-4 text-secondary mr-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
               </div>
            </TabsContent>

            {/* TAB: Ubicación */}
            <TabsContent value="ubicacion" className="animate-in fade-in zoom-in-95 duration-300">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                   <h3 className="text-2xl font-serif text-primary">Ubicación Privilegiada</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     {project.location}. Estratégicamente ubicado para brindarte acceso rápido a servicios esenciales, colegios de prestigio y áreas comerciales, sin sacrificar la tranquilidad de tu hogar.
                   </p>
                   <div className="flex flex-col gap-4">
                     <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-secondary mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Dirección Exacta</p>
                          <p className="text-muted-foreground text-sm">{project.location}</p>
                        </div>
                     </div>
                   </div>
                   <a 
                     href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.location)}`}
                     target="_blank"
                     className="inline-flex items-center text-primary font-medium hover:underline"
                   >
                     Abrir en Google Maps <ExternalLink className="w-4 h-4 ml-2" />
                   </a>
                 </div>
                 <div className="aspect-square md:aspect-video bg-muted rounded-lg flex items-center justify-center border border-border relative overflow-hidden group">
                    {/* Placeholder for Map - In a real app this would be an iframe */}
                    <div className="absolute inset-0 bg-muted-foreground/10" />
                    <div className="text-center p-6">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2 opacity-50" />
                      <p className="text-muted-foreground">Mapa interactivo no disponible en mockup</p>
                    </div>
                 </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 4) CTA Final */}
      <section className="py-24 bg-primary text-white text-center">
         <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">¿Te interesa este proyecto?</h2>
            <p className="text-white/80 text-lg mb-8">
              Visita el sitio oficial para ver recorridos virtuales, descargar brochure y hablar con un asesor especializado.
            </p>
            <a 
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded text-lg font-bold hover:bg-white/90 transition-transform hover:scale-105 duration-200"
            >
              Ir al sitio de {project.name} <ExternalLink className="w-5 h-5 ml-2" />
            </a>
         </div>
      </section>

      <Footer />
    </div>
  );
}
