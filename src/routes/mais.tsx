import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/bottom-nav";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/mais")({
  component: () => (
    <>
      <ComingSoon title="mais" />
      <BottomNav />
    </>
  ),
});