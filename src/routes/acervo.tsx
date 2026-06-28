import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search, Heart, Eye, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import featureImg from "@/assets/feature-collapse.jpg";
import sportsImg from "@/assets/sports-brazil.jpg";
import moneyImg from "@/assets/money-bank.jpg";
import starfishImg from "@/assets/rising-starfish.jpg";

export const Route = createFileRoute("/acervo")({
  head: () => ({
    meta: [
      { title: "Acervo — The News" },
      { name: "description", content: "1.396 edições anteriores da newsletter The News." },
      { property: "og:title", content: "Acervo — The News" },
      { property: "og:description", content: "1.396 edições anteriores da newsletter The News." },
    ],
  }),
  component: Acervo,
});

const filters = [
  { label: "Todas", color: "bg-plum text-cream" },
  { label: "The News", color: "bg-cream/60 text-plum ring-1 ring-plum/10" },
  { label: "night", color: "bg-cream/60 text-plum ring-1 ring-plum/10" },
  { label: "copa", color: "bg-cream/60 text-plum ring-1 ring-plum/10" },
];

const editions = [
  {
    tag: "Sports",
    accent: "bg-sage text-plum",
    title: "já está liberado se iludir?",
    desc: "vini jr. decide mais uma vez, volta de neymar e show de rayan na ponta.",
    likes: 10,
    img: sportsImg,
    date: "24 jun",
  },
  {
    tag: "Money",
    accent: "bg-terracotta text-cream",
    title: "O bispo, o Master e o FGC",
    desc: "O sistema está em depuração. E o FGC, mais uma vez, terá que pagar a conta.",
    likes: 6,
    img: moneyImg,
    date: "23 jun",
  },
  {
    tag: "Rising",
    accent: "bg-blush text-plum",
    title: "sua memória está ruim?",
    desc: "um problema do século — e o que dá pra fazer começando ainda hoje.",
    likes: 26,
    img: starfishImg,
    date: "22 jun",
  },
];

function Acervo() {
  // Exibe a tela de acervo com destaque para a edicao mais recente e historico.
  return (
    <div className="relative mx-auto min-h-screen max-w-[430px] overflow-hidden bg-cream text-plum">
      <div className="pointer-events-none absolute -right-24 top-24 size-72 rounded-full bg-terracotta/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-[480px] size-64 rounded-full bg-sage/35 blur-3xl" />

      <header className="relative z-10 flex items-center justify-between px-6 pt-6">
        <Link
          to="/"
          aria-label="Voltar"
          className="grid size-10 place-items-center rounded-full border border-plum/15 bg-cream/70 backdrop-blur"
        >
          <ArrowLeft className="size-4" strokeWidth={2.25} />
        </Link>
        <p className="font-display text-base italic">acervo</p>
        <button
          aria-label="Filtros"
          className="grid size-10 place-items-center rounded-full border border-plum/15 bg-cream/70 backdrop-blur"
        >
          <SlidersHorizontal className="size-4" strokeWidth={2.25} />
        </button>
      </header>

      <main className="relative z-10 pb-32">
        <section className="px-6 pt-8">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-terracotta">
            1.396 edições · desde 2022
          </p>
          <h1 className="mt-3 font-display text-[40px] font-light leading-[1.02] tracking-tight">
            Reabra qualquer <em className="italic text-terracotta">manhã</em>.
          </h1>

          <label className="mt-6 flex items-center gap-3 rounded-full bg-cream/80 px-5 py-4 ring-1 ring-plum/10 backdrop-blur">
            <Search className="size-4 text-dim" strokeWidth={2.25} />
            <input
              type="search"
              placeholder="Buscar tópico, data, autor..."
              className="flex-1 bg-transparent font-sans text-sm placeholder:text-dim focus:outline-none"
            />
            <span className="rounded-full bg-plum px-2.5 py-1 text-[10px] font-semibold text-cream">
              ⌘K
            </span>
          </label>

          <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.label}
                className={`whitespace-nowrap rounded-full px-4 py-2 font-sans text-[12px] font-medium ${f.color}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* Destaque principal do acervo */}
        <section className="mt-8 px-6">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-terracotta/15 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-terracotta">
            <span className="size-1.5 animate-pulse rounded-full bg-terracotta" />
            Mais recente
          </p>
          <article className="relative overflow-hidden rounded-[36px] bg-plum text-cream shadow-[0_30px_60px_-30px_rgba(60,30,80,0.55)]">
            <img
              src={featureImg}
              alt=""
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-cream/70">
                The News · hoje
              </p>
              <h2 className="mt-2 text-balance font-display text-[28px] font-light leading-[1.05]">
                os sócios das <em className="italic text-blush">americanas</em>
                {" "}foram de americanas?
              </h2>
              <p className="mt-3 line-clamp-2 font-sans text-[13px] leading-snug text-cream/70">
                novo reality do tinder no tiktok, farpas entre michelle e flávio,
                dinamarca quer proibir...
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-4 font-sans text-[12px] text-cream/75">
                  <span className="flex items-center gap-1.5">
                    <Heart className="size-3.5 text-blush" fill="currentColor" /> 7
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="size-3.5" /> 4.107
                  </span>
                </div>
                <span className="grid size-11 place-items-center rounded-full bg-cream text-plum">
                  <ArrowUpRight className="size-5" strokeWidth={2.25} />
                </span>
              </div>
            </div>
          </article>
        </section>

        {/* Titulo da lista historica */}
        <div className="mt-10 flex items-end justify-between px-6">
          <h3 className="font-display text-2xl font-light">
            Edições <em className="italic text-terracotta">anteriores</em>
          </h3>
          <span className="font-sans text-[11px] text-dim">recente ↓</span>
        </div>

        {/* Lista de edicoes anteriores */}
        <ul className="mt-5 space-y-3 px-6">
          {editions.map((e, i) => (
            <li key={i}>
              <article className="relative flex items-stretch gap-3 rounded-[28px] bg-cream/80 p-3 ring-1 ring-plum/8 backdrop-blur">
                <div className="relative size-28 shrink-0 overflow-hidden rounded-[22px]">
                  <img
                    src={e.img}
                    alt=""
                    loading="lazy"
                    width={400}
                    height={400}
                    className="size-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-cream/95 px-2 py-0.5 text-[9px] font-semibold text-plum">
                    {e.date}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col py-1">
                  <span
                    className={`w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${e.accent}`}
                  >
                    {e.tag}
                  </span>
                  <h4 className="mt-1.5 text-balance font-display text-[18px] font-normal leading-tight">
                    {e.title}
                  </h4>
                  <p className="mt-1 line-clamp-2 font-sans text-[11.5px] leading-snug text-dim">
                    {e.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="flex items-center gap-1.5 font-sans text-[11px] text-dim">
                      <Heart className="size-3 text-pulse" fill="currentColor" />
                      {e.likes}
                    </span>
                    <ArrowUpRight className="size-4 text-plum/40" strokeWidth={2.25} />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <button className="mx-6 mt-6 w-[calc(100%-3rem)] rounded-full border border-plum/15 bg-cream/70 py-4 font-sans text-[12px] font-semibold text-plum/80 backdrop-blur">
          carregar mais edições
        </button>
      </main>

      <BottomNav />
    </div>
  );
}
