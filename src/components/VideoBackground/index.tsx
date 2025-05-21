import mainBackgroundVideo from "@assets/main-background.webm";
import * as Styles from "./VideoBackground.styles";
import { useRef, useState } from "react";
// import WrapperBg from "@assets/wrapper-bg.png";
export default function VideoBackground() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoaded = () => {
    window.dispatchEvent(new Event("video-loaded"));
  };

  const handleVideoError = () => {
    console.error("Video load failed");
    setVideoError(true);
  };
  return (
    <Styles.Wrapper className="fixed left-0 right-0 top-0 z-[-1] h-full w-full">
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
          className="absolute left-0 top-0 z-[-1] aspect-video h-full w-full object-cover"
        >
          <source src={mainBackgroundVideo} type="video/webm" />
        </video>
      )}
      {/* <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onError={handleVideoError}
        onLoadedData={handleVideoLoaded}
        className="absolute left-0 top-0 z-[-1] aspect-video h-full w-full object-cover"
      >
        <source src={mainBackgroundVideo} type="video/webm" />
      </video> */}
      {/* <div className="pointer-events-none absolute inset-0 z-20 opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="grainy">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
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
      </div> */}
      {/* <div className="pointer-events-none absolute inset-0 z-20 opacity-40 mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="grainy">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="1"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0 0.05 0.2" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="0.3" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grainy)" />
        </svg>
      </div>  */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="absolute bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* <div className="fixed inset-0 z-50 bg-black bg-opacity-50"></div> */}
      {/* <div
        className="absolute left-0 top-0 h-full w-full z-10"
        style={{
          backgroundColor: "#f2e2df",
          backgroundImage: `url("${WrapperBg}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: "40%", 
          pointerEvents: "none",
          mixBlendMode: "overlay",
          filter: "brightness(1)"
        }}
      ></div> */}
    </Styles.Wrapper>
  );
}
