import { useRef } from "react";

export const useCustomEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  //first render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup === "function") cleanup();
    };
  }

  //dependencies changed or no dependencies
  const depsChanged = deps
    ? JSON.stringify(prevDeps.current) !== JSON.stringify(deps)
    : true;
  if (depsChanged) {
    const cleanup = effect();
    if (cleanup && typeof cleanup === "function" && deps) cleanup();
  }

  //cleanup

  prevDeps.current = deps || [];
};
