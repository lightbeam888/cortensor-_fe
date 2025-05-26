import { useEffect } from "react";
import { motion } from "framer-motion";

import * as Styles from "./Hero.styles";
import WrapperBackground from "@components/WrapperBackground";

export default function HeroBanner({ id }: { id: string }) {
  useEffect(() => {
    // Inject CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
    document.head.appendChild(link);

    const customStyle = document.createElement("style");
    customStyle.innerHTML = `
      #getWaitlistContainer {
        background-color: transparent !important;
        transition: none !important;
      }

      #getWaitlistContainer * {
        background-color: transparent !important;
      }

      .gw-flex.gw-flex-row.gw-justify-center {
        display: none;
      }

      #getWaitlistContainer input {
        border-radius: 68px !important;
        width: 245px;
        height: 44px;
        font-size:16px;
        font-weight:500;
        border-color: rgba(60, 60, 60, 0.4) !important;
        transition: border-color 0.3s ease;
        background: transparent !important;
        // backdrop-filter: none !important;
        // box-shadow: 2px 5px 2px .5px rgba(60, 60, 60, 0.1) !important;
        // backdrop-filter: blur(8px);
        // -webkit-backdrop-filter: blur(8px);
        // transition: box-shadow 0.3s ease, border-color 0.3s ease;
      }

      #getWaitlistContainer input::placeholder {
        color: rgba(60, 60, 60, 1.5);
      }

      #getWaitlistContainer input:focus {
        border-color: #26262A !important;
        outline: none !important;
        box-shadow: none !important;
      }

      #getWaitlistContainer button {
        border-radius: 68px !important;
        width: 135px;
        height: 44px;
        background-color: #26262a !important;
        transition: width 0.3s ease;
      }

      .gw-flex.gw-flex-row.gw-justify-between.gw-items-center.gw-rounded-3xl.gw-w-full {
        display: flex;
        justify-content: center;
        gap: 12px !important;
        background-color: transparent !important;
        padding: 0 !important;
      }

      #getWaitlistContainer .gw-p-2 {
        padding: 0 !important;
      }

        #getWaitlistContainer button:hover{
          width: 145px !important;
        }

      @media (max-width: 640px) {
        #getWaitlistContainer button,
        #getWaitlistContainer input {
          width: auto !important;
        }
          #getWaitlistContainer button:hover{
          width: unset !important;
        }
      }

      @media (max-width: 480px) {
      #getWaitlistContainer {
        display: flex;
      }
       #getWaitlistContainer button{
          width: 100% !important;
          padding: auto !important;
          margin: 0 auto !important;
          flex: 1;
           white-space: nowrap !important;
        }
        #getWaitlistContainer input {
          width: 100% !important;
          flex:auto;
        }
      }
    `;
    document.head.appendChild(customStyle);

    // Inject script
    const script = document.createElement("script");
    script.src =
      "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Use MutationObserver to wait for the input to appear
    const target = document.getElementById("getWaitlistContainer");

    const observer = new MutationObserver(() => {
      const input = document.querySelector(
        "#getWaitlistContainer input[placeholder]",
      ) as HTMLInputElement;

      if (input) {
        input.placeholder = "Enter Your Email";
        observer.disconnect(); // stop once found
      }
    });

    if (target) {
      observer.observe(target, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Styles.HeroStyles id={id}>
        <WrapperBackground />
        <div className="z-10 mx-auto mb-[140px] mt-[180px] flex h-auto flex-col gap-8 px-4 text-center md:mb-[120px] md:h-[50vh] md:max-w-[919px] md:gap-10 md:pb-20">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Styles.TitleStyles className="h-auto text-[48px] font-medium leading-[100%] tracking-[-1px] md:text-[80px]">
              Decentralized AI <br />
              for Everyone
            </Styles.TitleStyles>
          </motion.div>
          <div className="flex flex-col gap-[28px] md:gap-6">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="px-5 text-[16px] md:text-[19px]"
            >
              <div className="mx-auto max-w-[641px] font-thin">
                Cortensor leverages decentralized AI inference to democratize
                technology and ensure universal access, delivering the critical
                last mile of AI services with seamless integration for users and
                applications.
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="flex justify-center"
            >
              <div
                className="flex w-full justify-center bg-transparent"
                id="getWaitlistContainer"
                data-waitlist_id="18917"
                data-widget_type="WIDGET_2"
              ></div>
            </motion.div>
          </div>
        </div>
      </Styles.HeroStyles>
    </>
  );
}
