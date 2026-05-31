import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.png";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "BugAchado — Links" },
      { name: "description", content: "Todos os canais oficiais da BugAchado em um só lugar." },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
    ],
    links: [{ rel: "canonical", href: "/links" }],
  }),
  component: LinksPage,
});

// Monochrome (black) outline icons for the small row
const monoBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function WhatsAppMono({ className }: { className?: string }) {
  return (
    <svg {...monoBase} className={className}>
      <path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.5 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3 0 .5-.1.7l-.4.4c-.2.2-.3.4-.1.7a6.3 6.3 0 0 0 3 2.8c.4.2.6.1.8-.1l.5-.6c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4 0 .8-.4 1.6-.8 1.8a3 3 0 0 1-2.5.2c-1.6-.5-4.2-2-5.6-4.8a3.5 3.5 0 0 1-.5-1.8c0-.9.5-1.5.8-1.7l.1-.7Z" />
    </svg>
  );
}
function TelegramMono({ className }: { className?: string }) {
  return (
    <svg {...monoBase} className={className}>
      <path d="M21 4 2.5 11.2c-.6.2-.6 1 0 1.2l4.7 1.5L9 19.5c.2.6 1 .7 1.4.2l2.4-2.7 4.6 3.4c.5.4 1.2.1 1.3-.5L21.9 4.7c.1-.6-.4-1-.9-.7Z" />
      <path d="m7.2 13.9 10.6-7.2-7.8 8.7" />
    </svg>
  );
}
function InstagramMono({ className }: { className?: string }) {
  return (
    <svg {...monoBase} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TikTokMono({ className }: { className?: string }) {
  return (
    <svg {...monoBase} className={className}>
      <path d="M15 3v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M15 3a4.5 4.5 0 0 0 4.5 4.5" />
    </svg>
  );
}

// Colored brand icons for the large buttons
function WhatsAppBrand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path fill="#25D366" d="M16 0a16 16 0 0 0-13.7 24.2L0 32l8-2.1A16 16 0 1 0 16 0Z" />
      <path fill="#fff" d="M11.3 9.1c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.4 4 1.6 4.2c.2.3 2.8 4.5 7 6.1 3.5 1.4 4.2 1.1 5 1 .8-.1 2.5-1 2.9-2 .4-1 .4-1.9.3-2-.1-.2-.4-.3-.8-.5l-2.8-1.4c-.4-.2-.7-.2-1 .2l-1.2 1.5c-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5-.1-.7l-1.3-3Z" />
    </svg>
  );
}
function TelegramBrand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#229ED9" />
      <path fill="#fff" d="m23.7 9.4-2.9 14.1c-.2 1-.8 1.2-1.6.8L15 21l-2 2c-.2.2-.4.4-.8.4l.3-4.4 8.1-7.3c.4-.3-.1-.5-.6-.2l-10 6.3-4.3-1.4c-.9-.3-.9-.9.2-1.4L22.5 8.6c.8-.3 1.4.2 1.2.8Z" />
    </svg>
  );
}
function InstagramBrand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <radialGradient id="ig-g" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#ig-g)" />
      <rect x="7" y="7" width="18" height="18" rx="5" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="16" cy="16" r="4.5" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="21.5" cy="10.5" r="1.2" fill="#fff" />
    </svg>
  );
}
function TikTokBrand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="8" fill="#000" />
      <path fill="#25F4EE" d="M20.5 11.6v8.8a3.4 3.4 0 1 1-3.4-3.4v-2.8a6.2 6.2 0 1 0 6.2 6.2V13a7.4 7.4 0 0 0 3.9 1.1v-2.8a4.6 4.6 0 0 1-3.2-1.3 4.6 4.6 0 0 1-1.3-2.4h-2.2Z" />
      <path fill="#FE2C55" d="M21.5 10.6v8.8a3.4 3.4 0 1 1-3.4-3.4v-2.8a6.2 6.2 0 1 0 6.2 6.2V12a7.4 7.4 0 0 0 3.9 1.1v-2.8a4.6 4.6 0 0 1-3.2-1.3 4.6 4.6 0 0 1-1.3-2.4h-2.2Z" transform="translate(-1 -1)" />
      <path fill="#fff" d="M21 11.1v8.8a3.4 3.4 0 1 1-3.4-3.4v-2.8a6.2 6.2 0 1 0 6.2 6.2V12.5a7.4 7.4 0 0 0 3.9 1.1v-2.8a4.6 4.6 0 0 1-4.5-3.7H21Z" />
    </svg>
  );
}

type LinkItem = {
  label: string;
  href: string;
  mono: React.ReactNode;
  brand: React.ReactNode;
  highlight?: boolean;
};

const links: LinkItem[] = [
  {
    label: "GRUPO DE OFERTAS NO WHATSAPP",
    href: "https://chat.whatsapp.com/DwxGK3Wwfmy3XKqIgzr8qK?s=cl&p=i&mlu=2",
    mono: <WhatsAppMono className="w-6 h-6" />,
    brand: <WhatsAppBrand className="w-10 h-10" />,
    highlight: true,
  },
  {
    label: "CANAL NO TELEGRAM",
    href: "https://t.me/bugachado",
    mono: <TelegramMono className="w-6 h-6" />,
    brand: <TelegramBrand className="w-10 h-10" />,
  },
  {
    label: "INSTAGRAM",
    href: "https://instagram.com/bugachado",
    mono: <InstagramMono className="w-6 h-6" />,
    brand: <InstagramBrand className="w-10 h-10" />,
  },
  {
    label: "TIKTOK",
    href: "https://tiktok.com/@bugachado",
    mono: <TikTokMono className="w-6 h-6" />,
    brand: <TikTokBrand className="w-10 h-10" />,
  },
];

function LinksPage() {
  return (
    <main
      className="min-h-screen font-sans selection:bg-primary/30"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto w-full max-w-md px-5 pt-10 pb-16">
        <header className="flex flex-col items-center text-center animate-float-up">
          <img
            src={logo}
            alt="BugAchado"
            className="h-32 sm:h-40"
            style={{
              filter:
                "drop-shadow(0 0 14px oklch(0.68 0.20 150 / 0.6)) drop-shadow(0 0 26px oklch(0.68 0.20 150 / 0.3)) drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
            }}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            🛍️ Bug Achado 🛒
          </h1>
          <p className="mt-3 max-w-sm text-sm sm:text-base text-muted-foreground leading-relaxed">
            BugAchado 🚀 Os melhores achados da internet reunidos em um só lugar 💰 Promoções, cupons e descontos que realmente valem a pena 📲 Entre e aproveite! 🔥
          </p>
        </header>

        <section className="mx-auto mt-5 flex w-fit items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={`icon-${link.label}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center text-black transition-opacity hover:opacity-70 [&_svg]:h-6 [&_svg]:w-6"
            >
              {link.mono}
            </a>
          ))}
        </section>

        <section className="mt-8 flex flex-col gap-4">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`animate-float-up relative flex items-center gap-4 overflow-hidden rounded-full bg-card px-5 py-3 text-sm font-semibold tracking-tight text-foreground shadow-md transition-all active:scale-[0.98] hover:scale-[1.02] hover:shadow-lg ${
                link.highlight ? "animate-pulse-glow border border-[#25D366]" : ""
              }`}
              style={{
                animationDelay: `${100 + i * 80}ms`,
                ...(link.highlight ? { boxShadow: "0 0 0 0 rgba(37,211,102,0.7)" } : {}),
              }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                {link.brand}
              </span>
              <span className="flex-1 text-left">{link.label}</span>
            </a>
          ))}
        </section>

        <p className="mt-10 text-center text-xs font-bold text-muted-foreground">
          © {new Date().getFullYear()} BugAchado · Sem spam, só desconto real
        </p>
      </div>
    </main>
  );
}
