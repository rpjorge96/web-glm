
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO, HISTORY_TIMELINE, VALUES } from "@/lib/constants";
import { Quote, Target, Eye, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import historyImage from "@assets/generated_images/multigenerational_hands_with_blueprints.png";
import aboutHeroImage from "@assets/generated_images/aerial_residential_community_view.png";
import timelineImg1 from "@assets/generated_images/1970s_construction_site_vintage.png";
import timelineImg2 from "@assets/generated_images/community_grand_opening_ceremony.png";
import timelineImg3 from "@assets/generated_images/large_development_construction_aerial.png";
import timelineImg4 from "@assets/generated_images/sustainable_community_future_vision.png";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function About() {
  useDocumentTitle("Quiénes Somos - Historia y Valores");
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero - Premium Treatment with Image */}
      <section className="relative pt-32 pb-24 min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroImage} 
            alt="Vista aérea de comunidad residencial" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20 z-[1]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px] z-[1]" />
        
        <div className="container-custom max-w-4xl text-center space-y-8 relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
            Quiénes Somos
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-[-0.02em] leading-[1.05]">
            GLM - Grupo Las Margaritas Guatemala
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Somos Grupo Las Margaritas. Desde hace 45 años, trabajamos para que más familias guatemaltecas tengan un hogar digno.
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            {COMPANY_INFO.stats.slice(0, 3).map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-serif text-white font-bold tracking-[-0.02em]">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 uppercase tracking-[0.15em] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote - Elevated Card */}
      <section className="relative -mt-12 z-20 pb-6">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-[0_25px_60px_-20px_rgba(0,0,0,0.15)] border border-border/50 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic">
                  "{COMPANY_INFO.motto}"
                </blockquote>
                <p className="text-muted-foreground mt-4 font-medium">
                  — Fundadores de Grupo Las Margaritas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision - Premium Cards */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-background to-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative bg-white p-10 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
              
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Target className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-primary mb-4">Nuestra Misión</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Desarrollar proyectos habitacionales integrales que mejoren la calidad de vida de las familias guatemaltecas, ofreciendo soluciones accesibles, dignas y con plusvalía creciente.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white p-10 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary/50" />
              
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-primary mb-4">Nuestra Visión</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Ser el grupo desarrollador referente en Guatemala por nuestra capacidad de crear comunidades sostenibles, manteniendo siempre al cliente en el centro de nuestras decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Two Column with Image */}
      <section className="py-8 md:py-10 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2rem] -z-10" />
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.3)] border-4 border-white">
                <img 
                  src={historyImage} 
                  alt="Historia de Grupo Las Margaritas" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-primary/70">
                Nuestra Historia
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary tracking-[-0.02em] leading-[1.1]">
                Un sueño que comenzó en 1977
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Todo comenzó con 3.5 manzanas de tierra, Q2,000 de capital y un sueño claro: 
                hacer que la vivienda digna fuera accesible para las familias guatemaltecas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoy, esa visión ha transformado el paisaje urbano de Guatemala, entregando 
                más de 25,000 hogares y creando comunidades prósperas que van más allá de 
                simples residenciales.
              </p>
              
              {/* Key Points */}
              <div className="space-y-3 pt-4">
                {["Más de 45 años de experiencia", "25,000+ familias con hogar propio", "Comunidades integrales con servicios"].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Premium Design with Images */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_2px_2px,#1a1a1a_1px,transparent_0)] bg-[size:48px_48px]" />
        
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-4">
              Trayectoria
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary tracking-[-0.02em]">
              Hitos de Nuestra Historia
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Más de cuatro décadas construyendo el futuro de Guatemala, un hogar a la vez.
            </p>
          </div>
          
          {/* Timeline Cards with Images */}
          <div className="space-y-8">
            {HISTORY_TIMELINE.map((item, index) => {
              const images = [timelineImg1, timelineImg2, timelineImg3, timelineImg4];
              const img = images[index % images.length];
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-stretch`}
                >
                  {/* Image Side */}
                  <div className="md:w-1/2">
                    <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden shadow-xl group">
                      <img 
                        src={img} 
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay with Year */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-6xl md:text-7xl font-serif font-bold text-white/90 drop-shadow-lg">
                          {item.year}
                        </span>
                      </div>
                      {/* Corner Badge */}
                      <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        Hito #{index + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="md:w-1/2 flex items-center">
                    <div className={`bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 w-full ${isEven ? 'md:-ml-8' : 'md:-mr-8'} relative z-10`}>
                      {/* Accent Line */}
                      <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-1 h-20 bg-gradient-to-b from-primary to-secondary rounded-full`} />
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-serif font-bold text-primary">{item.year.slice(-2)}</span>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values - Premium Grid */}
      <section className="py-8 md:py-10 bg-gradient-to-br from-primary via-primary to-[#0a1f15] text-white relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px]" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-4">
              Lo Que Nos Define
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-[-0.02em]">
              Nuestros Valores
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => (
              <div 
                key={idx} 
                className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <val.icon className="w-10 h-10 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-white">{val.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-background to-muted/50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-primary/70">
              Únete a Nuestra Historia
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary tracking-[-0.02em] leading-[1.1]">
              ¿Listo para encontrar tu hogar?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explora nuestros proyectos y descubre cómo podemos ayudarte a cumplir el sueño de tu hogar propio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/proyectos" className="group bg-primary text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(20,45,35,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2">
                  Ver Proyectos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contacto" className="bg-white border-2 border-border text-foreground px-10 py-4 rounded-xl text-lg font-semibold hover:border-primary/30 hover:bg-muted/50 transition-all duration-300">
                  Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
