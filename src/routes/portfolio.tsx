import { createFileRoute } from "@tanstack/react-router";
import { AnimatedScene } from "@/components/AnimatedScene";
import miningBell from "@/assets/sectors/mining-bell.jpg";
import miningAtlas from "@/assets/sectors/mining-atlas.jpg";
import miningEpiroc from "@/assets/sectors/mining-epiroc.jpg";
import miningKomatsu from "@/assets/sectors/mining-komatsu.jpg";
import energySolar from "@/assets/sectors/energy-solar.jpg";
import fuelGas from "@/assets/sectors/fuel-gas.jpg";
import agriTractor from "@/assets/sectors/agriculture-tractor.jpg";
import agriGrain from "@/assets/sectors/agriculture-grain.jpg";
import health from "@/assets/sectors/health.jpg";
import safety from "@/assets/sectors/safety-ppe.jpg";
import scope from "@/assets/sectors/scope-engineers.jpg";
import logistics from "@/assets/sectors/logistics-trucks.jpg";
import workshop from "@/assets/sectors/workshop-1.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — UBCON projects, supply & sectors" },
      { name: "description", content: "Selected work, sectors and equipment supplied by UBCON across mining, energy, agriculture, health and logistics." },
      { property: "og:title", content: "UBCON Portfolio" },
      { property: "og:description", content: "Selected work and sectors served by UBCON." },
    ],
  }),
  component: Portfolio,
});

const ITEMS = [
  { img: miningBell, sector: "Mining", title: "Bell heavy haul trucks", text: "Spares & support" },
  { img: miningAtlas, sector: "Mining", title: "Atlas Copco drilling rigs", text: "OEM components" },
  { img: miningEpiroc, sector: "Mining", title: "Epiroc surface drills", text: "Drifters & rods" },
  { img: miningKomatsu, sector: "Mining", title: "Komatsu excavators", text: "Hydraulics & wear" },
  { img: energySolar, sector: "Energy", title: "Rooftop solar deployments", text: "Panels, inverters" },
  { img: fuelGas, sector: "Fuel & Gas", title: "Industrial gas supply", text: "Cylinders & logistics" },
  { img: agriTractor, sector: "Agriculture", title: "Tractors & implements", text: "Farm mechanisation" },
  { img: agriGrain, sector: "Agriculture", title: "Grain warehousing", text: "Maize, soya, wheat" },
  { img: health, sector: "Health", title: "Medical consumables", text: "Devices & PPE" },
  { img: safety, sector: "Safety", title: "PPE kits", text: "Site compliance" },
  { img: scope, sector: "Engineering", title: "Field engineering teams", text: "Civil & mechanical scope" },
  { img: logistics, sector: "Logistics", title: "Heavy-duty hire fleet", text: "Cross-border trips" },
  { img: workshop, sector: "Workshop", title: "Repair & reconditioning", text: "Engines & pumps" },
];

function Portfolio() {
  return (
    <>
      <AnimatedScene />
      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Portfolio</div>
          <h1 className="reveal mt-3 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl text-balance">
            Selected work, sectors & supply.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {ITEMS.map((it, i) => (
            <figure
              key={it.title}
              className="reveal group relative overflow-hidden rounded-2xl bg-card shadow-elevated"
              style={{ transitionDelay: `${(i % 6) * 60}ms`, aspectRatio: i % 5 === 0 ? "4/5" : "1/1" }}
            >
              <img
                data-src={it.img}
                src=""
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-secondary-foreground">
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{it.sector}</div>
                <div className="mt-1 font-display text-lg font-bold">{it.title}</div>
                <div className="text-xs text-secondary-foreground/70">{it.text}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}