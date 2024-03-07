import { useEffect, useRef } from "react";

const areEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== nextDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) return false;
  }

  return true;
};

export const useCustomMemo = (cb, deps) => {
  //varibale or state for cached value
  const memoizedRef = useRef(null);

  //changes in deps
  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      //this is our cache
      value: cb(),
      deps,
    };
  }

  //clenup logic
  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);

  //return memoised value
  return memoizedRef.current.value;
};

export default useCustomMemo;
