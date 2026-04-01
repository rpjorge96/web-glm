
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Users, Heart } from "lucide-react";
import impactImage from "@assets/generated_images/modern_school_building_exterior.png";
import { Link } from "wouter";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Impact() {
  useDocumentTitle("Impacto Social - Centro Educativo Las Margaritas");
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Nuestro Compromiso</span>
            <h1 className="text-4xl md:text-6xl font-serif">
              Impacto Social de Grupo Las Margaritas Guatemala
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Creemos que el desarrollo inmobiliario debe ir de la mano con el desarrollo humano. Por eso, invertimos en educación y comunidad.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden border-4 border-white/20 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 animate-in slide-in-from-right duration-700">
            <img src={impactImage} alt="Centro Educativo" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-serif text-primary mb-6">Centro Educativo Las Margaritas</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fundado para servir a las familias de nuestros desarrollos y las comunidades vecinas, el Centro Educativo es el corazón de nuestra responsabilidad social.
          </p>
        </div>

        <div className="container-custom grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Educación Integral",
              desc: "Formación académica de alto nivel combinada con valores éticos y morales."
            },
            {
              icon: Users,
              title: "Comunidad Unida",
              desc: "Un espacio seguro donde estudiantes, padres y maestros construyen tejido social."
            },
            {
              icon: Heart,
              title: "Futuro Brillante",
              desc: "Becas y oportunidades para estudiantes destacados de recursos limitados."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-muted/30 p-8 rounded-lg border border-border hover:border-secondary/50 transition-colors text-center">
              <div className="inline-flex p-4 rounded-full bg-white text-secondary mb-6 shadow-sm">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
