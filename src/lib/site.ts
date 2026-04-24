import logoImg from "@/assets/ubcon/logo.png";

export const SITE = {
  name: "UBCON General Suppliers Limited",
  short: "UBCON",
  tagline: "Engineering, Mining, Energy & Logistics — supplied across sub-Saharan Africa.",
  email: "ubconsuppliers@gmail.com",
  phone: "+260 769 055 719",
  whatsapp: "260769055719",
  address: "Lusaka, Zambia",
  founded: "9 March 2022 (PACRA)",
  logo: logoImg,
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;