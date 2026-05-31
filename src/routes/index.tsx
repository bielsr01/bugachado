import { createFileRoute } from "@tanstack/react-router";
import { landingConfig } from "@/config/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BugAchado — Ofertas, Bugs de Preço e Promoções Diárias" },
      {
        name: "description",
        content:
          "Entre no grupo da BugAchado e receba ofertas escondidas, cupons, bugs de preço e descontos reais das maiores lojas do Brasil.",
      },
      { property: "og:title", content: "BugAchado — Pare de pagar caro!" },
      {
        property: "og:description",
        content: "Promoções, bugs de preço e cupons todos os dias no seu WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function CTAButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "accent";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-5 text-lg font-black tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-center animate-pulse-glow";
  const bg =
    variant === "accent"
      ? { background: "var(--gradient-urgent)", color: "white", boxShadow: "var(--shadow-glow-accent)" }
      : { background: "var(--gradient-cta)", color: "var(--primary-foreground)", boxShadow: "var(--shadow-glow)" };
  return (
    <a
      href={landingConfig.groupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`}
      style={bg}
    >
      {children}
    </a>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/30">
      {/* HEADER / LOGO */}
      <header className="flex justify-center pt-8 pb-4">
        <img 
          src="/src/assets/logo.png" 
          alt="BugAchado Logo" 
          className="h-32 md:h-48 drop-shadow-xl animate-float-up"
        />
      </header>

      {/* HERO */}
      <section className="px-4 pb-12 md:pb-20 text-center animate-float-up [animation-delay:200ms]">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-black text-accent uppercase tracking-widest mb-6">
            🔥 100% Gratuito & Vitalício
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] text-foreground">
            AS MELHORES <span className="text-primary italic">OFERTAS</span> <br />
            DIRETO NO SEU WHATSAPP
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            Economize de verdade com bugs de preço, cupons exclusivos e promoções que duram poucos minutos.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-6">
            <CTAButton className="min-w-[320px]">
              QUERO ENTRAR NO GRUPO
            </CTAButton>
            
            <div className="flex items-center gap-4 text-sm font-bold text-muted-foreground/80">
              <span className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                Amazon
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                M. Livre
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                Shopee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL / STATS SIMPLIFICADO */}
      <section className="bg-card border-y border-border py-10 px-4">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary">{landingConfig.social.membros}</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Membros Ativos</div>
          </div>
          <div className="hidden md:block">
            <div className="text-3xl md:text-4xl font-black text-primary">{landingConfig.social.ofertas}</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Ofertas Enviadas</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-primary">{landingConfig.social.diarias}</div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Bugs Diários</div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA - SIMPLES */}
      <section className="px-4 py-16 md:py-24 max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-black tracking-tight mb-12">
          Como funciona?
        </h2>
        <div className="space-y-6">
          {[
            { n: "1", t: "Entre no Grupo", d: "Acesse pelo link e aguarde as notificações." },
            { n: "2", t: "Receba as Ofertas", d: "Nossa equipe varre a internet 24h em busca de bugs." },
            { n: "3", t: "Economize", d: "Clique no link e compre antes que o estoque acabe." },
          ].map((s) => (
            <div key={s.n} className="flex items-start gap-5 p-6 rounded-2xl bg-white shadow-sm border border-border">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-lg font-black">
                {s.n}
              </div>
              <div>
                <h3 className="text-lg font-bold">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-2xl rounded-[2rem] p-8 md:p-12 text-center bg-accent text-white shadow-xl">
          <p className="text-lg md:text-xl font-black leading-tight">
            NÃO FIQUE DE FORA! 🚨
          </p>
          <p className="mt-4 text-white/90 text-sm md:text-base font-medium">
            Muitos produtos aparecem com até 90% de desconto por erro do sistema. 
            Essas ofertas duram poucos segundos.
          </p>
          <div className="mt-8">
            <CTAButton variant="primary" className="!bg-white !text-accent !shadow-none">
              GARANTIR MINHA VAGA
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-4 py-12 text-center bg-white">
        <img src="/src/assets/logo.png" alt="Logo" className="h-16 mx-auto mb-6 opacity-80" />
        <p className="text-sm font-bold text-muted-foreground">
          © {new Date().getFullYear()} BugAchado.com
        </p>
        <p className="mt-2 text-xs text-muted-foreground/60 max-w-xs mx-auto">
          Encontramos as melhores ofertas para você. Não vendemos produtos, apenas facilitamos sua economia.
        </p>
      </footer>
    </main>
  );
}
