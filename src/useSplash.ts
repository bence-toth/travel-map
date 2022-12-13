import { useCallback, useState } from "react";

const useSplash = () => {
  const [shouldShowSplash, setShouldShowSplash] = useState(
    !Boolean(localStorage.getItem("splash-hidden") ?? false)
  );

  const onHideSplash = useCallback(() => {
    setShouldShowSplash(false);
    localStorage.setItem("splash-hidden", "true");
  }, []);

  return { shouldShowSplash, onHideSplash };
};

export default useSplash;
