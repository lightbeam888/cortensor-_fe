import * as ROUTES from "@constants/routes";
import Link, { ExternalLinkIcon } from "@components/Link";

import logo from "@assets/logo.svg";
import discord from "@assets/discord.svg";
import telegram from "@assets/telegram.svg";
import twitter from "@assets/twitter.svg";
import github from "@assets/github.svg";
import WrapperBackground from "@components/WrapperBackground";

export default function Footer() {
  return (
    <div className="w-full h-full relative">
      <WrapperBackground />
      <div className="h-full w-full">
        <div className="mx-5 mb-0 mt-0 pt-[140px] md:pt-0 md:mx-auto md:mt-[150px] md:max-w-[1360px]">
          <hr className="h-[.1px] w-full border-0 bg-primary opacity-20 " />
        </div>
        <footer className="mx-auto grid grid-cols-1 px-5 pt-[40px] md:mx-auto md:max-w-[1440px] md:grid-cols-3 md:px-10">
          <div>
            <div className="md:pb-[30px] pb-[40px]">
              <Link to={ROUTES.HomePage} className="normal">
                <img src={logo} alt="Consenter" className="logo" />
              </Link>
            </div>
            <ul className="md:mt-[10px] mt-0 md:pb-0 pb-[40px] flex items-center gap-6">
              <li>
                <ExternalLinkIcon
                  href="https://discord.gg/cortensor"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={discord} alt="Discord" />
                </ExternalLinkIcon>
              </li>
              <li>
                <ExternalLinkIcon
                  href="https://t.me/CortensorNetwork"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={telegram} alt="Telegram" />
                </ExternalLinkIcon>
              </li>
              <li>
                <ExternalLinkIcon
                  href="https://twitter.com/cortensor"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={twitter} alt="Twitter" />
                </ExternalLinkIcon>
              </li>
              <li>
                <ExternalLinkIcon
                  href="https://github.com/cortensor/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={github} alt="Github" />
                </ExternalLinkIcon>
              </li>
            </ul>
          </div>
          <div className="flex items-start justify-between text-neutral-bi-30 md:justify-normal md:gap-[30%]">
            <ul className="flex flex-col gap-4 md:flex-none flex-1">
              <li>
                <Link variant="secondary" to={ROUTES.Features}>
                  Features
                </Link>
              </li>
              <li>
                <Link variant="secondary" to={ROUTES.Integrations}>
                  Integrations
                </Link>
              </li>
              <li>
                <Link variant="secondary" to={ROUTES.Vision}>
                  Vision
                </Link>
              </li>
            </ul>
            <ul className="hidden md:flex md:flex-col md:gap-4 ">
              <li>
                <Link variant="secondary" to={ROUTES.Mission}>
                  Mission
                </Link>
              </li>
              <li>
                <Link variant="secondary" to={ROUTES.PrivacyPolicy}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link variant="secondary" to={ROUTES.TermsOfUse}>
                  Terms of Use
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 md:hidden md:flex-none flex-1">
              <li>
                <Link variant="secondary" to={ROUTES.PrivacyPolicy}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link variant="secondary" to={ROUTES.TermsOfUse}>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link variant="secondary" to={ROUTES.Mission}>
                  Mission
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 pl-0 pt-[80px] text-neutral-bi-50 md:pl-[20%] md:pt-0">
            <p>
              <Link to={ROUTES.HomePage} className="text-[#5f5f60] font-[300]">
                Cortensor
              </Link>
              © 2024-2025. All Rights Reserved.
            </p>
            <p>Unleashing the Future of AI Together.</p>
            <p className="text-primary">
              Built with ❤️ in San Francisco, California.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

