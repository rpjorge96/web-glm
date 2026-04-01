
import { Handshake, Home, Users, BookOpen, Building2, Phone, Mail, MapPin, TreePine, Shield, ShoppingBag, Dumbbell, Car, GraduationCap, Stethoscope } from "lucide-react";

// Types for strict typing
export type UnitType = 'Apartment' | 'House';

export interface ProjectUnit {
  id: string;
  model: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // m2
  price?: number;
  monthly?: number;
  levels?: number; // for houses
  condo?: string; // for apartments
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  status: string;
  type: string;
  unitType: UnitType;
  description: string;
  stats: { label: string; value: string }[];
  amenities: { category: string; items: string[]; icon: any }[];
  units: ProjectUnit[];
  externalUrl: string;
  images: {
    hero: string;
    gallery: string[];
  };
}

export const COMPANY_INFO = {
  name: "Grupo Las Margaritas",
  foundedYear: 1977,
  tagline: "Orgullo tranquilo.",
  motto: "Servir a nuestros clientes, y nunca servirnos de ellos.",
  stats: [
    { label: "Años de trayectoria", value: "45+" },
    { label: "Unidades entregadas", value: "12,500+" },
    { label: "Metros urbanizados", value: "3M+" },
    { label: "Proyectos exitosos", value: "18" },
  ],
  contact: {
    phone: "+502 2296-8028",
    email: "info@glm.com.gt",
    address: "Narama 15 ave 16-14 oficina 1201, Zona 13, Ciudad de Guatemala",
  }
};

export const NAVIGATION = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Impacto", href: "/impacto" },
  { name: "Contacto", href: "/contacto" },
];

export const HISTORY_TIMELINE = [
  {
    year: "1977",
    title: "El Inicio",
    description: "Inicia con 3.5 manzanas, Q2,000 de capital y el sueño de hacer la vivienda accesible una realidad."
  },
  {
    year: "1990",
    title: "Consolidación",
    description: "Primeros grandes proyectos de urbanización en el sector sur de la ciudad."
  },
  {
    year: "2005",
    title: "Diversificación",
    description: "Expansión hacia nuevos municipios y desarrollo de propiedad horizontal."
  },
  {
    year: "2023",
    title: "Presente y Futuro",
    description: "Arrancando el proyecto #18, con presencia en 6 municipios y un compromiso renovado con la comunidad."
  }
];

export const VALUES = [
  {
    title: "Integridad",
    description: "Nuestro lema lo dice todo: Servir al cliente, nunca servirnos de él.",
    icon: Handshake
  },
  {
    title: "Compromiso Social",
    description: "No solo construimos casas, construimos comunidades a través de la educación.",
    icon: Users
  },
  {
    title: "Excelencia",
    description: "Cada metro cuadrado urbanizado cumple con los más altos estándares.",
    icon: Building2
  }
];

// MOCK DATA FOR PROJECTS
export const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    slug: "paseo-los-bosques",
    name: "Paseo Los Bosques",
    tagline: "Vive rodeado de naturaleza, confort y entretenimiento",
    location: "Ciudad Quetzal, San Juan Sacatepequez",
    status: "En Venta",
    type: "Apartamentos",
    unitType: 'Apartment',
    description: "Macroproyecto de gran escala con 400 manzanas y 11 condominios privados. Paseo Los Bosques ofrece un estilo de vida exclusivo con acceso controlado y una moderna carretera de 4 carriles. La Fase 1 incluye 1,036 apartamentos diseñados con excelente distribución y seguridad.",
    externalUrl: "https://paseolosbosques.com",
    stats: [
      { label: "Manzanas totales", value: "400" },
      { label: "Condominios", value: "11" },
      { label: "Fase 1 (Aptos)", value: "1,036" },
      { label: "Carriles Acceso", value: "4" }
    ],
    amenities: [
      { category: "Entretenimiento", items: ["Pista para Correr", "Ciclovía", "Pista de Tricicross", "Juegos para Niños", "Cancha de Fútbol", "Área Forestal"], icon: Dumbbell },
      { category: "Social", items: ["Salón Social", "Churrasqueras", "Parque de Mascotas"], icon: Users },
      { category: "Comercio", items: ["Kioskos Comerciales", "Locales Comerciales", "Terrenos Comerciales", "Futuro Centro Comercial"], icon: ShoppingBag },
      { category: "Educación", items: ["Colegio en Línea / Tutorías", "Centro de Capacitación (Cocina, Inglés, etc.)"], icon: BookOpen }
    ],
    images: {
      hero: "bosques_hero", // mapped in component
      gallery: []
    },
    units: [
      // Condominio 1 (Elevador)
      { id: "C1-A", model: "Apto A (Jardín)", bedrooms: 3, bathrooms: 2, area: 71.08, condo: "Condominio 1 (Nivel 1)", price: 0, monthly: 0 },
      { id: "C1-B", model: "Apto B (Jardín)", bedrooms: 1, bathrooms: 1, area: 38.34, condo: "Condominio 1 (Nivel 1)", price: 0, monthly: 0 },
      { id: "C1-C", model: "Apto C (Jardín)", bedrooms: 2, bathrooms: 1, area: 44.92, condo: "Condominio 1 (Nivel 1)", price: 0, monthly: 0 },
      { id: "C1-D", model: "Apto D (Balcón)", bedrooms: 3, bathrooms: 2, area: 71.08, condo: "Condominio 1 (Niveles 2-10)", price: 0, monthly: 0 },
      { id: "C1-E", model: "Apto E (Terraza)", bedrooms: 2, bathrooms: 1, area: 53.50, condo: "Condominio 1 (Nivel 2)", price: 0, monthly: 0 },
      { id: "C1-F", model: "Apto F (Balcón)", bedrooms: 2, bathrooms: 1, area: 44.92, condo: "Condominio 1 (Niveles 2-10)", price: 0, monthly: 0 },
      { id: "C1-G", model: "Apto G (Balcón)", bedrooms: 2, bathrooms: 1, area: 53.50, condo: "Condominio 1 (Niveles 2-10)", price: 0, monthly: 0 },
      // Condominio 2 (Gradas)
      { id: "C2-J", model: "Apto J (Jardín)", bedrooms: 3, bathrooms: 1, area: 57.00, condo: "Condominio 2 (Nivel 1)", price: 0, monthly: 0 },
      { id: "C2-K", model: "Apto K (Jardín)", bedrooms: 2, bathrooms: 1, area: 46.40, condo: "Condominio 2 (Nivel 1)", price: 0, monthly: 0 },
      { id: "C2-L", model: "Apto L (Balcón)", bedrooms: 3, bathrooms: 1, area: 57.00, condo: "Condominio 2 (Niveles 2-6)", price: 0, monthly: 0 },
      { id: "C2-M", model: "Apto M (Balcón)", bedrooms: 2, bathrooms: 1, area: 46.40, condo: "Condominio 2 (Niveles 2-6)", price: 0, monthly: 0 },
    ]
  },
  {
    id: "2",
    slug: "paseo-las-lomas",
    name: "Paseo Las Lomas",
    tagline: "El proyecto habitacional líder en Baja Verapaz",
    location: "Salamá, Baja Verapaz",
    status: "En Venta",
    type: "Casas",
    unitType: 'House',
    description: "Paseo Las Lomas es el proyecto habitacional líder en el departamento de Baja Verapaz. Con un diseño neo urbanístico y sustentable, ofrece 13 estilos de casas y 7 tamaños de terrenos, todo diseñado para la mayor satisfacción de nuestros residentes.",
    externalUrl: "https://www.paseolaslomas.com",
    stats: [
      { label: "Estilos de casas", value: "13" },
      { label: "Tamaños de terreno", value: "7" },
      { label: "Ubicación", value: "Salamá" },
      { label: "Diseño", value: "Sustentable" }
    ],
    amenities: [
      { category: "Deportes", items: ["Cancha Polideportiva", "Ciclovía"], icon: Dumbbell },
      { category: "Social", items: ["Salón de usos múltiples", "Churrasqueras"], icon: Users },
      { category: "Servicios", items: ["Agua Potable", "Área Comercial", "Puesto de Salud", "Centro Educativo"], icon: ShoppingBag },
      { category: "Familia", items: ["Juegos para niños", "Seguridad"], icon: Home }
    ],
    images: {
      hero: "lomas_hero", // mapped in component
      gallery: []
    },
    units: [
      { id: "L-Jazmin", model: "Casa Jazmín", bedrooms: 2, bathrooms: 1, area: 51.84, levels: 1, price: 346000, monthly: 2549 },
      { id: "L-LirioN", model: "Casa Lirio N", bedrooms: 3, bathrooms: 1, area: 72.52, levels: 1, price: 411400, monthly: 3497 },
      { id: "L-LirioNA", model: "Casa Lirio NA", bedrooms: 3, bathrooms: 1, area: 79.30, levels: 1, price: 452100, monthly: 3761 },
      { id: "L-LirioNAP", model: "Casa Lirio NAP", bedrooms: 3, bathrooms: 1, area: 94.30, levels: 1, price: 592900, monthly: 4970 },
      { id: "L-LirioG", model: "Casa Lirio G", bedrooms: 3, bathrooms: 1, area: 110.75, levels: 1, price: 569800, monthly: 4635 },
      { id: "L-Violeta1", model: "Casa Violeta 1", bedrooms: 3, bathrooms: 1, area: 120.08, levels: 1, price: 739200, monthly: 4550 },
      { id: "L-Violeta1A", model: "Casa Violeta 1A", bedrooms: 3, bathrooms: 2, area: 126.53, levels: 1, price: 782400, monthly: 4807 },
      { id: "L-Violeta2", model: "Casa Violeta 2", bedrooms: 3, bathrooms: 4, area: 139.87, levels: 2, price: 948800, monthly: 5891 },
    ]
  },
  ];

export const PROJECTS = PROJECTS_DATA; // Alias for backward compatibility if needed
