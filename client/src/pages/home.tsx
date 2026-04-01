
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO, PROJECTS } from "@/lib/constants";
import { ArrowRight, ChevronRight, MapPin, Home as HomeIcon, Users, Calendar, Award } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/family_outside_modern_home.png";
import impactImage from "@assets/generated_images/modern_school_building_exterior.png";
import historyImage from "@assets/generated_images/multigenerational_hands_with_blueprints.png";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle();
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />

      {/* A) Hero Institutional - Premium Treatment */}
      <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Familia en residencial Grupo Las Margaritas Guatemala - Vivienda accesible" 
            className="w-full h-full object-cover scale-105"
            fetchPriority="high"
          />
          {/* Multi-layer Scrim for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        {/* Floating Content Card */}
        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Glass Card */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
              <span className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-[0.2em] mb-8 shadow-lg">
                <Award className="w-4 h-4" />
                45+ años de excelencia
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-[-0.02em] leading-[1.1] text-white mb-6">
                Grupo Las Margaritas: Vivienda Accesible en Guatemala
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Más de 45 años creando comunidades integrales con{" "}
                <span className="text-white font-medium border-b-2 border-secondary pb-0.5">orgullo tranquilo</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/proyectos" className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(20,45,35,0.5)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2">
                    Ver Proyectos
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/nosotros" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:border-white/50 w-full sm:w-auto">
                    Conocer al Grupo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* B) Confianza en Números - Elevated Stats Bar */}
      <section className="relative -mt-16 z-20 pb-16">
        <div className="container-custom">
          <div className="relative bg-white rounded-2xl shadow-[0_25px_60px_-20px_rgba(0,0,0,0.15)] border border-border/50 overflow-hidden">
            {/* Decorative Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="text-center p-8 md:p-10 group hover:bg-muted/30 transition-colors">
                  <p className="text-4xl md:text-5xl font-serif text-primary mb-2 font-bold tracking-[-0.02em] group-hover:scale-110 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.15em] font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C) Historia Corta - Premium Two-Column */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="relative">
              {/* Accent Rail */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/50 rounded-full hidden lg:block" />
              
              <div className="space-y-6 lg:pl-8">
                <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-primary/70">
                  Nuestra Historia
                </span>
                
                <h2 className="text-3xl md:text-5xl font-serif text-primary tracking-[-0.02em] leading-[1.1]">
                  Desde 1977 transformando vidas
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Iniciamos con 3.5 manzanas, Q2,000 de capital y un sueño claro: hacer que la vivienda digna fuera accesible. 
                  Hoy, esa visión ha transformado el paisaje urbano de Guatemala.
                </p>
                
                <blockquote className="relative bg-muted/50 rounded-xl p-6 border-l-4 border-secondary">
                  <p className="italic text-xl text-foreground font-serif leading-relaxed">
                    "{COMPANY_INFO.motto}"
                  </p>
                </blockquote>
                
                <div className="pt-4">
                  <Link href="/nosotros" className="group inline-flex items-center gap-3 text-primary font-semibold hover:text-secondary transition-colors">
                      <span className="border-b-2 border-primary/30 group-hover:border-secondary pb-1">
                        Leer historia completa
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Image with Premium Frame */}
            <div className="relative">
              {/* Decorative Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2rem] -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.3)] border-4 border-white">
                <img 
                  src={historyImage} 
                  alt="Legado de 45 años construyendo hogares en Guatemala - Grupo Las Margaritas" 
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Fundada en</p>
                      <p className="text-xl font-serif font-bold text-primary">1977</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D) Proyectos Destacados - Rich Cards */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div className="border-l-4 border-primary/40 pl-6">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
                Portafolio
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mt-2 tracking-[-0.02em]">
                Proyectos Destacados
              </h2>
              <p className="text-muted-foreground mt-2 max-w-lg">
                Desarrollos que transforman comunidades y crean hogares para miles de familias guatemaltecas.
              </p>
            </div>
            <Link href="/proyectos" className="hidden md:inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-6 py-3 rounded-xl font-medium text-foreground transition-colors">
                Ver todos los proyectos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project, idx) => (
              <div 
                key={project.id} 
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.slug === 'paseo-los-bosques' ? '/paseo-los-bosques.jpg' : '/paseo-las-lomas.jpg'} 
                    alt={`${project.name} - Desarrollo inmobiliario Grupo Las Margaritas Guatemala`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-white text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {project.status}
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm mt-2">
                      <MapPin className="w-4 h-4 mr-2 text-secondary" />
                      {project.location}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex items-center gap-4 py-3 border-y border-border/50">
                    <div className="flex items-center gap-2 text-sm">
                      <HomeIcon className="w-4 h-4 text-primary/60" />
                      <span className="text-muted-foreground">{project.units?.length || 0} modelos</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary/60" />
                      <span className="text-muted-foreground">Familias</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a 
                    href={project.externalUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg"
                  >
                    Visitar sitio web
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile CTA */}
          <div className="mt-10 text-center md:hidden">
            <Link href="/proyectos" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold w-full">
                Ver todos los proyectos
                <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* E) Impacto / Comunidad - Split Gradient */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-[#0a1f15] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px]" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] border border-white/10">
                <img src={impactImage} alt="Centro Educativo Las Margaritas Guatemala - Impacto social GLM" className="w-full aspect-video object-cover" loading="lazy" />
                {/* KPI Chips */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full">
                      +500 estudiantes
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full">
                      Educación de calidad
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
                Impacto Social
              </span>
              
              <h2 className="text-3xl md:text-5xl font-serif text-white tracking-[-0.02em] leading-[1.1]">
                Más que viviendas, comunidades
              </h2>
              
              <p className="text-lg text-white/80 leading-relaxed">
                El Centro Educativo Las Margaritas es nuestro compromiso vivo con el futuro. 
                Brindamos educación de calidad a los hijos de nuestros residentes y vecinos, 
                creando un ciclo de prosperidad real.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/impacto" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3.5 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
                    Conocer nuestro impacto
                    <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6 text-center">
              ¿Por qué elegir Grupo Las Margaritas en Guatemala?
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p className="mb-4">
                <strong>Grupo Las Margaritas (GLM)</strong> es la empresa líder en desarrollos inmobiliarios de vivienda accesible en Guatemala. 
                Con más de 45 años de experiencia, hemos entregado más de 25,000 hogares a familias guatemaltecas, 
                creando comunidades integrales que incluyen escuelas, áreas verdes, seguridad y servicios esenciales.
              </p>
              <p className="mb-4">
                Nuestros proyectos destacados, <strong>Paseo Los Bosques</strong> y <strong>Paseo Las Lomas</strong>, 
                representan lo mejor en vivienda accesible en Guatemala. Ofrecemos apartamentos y casas con financiamiento flexible, 
                ubicados en zonas estratégicas con acceso a transporte, comercios y centros educativos.
              </p>
              <p className="mb-4">
                En <strong>GLM Guatemala</strong> creemos que cada familia merece un hogar digno. Por eso, nuestros desarrollos 
                inmobiliarios no solo ofrecen vivienda, sino comunidades completas donde las familias pueden crecer, prosperar y construir su futuro.
                Desde 1977, nuestro lema ha sido "Servir a nuestros clientes, y nunca servirnos de ellos".
              </p>
              <p>
                Si buscas <strong>apartamentos en Guatemala</strong>, <strong>casas en venta en Guatemala</strong>, o 
                <strong> vivienda accesible en Guatemala</strong>, Grupo Las Margaritas tiene la solución perfecta para ti. 
                Contáctanos hoy y únete a las miles de familias que ya confían en nosotros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* F) CTA Final - Elevated */}
      <section className="py-28 bg-gradient-to-b from-background to-muted/50 relative">
        {/* Decorative */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-primary/70">
              Trabajemos Juntos
            </span>
            
            <h2 className="text-4xl md:text-6xl font-serif text-primary tracking-[-0.02em] leading-[1.1]">
              Construyamos el futuro juntos
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ya sea que busqués tu nuevo hogar, una alianza estratégica o unirte a nuestro equipo.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/contacto" className="group bg-primary text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(20,45,35,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2">
                  Contactar Corporativo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href={`mailto:${COMPANY_INFO.contact.email}`} 
                className="bg-white border-2 border-border text-foreground px-10 py-4 rounded-xl text-lg font-semibold hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
              >
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
