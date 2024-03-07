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
  //variable or state for cached value
  const memoizedRef = useRef(null);

  //check changes in dependencies
  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      //this is our cache to store function and dependencies
      value: cb(),
      deps,
    };
  }

  //clenup logic using cleanup function of useEffect
  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);

  //return memoised value back
  return memoizedRef.current.value;
};

export default useCustomMemo;
