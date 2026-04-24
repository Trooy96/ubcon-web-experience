import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { AnimatedScene } from "@/components/AnimatedScene";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — UBCON General Suppliers Limited" },
      { name: "description", content: "Upcoming exhibitions, mining expos and supplier events featuring UBCON." },
      { property: "og:title", content: "UBCON Events" },
      { property: "og:description", content: "Where to meet UBCON across Africa." },
    ],
  }),
  component: Events,
});

const EVENTS = [
  { date: "Jun 18 – 21, 2026", city: "Lusaka, Zambia", title: "Zambia Mining & Industrial Expo", text: "Visit UBCON for live demos of mining spares and OEM components." },
  { date: "Sep 09 – 11, 2026", city: "Johannesburg, ZA", title: "Electra Mining Africa", text: "Meet our team to discuss heavy equipment supply across SADC." },
  { date: "Nov 04 – 06, 2026", city: "Kitwe, Zambia", title: "Copperbelt Engineering Forum", text: "Talks on workshop maintenance, vibration analysis and balancing." },
  { date: "Feb 12 – 14, 2027", city: "Nairobi, Kenya", title: "East Africa Energy Summit", text: "Showcasing UBCON's solar and electrical supply portfolio." },
];

function Events() {
  return (
    <>
      <AnimatedScene />
      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Events</div>
          <h1 className="reveal mt-3 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl text-balance">
            Where to meet UBCON.
          </h1>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Catch our team at industrial expos, supplier forums and engineering conferences across the region.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ul className="space-y-4">
            {EVENTS.map((e, i) => (
              <li
                key={e.title}
                className="reveal group grid gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-elevated sm:grid-cols-[180px_1fr_auto] sm:items-center"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Calendar className="h-4 w-4" /> {e.date}
                </div>
                <div>
                  <div className="font-display text-lg font-bold">{e.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{e.text}</div>
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> {e.city}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}