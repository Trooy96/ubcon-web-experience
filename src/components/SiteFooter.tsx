import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border bg-secondary text-secondary-foreground">
      <div className="ubcon-stripe absolute inset-x-0 top-0 h-1 opacity-90" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={SITE.logo}
              alt="UBCON logo"
              className="h-11 w-11 rounded-md object-contain bg-white p-0.5"
            />
            <div>
              <div className="font-display text-base font-bold">UBCON</div>
              <div className="text-[11px] tracking-[0.22em] text-secondary-foreground/60">
                GENERAL SUPPLIERS LIMITED
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary-foreground/70">
            A multi-disciplined Zambian supplier of engineering, mining, energy,
            agriculture, health and safety solutions across sub-Saharan Africa.
          </p>
          <div className="mt-6 flex gap-4 text-xs uppercase tracking-widest text-secondary-foreground/60">
            <span>PACRA Registered</span>
            <span>·</span>
            <span>EIZ Licensed</span>
            <span>·</span>
            <span>NCC C3</span>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sitemap</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-secondary-foreground/80 hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</div>
          <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-secondary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} UBCON General Suppliers Limited. All rights reserved.</span>
          <span>Built with precision for Africa's industrial future.</span>
        </div>
      </div>
    </footer>
  );
}