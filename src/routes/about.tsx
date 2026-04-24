import { createFileRoute } from "@tanstack/react-router";
import { AnimatedScene } from "@/components/AnimatedScene";
import chellah from "@/assets/team/chellah.jpg";
import kelvin from "@/assets/team/kelvin.jpg";
import susi from "@/assets/team/susi.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About UBCON — Our Story, Mission & Team" },
      { name: "description", content: "UBCON's founding story, mission, vision and the people delivering supply across Africa." },
      { property: "og:title", content: "About UBCON — Our Story & Team" },
      { property: "og:description", content: "Meet the founder Chellah Siame and the UBCON team." },
    ],
  }),
  component: About,
});

const VALUES = [
  { t: "Mission", d: "Supply the African people with affordable services and quality products that make their work easier and more beneficial." },
  { t: "Vision", d: "To be the leading supplier in the sub-Saharan region, in good books with our esteemed clients at all costs." },
  { t: "Beliefs", d: "We believe in teamwork and working extra hard to achieve any milestone with the projects we undertake." },
  { t: "Values", d: "Time, trust, excellence, accountability, collaboration, service, innovation and gratitude." },
];

const TEAM = [
  { name: "Chellah Siame", role: "Director / C.E.O", img: chellah, bio: "Civil engineer and seasoned business professional. Founded UBCON after building global supplier relationships across China, Turkey, India, the Netherlands, Dubai and South Africa." },
  { name: "Kelvin Chompwe", role: "Chief Accountant", img: kelvin, bio: "Leads finance, governance and the operational reporting that keeps every UBCON project on budget." },
  { name: "Susi Chilambe", role: "Operations Manager", img: susi, bio: "Runs day-to-day delivery, supplier coordination and on-site logistics across UBCON's projects." },
];

function About() {
  return (
    <>
      <AnimatedScene />
      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About UBCON</div>
          <h1 className="reveal mt-3 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl text-balance">
            A Zambian supplier built for <span className="text-primary">Africa's industrial future.</span>
          </h1>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Incorporated with PACRA on 9 March 2022, UBCON is a multi-disciplined company offering engineering services,
            logistics, and the supply of mechanical, electrical, health, fuel, fertilizer and crops products.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our story</div>
            <h2 className="reveal mt-3 font-display text-4xl font-extrabold sm:text-5xl text-balance">How we started.</h2>
            <p className="reveal mt-6 text-foreground/80 leading-relaxed">
              Chellah Siame, although young and energetic, is a seasoned business professional and civil engineer.
              Coming from a family doing well in business, he fell in love with serving his community through innovation.
              After visiting China, Thailand, Kenya, Ethiopia and Malaysia, he sharpened his supply-chain and engineering
              skills and built strong relationships with manufacturers across China, Turkey, India, Switzerland, the
              Netherlands, Dubai and South Africa.
            </p>
            <p className="reveal mt-4 text-foreground/80 leading-relaxed">
              With a passion for people and service delivery, he founded UBCON together with a brilliant team from
              different backgrounds — united by the same work ethics — to deliver promised products to governments and
              private sectors in Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((v, i) => (
              <div key={v.t} className="reveal rounded-2xl border border-border bg-card p-6" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{v.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our brilliant team</div>
          <h2 className="reveal mt-3 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl text-balance">
            People behind every UBCON delivery.
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <article key={m.name} className="reveal group overflow-hidden rounded-3xl border border-border bg-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    data-src={m.img}
                    src=""
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="font-display text-xl font-bold">{m.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">{m.role}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}