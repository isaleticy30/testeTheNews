import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/bottom-nav";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/copa")({
  // Renderiza a tela temporaria da secao "copa".
  component: () => (
    <>
      <ComingSoon title="Copa" />
      <BottomNav />
    </>
  ),
});
