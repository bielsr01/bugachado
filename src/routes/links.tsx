import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.png";
import whatsappMono from "@/assets/social/whatsapp.png";
import whatsappBrand from "@/assets/social/whatsapp-1.png";
import shopeeMono from "@/assets/social/shopee-mono.png";
import shopeeBrand from "@/assets/social/shopee-brand.png";
import tiktokMono from "@/assets/social/tik-tok.png";
import tiktokBrand from "@/assets/social/tiktok-1.png";
import telegramBrand from "@/assets/social/telegram-brand.png";
import telegramMono from "@/assets/social/telegrama-1.png";

const SITE_URL = "https://bugachado.lovable.app";
const PAGE_TITLE = "BugAchado — Links oficiais: WhatsApp, Telegram, Instagram e TikTok";
const PAGE_DESC =
  "Todos os canais oficiais da BugAchado em um só lugar: grupo de ofertas no WhatsApp, canal no Telegram, Instagram e TikTok. Entre grátis e receba achados todo dia.";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "bugachado, links, whatsapp, telegram, instagram, tiktok, grupo de ofertas, cupons",
      },
      { name: "author", content: "BugAchado" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { name: "theme-color", content: "#25D366" },
      { name: "language", content: "pt-BR" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/links` },
      { property: "og:site_name", content: "BugAchado" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/links` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Canais oficiais BugAchado",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Grupo de ofertas no WhatsApp",
              url: "https://chat.whatsapp.com/DwxGK3Wwfmy3XKqIgzr8qK?s=cl&p=i&mlu=2",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Canal no Telegram",
              url: "https://t.me/bugachado",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Instagram",
              url: "https://instagram.com/bugachado",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "TikTok",
              url: "https://tiktok.com/@bugachado",
            },
          ],
        }),
      },
    ],
  }),
  component: LinksPage,
});

type LinkItem = {
  label: string;
  href: string;
  mono: string;
  brand: string;
  highlight?: boolean;
};

const links: LinkItem[] = [
  {
    label: "GRUPO DE OFERTAS NO WHATSAPP",
    href: "https://chat.whatsapp.com/DwxGK3Wwfmy3XKqIgzr8qK?s=cl&p=i&mlu=2",
    mono: whatsappMono,
    brand: whatsappBrand,
    highlight: true,
  },
  {
    label: "CANAL NO TELEGRAM",
    href: "https://t.me/bugachado",
    mono: telegramMono,
    brand: telegramBrand,
  },
  {
    label: "CUPONS SHOPEE",
    href: "https://s.shopee.com.br/4ftV0EH5Hs",
    mono: shopeeMono,
    brand: shopeeBrand,
  },
  {
    label: "TIKTOK",
    href: "https://tiktok.com/@bugachado",
    mono: tiktokMono,
    brand: tiktokBrand,
  },
];

function LinksPage() {
  return (
    <main
      className="min-h-screen font-sans selection:bg-primary/30"
      style={{ background: "#f1f3f5" }}
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
              className="flex items-center justify-center transition-opacity hover:opacity-70"
            >
              <img src={link.mono} alt="" className="h-7 w-7 object-contain" />
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
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                <img src={link.brand} alt="" className="h-full w-full object-contain" />
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
