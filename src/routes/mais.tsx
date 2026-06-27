import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/bottom-nav";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/mais")({
  // Renderiza a tela temporaria da secao "mais".
  component: () => (
    <>
      <ComingSoon title="mais" />
      <BottomNav />
    </>
  ),
});
