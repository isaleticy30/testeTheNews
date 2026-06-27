import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/bottom-nav";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/habitos")({
  // Renderiza a tela temporaria da secao "habitos".
  component: () => (
    <>
      <ComingSoon title="hábitos" />
      <BottomNav />
    </>
  ),
});
