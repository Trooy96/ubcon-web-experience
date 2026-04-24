import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { AnimatedScene } from "@/components/AnimatedScene";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Downloads — UBCON General Suppliers" },
      { name: "description", content: "Explore UBCON's full range of supply, engineering and logistics services. Download the company profile." },
      { property: "og:title", content: "Services & Downloads — UBCON" },
      { property: "og:description", content: "Mining, energy, agriculture, health, safety, fuel, logistics — and downloadable company documents." },
    ],
  }),
  component: Services,
});

const SERVICE_GROUPS = [
  { t: "Mining sector", items: ["OEM & replacement parts", "Drivetrains, hydraulics, electricals", "Sandvik / Epiroc / Atlas Copco / CAT / Komatsu / Bell"] },
  { t: "Heavy equipment", items: ["Excavators, TLBs, dump trucks, motor graders", "Drills, bulldozers, compactors, cranes", "Sale & hire — local and cross-border"] },
  { t: "Energy & electrical", items: ["Cables, switches, transformers", "Solar systems & security lighting", "Lightning arresters & appliances"] },
  { t: "Agriculture", items: ["Maize, soybeans, wheat, groundnuts", "Fertilizer, milling & feed machines", "Tractors and spare parts"] },
  { t: "Fuel & gas", items: ["Diesel, Petrol (PMS), Jet A1", "Industrial gas cylinders", "Trusted refinery partners"] },
  { t: "Health & safety", items: ["PPE & safety kits", "Needles, gloves, thermometers", "Medical devices and consumables"] },
  { t: "Engineering", items: ["Mechanical, electrical, civil & structural", "Construction & project management", "Vibration analysis, laser alignment, surveys"] },
  { t: "Logistics", items: ["Hire of cars, trucks & heavy machinery", "Local and cross-border trips", "Warehouse-backed lead times"] },
];

const DOCS = [
  { name: "UBCON Company Profile 2026", desc: "Full corporate profile with services, certificates and team.", file: "/docs/UBCON-Company-Profile-2026.pdf", size: "PDF · ~57 MB" },
];

function Services() {
  return (
    <>
      <AnimatedScene />
      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Services</div>
          <h1 className="reveal mt-3 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl text-balance">
            Everything heavy industry needs — <span className="text-primary">delivered.</span>
          </h1>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From OEM mining spares to fuel, agriculture and full engineering scopes, UBCON brings the
            right product, the right paperwork and the right team — on time.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {SERVICE_GROUPS.map((g, i) => (
            <article key={g.t} className="reveal rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elevated" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="font-display text-base font-bold text-primary">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 font-display text-lg font-bold">{g.t}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="downloads" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Documents</div>
          <h2 className="reveal mt-3 font-display text-4xl font-extrabold sm:text-5xl text-balance">Download our company documents.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {DOCS.map((d) => (
              <a
                key={d.name}
                href={d.file}
                download
                className="reveal group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-base font-bold">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.desc}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{d.size}</div>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-yellow transition-transform group-hover:translate-x-0.5">
                  <Download className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}