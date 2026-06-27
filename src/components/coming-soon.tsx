import { BottomNav } from "@/components/bottom-nav";

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="relative mx-auto min-h-screen max-w-[430px] overflow-hidden bg-cream text-plum">
      <div className="pointer-events-none absolute -left-20 top-32 size-64 rounded-full bg-blush/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-40 size-72 rounded-full bg-sage/40 blur-3xl" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-4 px-8 text-center">
        <span className="rounded-full bg-terracotta/15 px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta">
          em breve
        </span>
        <h1 className="font-display text-[44px] font-light leading-[1]">
          <em className="italic text-terracotta">{title}</em>
        </h1>
        <p className="max-w-[28ch] font-sans text-sm leading-relaxed text-dim">
          Estamos preparando esta seção com o mesmo carinho da edição diária. Volte
          em breve.
        </p>
        <div className="mt-2 flex gap-1.5">
          <span className="size-2 rounded-full bg-terracotta" />
          <span className="size-2 rounded-full bg-plum/20" />
          <span className="size-2 rounded-full bg-plum/20" />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}