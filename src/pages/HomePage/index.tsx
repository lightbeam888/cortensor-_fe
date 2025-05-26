import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import MainLayout from "@layout/MainLayout";
import HeroBanner from "@components/Hero";
import Section1 from "@components/Section1";
import Section6 from "@components/Section6";
import Section8 from "@components/Section8";
import Section7 from "@components/Section7";
import Section4 from "@components/Section4";
import Section2 from "@components/Section2";
import Section5 from "@components/Section5";
import Section3 from "@components/Section3";
// import WrapperBackground from "@components/WrapperBackground";
import { useMediaQuery } from "react-responsive";

export default function HomePage() {
  const location = useLocation();
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // useEffect(() => {
  //   const hash = location.hash;
  //   if (hash) {
  //     const element = document.querySelector(hash);
  //     if (element) {
  //       setTimeout(() => {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }, 100);
  //     }
  //   }
  // }, [location]);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const yOffset = -145;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <MainLayout>
      <Helmet>
        <title>Cortensor - Democratizing AI for Universal Access</title>
      </Helmet>
      <div>
        <HeroBanner id="home" />
        <div className="pointer-events-none relative h-full w-full pb-0 ">
          {/* <div className="absolute inset-0 z-10 h-full w-full backdrop-blur-md"></div> */}
          {/* <div className="absolute inset-0 z-10 h-full w-full bg-[rgba(255,255,255,0.4)]"></div> md:pb-[350px] */}
          {/* <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.45)_5%,rgba(255,255,255,0.75)_20%,rgba(255,255,255,0.8)_90%,rgba(255,255,255,0.2)_99%,rgba(255,255,255,0)_100%)]"></div> */}
          <div className="relative inset-0 z-10">
            <div className="mt-0 pt-0 md:px-[10.76vw] md:pb-[150px] md:pt-10">
              <div className="md:mx-auto md:max-w-[1130px] ">
                <Section1 id="features" />
              </div>
            </div>
            <div className="relative z-10 mt-[130px] md:mt-[18px] md:px-[2.78vw]">
              <div className="md:mx-auto md:max-w-[1360px]">
                <Section2 />
              </div>
            </div>
            {!isDesktop && (
              <div className="z-10 mb-0 mt-[140px] px-[15px] pb-[140px] md:mt-40 md:px-0 md:pb-0">
                <Section3 />
              </div>
            )}
          </div>
        </div>
        <div className="pointer-events-none relative inset-0 z-10 h-full w-full pb-0">
          {/* <WrapperBackground classNameBg="mt-[140px] pt-0 md:mt-[-100px] md:mb-[-150px] mb-0" /> */}
          {isDesktop && (
            <div className="z-10 mt-[40px] px-[15px]  md:mt-40 md:px-0">
              <Section3 />
            </div>
          )}
          <div className="z-10 mt-0 pt-0 md:mt-[40px] md:px-[2.78vw]">
            <div className="md:mx-auto md:max-w-[1360px]">
              <Section4 id="integrations" />
            </div>
          </div>
          <div className="z-10 mx-auto mt-[46px] max-w-[1440px] md:mt-[44px]">
            <Section5 />
          </div>
          <div className="z-10 mt-[140px] px-[5px] md:mt-[160px] md:px-[10.76vw]">
            <div className="md:mx-auto md:max-w-[1130px]">
              <Section6 />
            </div>
          </div>
          <div className="z-10 mt-[140px] px-[15px] md:mt-40 md:px-[2.78vw]">
            <div className="md:mx-auto md:max-w-[1360px]">
              <Section7 idVision="vision" idMission="mission" />
            </div>
          </div>
          <div className="z-10 mt-[140px] px-[6px] md:mt-32 md:px-[10.76vw]">
            <div className="md:mx-auto md:max-w-[1130px]">
              <Section8 />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
