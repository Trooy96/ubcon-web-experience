import { useEffect } from "react";
import { setupUbconAnimations } from "@/lib/main.js";

/**
 * Mounts UBCON's anime.js timelines & scroll behaviours for the page.
 * Re-runs on route change because each route file mounts its own copy.
 */
export function AnimatedScene() {
  useEffect(() => {
    const teardown = setupUbconAnimations();
    return teardown;
  }, []);
  return null;
}