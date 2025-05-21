import classNames from "classnames";
import { useEffect, useState } from "react";

interface props {
  classNameBg?: string;
}
const WrapperBackground = ({ classNameBg = "" }: props) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  useEffect(() => {
    const handleVideoLoaded = () => {
      setIsVideoLoaded(true);
    };

    window.addEventListener("video-loaded", handleVideoLoaded);

    // Clean up event khi component unmount
    return () => {
      window.removeEventListener("video-loaded", handleVideoLoaded);
    };
  }, []);

  if (!isVideoLoaded) return null;
  return (
    <div
      className={classNames(
        "pointer-events-none absolute inset-0 z-[-1] opacity-60",
        classNameBg,
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <filter id="grainy">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="9"
            stitchTiles="stitch"
            result="turbulence"
          />
          <feFlood flood-color="white" result="flood" />
          <feComposite
            in="flood"
            in2="turbulence"
            operator="in"
            result="composite"
          />
          <feComponentTransfer in="composite" result="transferred">
            <feFuncA type="discrete" tableValues="0.03 0.3" />
          </feComponentTransfer>
          <feGaussianBlur in="transferred" stdDeviation="0.05" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainy)" />
      </svg>
    </div>
  );
};

export default WrapperBackground;
