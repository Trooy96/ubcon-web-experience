import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/lib/theme";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <ThemeProvider>
      <SiteHeader />
      <main className="flex min-h-[80vh] items-center justify-center bg-background px-4 pt-32">
        <div className="max-w-md text-center">
          <h1 className="font-display text-8xl font-extrabold text-primary">404</h1>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground">Page not found</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-yellow transition-transform hover:-translate-y-0.5"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </ThemeProvider>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "UBCON General Suppliers Limited — Engineering, Mining & Logistics in Africa" },
      {
        name: "description",
        content:
          "UBCON supplies engineering, mining, energy, agriculture, health and safety equipment across sub-Saharan Africa.",
      },
      { name: "author", content: "UBCON General Suppliers Limited" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </ThemeProvider>
  );
}
