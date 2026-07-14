export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-grid"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 85%)",
        }}
      />
      <div
        className="animate-orb-1 absolute -left-24 top-[-10%] h-[520px] w-[520px] rounded-full blur-[110px]"
        style={{ background: "var(--accent-glow)" }}
      />
      <div
        className="animate-orb-2 absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full blur-[110px]"
        style={{ background: "var(--accent-glow-2)" }}
      />
      <div
        className="animate-orb-1 absolute bottom-[-15%] left-1/3 h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{ background: "var(--accent-glow)", animationDelay: "-8s" }}
      />
    </div>
  );
}
