/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";

export const WelcomeAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  // @ts-ignore
  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        // assetsPath: "/assets/animations/welcome-animation.json",
        path: "/assets/animations/welcome-animation.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <div
      className={`w-full h-full flex flex-1 justify-center items-center`}
      ref={ref}
    />
  );
};
