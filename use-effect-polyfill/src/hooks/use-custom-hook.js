import { useRef } from "react";

export const useCustomEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  //first render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    effect();
    return;
  }

  //dependencies changed or no dependencies
  const depsChanged = deps
    ? JSON.stringify(prevDeps.current) !== JSON.stringify(deps)
    : true;
  if (depsChanged) {
    effect();
  }

  //cleanup

  prevDeps.current = deps || [];
};
