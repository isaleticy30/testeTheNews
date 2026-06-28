import { Link, useRouterState } from "@tanstack/react-router";
import { Newspaper, Flame, Trophy, BookOpen, Menu } from "lucide-react";

const items = [
  { to: "/", label: "Edição", Icon: Newspaper },
  { to: "/acervo", label: "Acervo", Icon: BookOpen },
  { to: "/habitos", label: "Hábitos", Icon: Flame },
  { to: "/copa", label: "Copa", Icon: Trophy },
  { to: "/mais", label: "Mais", Icon: Menu },
] as const;

export function BottomNav() {
  // Mantem a navegacao principal fixa no rodape e destaca a rota atual.
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-5">
      <nav className="pointer-events-auto w-full max-w-[400px] rounded-full border border-plum/10 bg-plum/95 px-3 py-2.5 shadow-[0_20px_50px_-20px_rgba(60,30,80,0.5)] backdrop-blur">
        <ul className="flex items-center justify-between">
          {items.map(({ to, label, Icon }) => {
            const active = path === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 transition-all ${
                    active
                      ? "bg-terracotta text-cream"
                      : "text-cream/55 hover:text-cream"
                  }`}
                >
                  <Icon className="size-[18px]" strokeWidth={2.25} />
                  {active && (
                    <span className="font-sans text-[11px] font-semibold lowercase tracking-tight">
                      {label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
