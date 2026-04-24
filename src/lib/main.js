/* =============================================================
   UBCON — main.js
   High-end interactions, lazy-loading and anime.js v4 timelines.
   Exported as setupUbconAnimations() and called from a useEffect
   in route components.
   ============================================================= */

import { animate, createTimeline, stagger, onScroll, svg } from "animejs";
const { createDrawable } = svg;

/** Reveal-on-scroll for any [data-reveal] / .reveal element. */
function setupReveals() {
  const els = document.querySelectorAll(".reveal, [data-reveal]");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/** Lazy-load any <img data-src="..."> by swapping data-src -> src on enter. */
function setupLazyImages() {
  const imgs = document.querySelectorAll("img[data-src]");
  if (!imgs.length) return () => {};
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      const src = img.getAttribute("data-src");
      if (src) {
        img.src = src;
        img.removeAttribute("data-src");
        img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
      }
      io.unobserve(img);
    });
  }, { rootMargin: "200px" });
  imgs.forEach((img) => io.observe(img));
  return () => io.disconnect();
}

/** Draw any SVG path with [data-draw] using anime.js createDrawable + onScroll. */
function setupDrawables() {
  const paths = document.querySelectorAll("[data-draw]");
  paths.forEach((p) => {
    try {
      animate(createDrawable(p), {
        draw: ["0 0", "0 1", "1 1"],
        delay: stagger(40),
        ease: "inOut(3)",
        autoplay: onScroll({ sync: true }),
      });
    } catch (e) {
      // anime.js sometimes errors if path has no length yet — ignore safely.
      console.warn("draw skipped", e);
    }
  });
}

/** Center-out staggered dot grid (the user's exact requested snippet). */
function setupDotGrid() {
  const grid = document.querySelector("[data-dot-grid]");
  if (!grid) return;
  const options = { grid: [13, 13], from: "center" };

  // Build the dots if not present.
  if (!grid.querySelector(".dot")) {
    const total = options.grid[0] * options.grid[1];
    grid.style.gridTemplateColumns = `repeat(${options.grid[0]}, 10px)`;
    grid.style.gridTemplateRows = `repeat(${options.grid[1]}, 10px)`;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < total; i++) {
      const d = document.createElement("div");
      d.className = "dot";
      frag.appendChild(d);
    }
    grid.appendChild(frag);
  }

  createTimeline({ loop: true, defaults: { duration: 1200 } })
    .add(
      ".dot",
      {
        scale: stagger([1.1, 0.75], options),
        ease: "inOutQuad",
      },
      stagger(200, options)
    );
}

/** Hero word-by-word entrance. */
function setupHeroIntro() {
  const target = document.querySelector("[data-hero-words]");
  if (!target) return;
  const words = target.querySelectorAll(".w");
  if (!words.length) return;
  animate(words, {
    y: [{ from: "110%", to: "0%" }],
    opacity: [{ from: 0, to: 1 }],
    duration: 900,
    delay: stagger(70, { start: 150 }),
    ease: "out(4)",
  });
}

/** Subtle magnetic effect on [data-magnetic] elements. */
function setupMagnetic() {
  const els = document.querySelectorAll("[data-magnetic]");
  const handlers = [];
  els.forEach((el) => {
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    };
    const reset = () => {
      el.style.transform = "";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    handlers.push(() => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    });
  });
  return () => handlers.forEach((h) => h());
}

/** Counter-up for [data-count-to]. */
function setupCounters() {
  const els = document.querySelectorAll("[data-count-to]");
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const to = parseFloat(el.getAttribute("data-count-to") || "0");
      const format = el.getAttribute("data-count-format") || "locale";
      const obj = { v: 0 };
      animate(obj, {
        v: to,
        duration: 1600,
        ease: "out(3)",
        onUpdate: () => {
          const n = Math.round(obj.v);
          el.textContent = format === "plain" ? String(n) : n.toLocaleString();
        },
      });
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  els.forEach((el) => io.observe(el));
}

/** Public entry — runs all wiring. Returns a teardown function. */
export function setupUbconAnimations() {
  if (typeof window === "undefined") return () => {};
  // Wait one frame so DOM is painted.
  let teardownReveals = () => {};
  let teardownLazy = () => {};
  let teardownMagnetic = () => {};

  const raf = window.requestAnimationFrame(() => {
    teardownReveals = setupReveals();
    teardownLazy = setupLazyImages();
    setupDrawables();
    setupDotGrid();
    setupHeroIntro();
    teardownMagnetic = setupMagnetic();
    setupCounters();
  });

  return () => {
    window.cancelAnimationFrame(raf);
    teardownReveals();
    teardownLazy();
    teardownMagnetic();
  };
}