import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { AnimatedScene } from "@/components/AnimatedScene";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact UBCON — Get a quote" },
      { name: "description", content: "Request a quote, partnership or supply enquiry from UBCON General Suppliers Limited." },
      { property: "og:title", content: "Contact UBCON" },
      { property: "og:description", content: "Phone, email and quote form for UBCON General Suppliers Limited." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function buildWhatsAppMessage() {
    const lines = [
      `Hello UBCON, I'd like to make an enquiry.`,
      ``,
      form.name ? `Name: ${form.name}` : null,
      form.company ? `Company: ${form.company}` : null,
      form.email ? `Email: ${form.email}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      form.message ? `\nMessage:\n${form.message}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function openWhatsApp() {
    const text = encodeURIComponent(buildWhatsAppMessage());
    const url = `https://wa.me/${SITE.whatsapp}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`UBCON enquiry — ${form.name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <AnimatedScene />
      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contact</div>
          <h1 className="reveal mt-3 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl text-balance">
            Let's source it. Let's <span className="text-primary">build it.</span>
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s+/g, "")}` },
              { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: MapPin, label: "Office", value: SITE.address },
            ].map((c, i) => (
              <a
                key={c.label}
                href={c.href || "#"}
                className="reveal flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-elevated"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-display text-base font-bold">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="reveal rounded-2xl border border-border bg-secondary p-5 text-secondary-foreground">
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary">Hours</div>
              <div className="mt-1 font-display text-base font-bold">Mon – Fri · 08:00 – 17:00 CAT</div>
              <div className="mt-1 text-xs text-secondary-foreground/70">Emergency support available on request.</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal rounded-3xl border border-border bg-card p-6 sm:p-8 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Full name" required value={form.name} onChange={(v) => update("name", v)} />
              <Field name="company" label="Company" value={form.company} onChange={(v) => update("company", v)} />
              <Field name="email" label="Email" type="email" required value={form.email} onChange={(v) => update("email", v)} />
              <Field name="phone" label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-primary/40 focus:ring-2"
                placeholder="Tell us what you need to source, supply or build…"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-yellow transition-transform hover:-translate-y-0.5"
              >
                {sent ? "Opening your email…" : "Send enquiry"} <Send className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-0.5"
              >
                Send via WhatsApp <MessageCircle className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Email opens your client addressed to {SITE.email}. WhatsApp opens a chat with {SITE.phone} pre-filled with your details.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  value,
  onChange,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}{required && <span className="text-primary">*</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-primary/40 focus:ring-2"
      />
    </div>
  );
}