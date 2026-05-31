import { createFileRoute } from "@tanstack/react-router";
import { landingConfig } from "@/config/landing";
import logo from "@/assets/logo.png";
import { Clock, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { OffersCarousel } from "@/components/OffersCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BugAchado — Ofertas escondidas e bugs de preço todos os dias" },
      {
        name: "description",
        content:
          "Receba cupons escondidos e ofertas relâmpago direto no seu WhatsApp. Sem spam, só desconto real. Entre no grupo da BugAchado.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { property: "og:title", content: "BugAchado — Ofertas escondidas todos os dias" },
      {
        property: "og:description",
        content: "Cupons e bugs de preço com até 70% OFF direto no WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function CTA({ label = "👉 LIBERAR ACESSO AO GRUPO AGORA" }: { label?: string }) {
  return (
    <a
      href={landingConfig.groupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse-glow block w-full rounded-2xl px-6 py-5 text-center text-base sm:text-lg font-black tracking-tight text-white transition-transform active:scale-[0.98] hover:scale-[1.02]"
      style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
    >
      {label}
    </a>
  );
}

function Landing() {
  return (
    <main
      className="min-h-screen font-sans selection:bg-primary/30"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto w-full max-w-xl px-5 pt-6 pb-16">
        {/* TOP URGENCY BADGE */}
        <div className="flex justify-center animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[11px] sm:text-xs font-bold text-primary uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            Vagas limitadas — grupo pode lotar
          </span>
        </div>

        {/* LOGO */}
        <header className="flex justify-center mt-6 animate-float-up [animation-delay:100ms]">
          <img src={logo} alt="BugAchado" className="h-28 sm:h-36 drop-shadow-md" />
        </header>

        {/* HERO */}
        <section className="mt-8 text-center animate-float-up [animation-delay:200ms]">
          <h1 className="text-[2rem] leading-[1.05] sm:text-5xl font-black tracking-tighter text-foreground">
            🔥 OFERTAS ESCONDIDAS{" "}
            <span className="text-primary">TODOS OS DIAS</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-bold text-foreground/80">
            Até <span className="text-primary">70% OFF</span> antes de viralizar
          </p>
          <p className="text-sm sm:text-base font-bold text-destructive/90 mt-1">
            (algumas somem em minutos)
          </p>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Receba <strong className="text-foreground">cupons escondidos</strong> e{" "}
            <strong className="text-foreground">ofertas relâmpago</strong> direto no seu WhatsApp —{" "}
            <span className="text-primary font-bold">sem spam, só desconto real</span>.
          </p>

          <div className="mt-8">
            <CTA />
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-destructive">
              <AlertTriangle className="w-3.5 h-3.5" />
              As melhores ofertas acabam em minutos
            </p>
            <p className="mt-2 text-xs text-muted-foreground font-medium">
              ✅ Gratuito · Sem spam · Saia quando quiser
            </p>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-xs sm:text-sm font-bold text-foreground">
            💸 Quem entra primeiro pega as melhores
          </div>
        </section>

        {/* OFFERS CAROUSEL */}
        <section className="mt-14">
          <h2 className="text-center text-xl sm:text-2xl font-black tracking-tight text-foreground mb-6 px-2">
            🚨 Essas ofertas podem acabar a qualquer momento:
          </h2>
          <OffersCarousel />
          <p className="text-center mt-4 text-xs font-bold text-muted-foreground">
            💥 Descontos reais enviados no grupo
          </p>
        </section>


        {/* TRUST BADGES */}
        <section className="mt-10 grid grid-cols-2 gap-3 text-sm">
          {[
            "Ofertas todo dia",
            "Cupons secretos",
            "Sem golpe",
            "Zero spam",
          ].map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-3 font-bold text-foreground"
            >
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              {t}
            </div>
          ))}
        </section>

        {/* FINAL CTA */}
        <section className="mt-12">
          <div className="rounded-3xl bg-card border-2 border-primary/30 p-6 sm:p-8 text-center shadow-lg">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-base sm:text-lg font-bold text-foreground">
              As melhores ofertas acabam em minutos.
              <br />
              <span className="text-primary">Entre agora e não perca nenhuma.</span>
            </p>
            <div className="mt-6">
              <CTA />
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-destructive">
              <AlertTriangle className="w-3.5 h-3.5" />
              Ofertas acabam rápido — não deixe passar
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {landingConfig.siteName}
          </p>
        </footer>
      </div>
    </main>
  );
}
