
import { COMPANY_INFO, NAVIGATION } from "@/lib/constants";
import { Link } from "wouter";
import logo from "@assets/logo_1766161297981.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand */}
        <div className="md:col-span-1 space-y-4">
          <div className="h-10 w-fit bg-white/10 p-2 rounded flex items-center justify-center">
            <img src={logo} alt="Grupo Las Margaritas" className="h-full w-auto brightness-200 contrast-200 grayscale" />
          </div>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            {COMPANY_INFO.motto}
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-white">Navegación</h4>
          <ul className="space-y-3">
            {NAVIGATION.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-primary-foreground/70 hover:text-white transition-colors text-sm">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-white">Contacto</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li>{COMPANY_INFO.contact.address}</li>
            <li>
              <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal / Social */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-white">Legales</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><a href="#" className="hover:text-white">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-white">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>

      <div className="container-custom border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
        <p>Diseñado por: Jorge Mario Ruano Portales</p>
      </div>
    </footer>
  );
}
