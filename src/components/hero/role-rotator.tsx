"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 45;
const DELETE_SPEED = 25;
const HOLD_MS = 1800;

export function RoleRotator({ roles }: { roles: string[] }) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    "typing",
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const current = roles[roleIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        const timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED,
        );
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("holding"), HOLD_MS);
      return () => clearTimeout(timeout);
    }

    if (phase === "holding") {
      const timeout = setTimeout(() => setPhase("deleting"), HOLD_MS);
      return () => clearTimeout(timeout);
    }

    if (text.length > 0) {
      const timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        DELETE_SPEED,
      );
      return () => clearTimeout(timeout);
    }

    setRoleIndex((roleIndex + 1) % roles.length);
    setPhase("typing");
  }, [text, phase, roleIndex, roles, reducedMotion]);

  if (reducedMotion) {
    return (
      <span aria-live="polite">
        {roles[0]}
        <span className="text-blue-600 dark:text-blue-400"> / </span>
        {roles[1]}
      </span>
    );
  }

  return (
    <span aria-live="polite" className="inline-flex items-center">
      {text}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-blue-600 dark:bg-blue-400"
      />
    </span>
  );
}
