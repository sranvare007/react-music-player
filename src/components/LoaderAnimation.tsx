import { LottiePlayer } from "lottie-web";
import React, { useEffect, useRef, useState } from "react";

export default function LoaderAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        // assetsPath: "/assets/animations/welcome-animation.json",
        path: "/assets/animations/loader-animation.json",
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full`}
      ref={ref}
    ></div>
  );
}
