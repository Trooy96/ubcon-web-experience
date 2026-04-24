import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck, Truck, Wrench, Zap } from "lucide-react";
import { AnimatedScene } from "@/components/AnimatedScene";
import heroBuilding from "@/assets/ubcon/hero-building.jpg";
import workshop1 from "@/assets/sectors/workshop-1.jpg";
import miningBell from "@/assets/sectors/mining-bell.jpg";
import energySolar from "@/assets/sectors/energy-solar.jpg";
import agriTractor from "@/assets/sectors/agriculture-tractor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UBCON — Engineering, Mining & Industrial Suppliers in Zambia" },
      {
        name: "description",
        content:
          "UBCON General Suppliers Limited delivers heavy equipment, spare parts, fuel, agriculture & engineering services across sub-Saharan Africa.",
      },
      { property: "og:title", content: "UBCON — Engineering, Mining & Industrial Suppliers" },
      {
        property: "og:description",
        content:
          "Heavy equipment, mining spares, fuel, agriculture supplies and full-scope engineering, delivered across Africa.",
      },
    ],
  }),
  component: Index,
});

const SECTORS = [
  { icon: Wrench, title: "Mining & Spares", text: "OEM and replacement parts for Sandvik, Epiroc, Atlas Copco, CAT, Komatsu, Bell." },
  { icon: Zap, title: "Energy & Power", text: "Solar systems, transformers, switchgear, security lighting and electrical supply." },
  { icon: Truck, title: "Heavy Equipment", text: "Excavators, TLBs, dump trucks, motor graders, drills, dozers — sale & hire." },
  { icon: ShieldCheck, title: "Safety & Health", text: "PPE, medical devices and certified safety kits to keep your operation compliant." },
];

function Index() {
  const heroLine = "Engineered supply for Africa's heaviest work.".split(" ");

  return (
    <>
      <AnimatedScene />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-primary/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              UBCON General Suppliers · Zambia
            </div>

            <h1
              data-hero-words
              className="mt-6 font-display text-5xl font-extrabold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl text-balance"
            >
              {heroLine.map((w, i) => (
                <span key={i} className="mr-3 inline-block overflow-hidden align-bottom">
                  <span className="w inline-block">
                    {w === "Africa's" ? <span className="text-primary">{w}</span> : w}
                  </span>
                </span>
              ))}
            </h1>

            <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From mining spares and heavy equipment to fuel, agriculture and full-scope engineering —
              UBCON delivers reliable supply chains and on-site expertise across sub-Saharan Africa.
            </p>

            <div className="reveal mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                data-magnetic
                className="magnetic group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-yellow"
              >
                Explore our services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Request a quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <dl className="reveal mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "Sectors served", v: 8, suffix: "+", format: "locale" as const },
                { k: "OEM brands", v: 20, suffix: "+", format: "locale" as const },
                { k: "Year founded", v: 2022, suffix: "", format: "plain" as const },
              ].map((s) => (
                <div key={s.k}>
                  <dd className="font-display text-3xl font-extrabold text-foreground">
                    <span data-count-to={s.v} data-count-format={s.format}>0</span>
                    {s.suffix}
                  </dd>
                  <dt className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.k}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="reveal relative aspect-[4/5] overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={heroBuilding}
                alt="UBCON industrial supply"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-secondary/90 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-secondary-foreground">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Edition</div>
                  <div className="font-display text-4xl font-extrabold">2026</div>
                </div>
                <div className="text-right text-xs leading-snug">
                  Company Profile<br />
                  <span className="text-secondary-foreground/70">Available to download</span>
                </div>
              </div>
            </div>

            {/* Decorative drawable SVG */}
            <svg
              viewBox="0 0 200 200"
              className="pointer-events-none absolute -left-10 -top-10 h-40 w-40"
              aria-hidden="true"
            >
              <path
                data-draw
                className="draw-path"
                d="M10 100 Q 60 10 100 100 T 190 100"
              />
              <path
                data-draw
                className="draw-path"
                d="M20 150 L 80 90 L 140 150 L 190 110"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-secondary py-6 text-secondary-foreground">
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-2xl font-bold uppercase tracking-wider">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-12">
                {["Sandvik", "Epiroc", "Atlas Copco", "CAT", "Komatsu", "Bell", "JCB", "Volvo", "John Deere", "Hitachi", "Liebherr"].map((b) => (
                  <span key={`${dup}-${b}`} className="flex items-center gap-12">
                    <span className="text-secondary-foreground/80">{b}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">What we do</div>
              <h2 className="reveal mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl text-balance">
                A multi-disciplined supplier engineered for{" "}
                <span className="text-primary">heavy industry.</span>
              </h2>
            </div>
            <p className="reveal max-w-md text-sm text-muted-foreground">
              UBCON serves mining, energy, agriculture, health, safety and construction
              with original equipment, spares, fuel and trained engineering teams.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s, i) => (
              <div
                key={s.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE + DOT GRID */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Built for scale</div>
            <h2 className="reveal mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl text-balance">
              Precision engineering meets relentless logistics.
            </h2>
            <p className="reveal mt-5 text-base leading-relaxed text-muted-foreground">
              We operate a modern, fully-equipped workshop for pump repairs, drifter
              testing and heavy-duty engine rebuilds — backed by a stocked spares
              store for emergency breakdowns and short delivery times.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Engine rebuilds & heavy-duty reconditioning",
                "Vibration analysis & laser alignment",
                "Geometrical surveys & in-situ balancing",
                "Fuel supply: Diesel, PMS, Jet A1",
                "Cross-border heavy-duty logistics",
              ].map((t) => (
                <li key={t} className="reveal flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[workshop1, miningBell, energySolar, agriTractor].map((src, i) => (
                <div
                  key={src}
                  className="reveal overflow-hidden rounded-2xl shadow-elevated"
                  style={{ transitionDelay: `${i * 80}ms`, aspectRatio: i % 3 === 0 ? "1/1.2" : "1/1" }}
                >
                  <img
                    data-src={src}
                    src=""
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div
              data-dot-grid
              className="dot-grid pointer-events-none absolute -right-8 -bottom-12 hidden lg:grid"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-secondary p-10 text-secondary-foreground sm:p-16">
          <div className="absolute inset-0 opacity-15 bg-noise" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Let's build</div>
              <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl text-balance">
                Source smarter. Operate harder.
              </h2>
              <p className="mt-4 max-w-xl text-secondary-foreground/75">
                Tell us about your project and we'll come back with a competitive quote,
                delivery timeline and the right engineering support.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-yellow"
              >
                Talk to UBCON <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-secondary-foreground hover:bg-white/10"
              >
                Download profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
