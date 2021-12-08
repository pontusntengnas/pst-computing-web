import { useEffect, useState } from "react";

interface ScreenSize {
  width?: number;
  height?: number;
}

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({});

  useEffect(() => {
    const setSize = () =>
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    setSize();

    window.addEventListener("resize", setSize);

    return () => window.removeEventListener("resize", setSize);
  }, []);

  return {
    width: screenSize.width,
    height: screenSize.height,
  };
};
