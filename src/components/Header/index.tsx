import React, { useEffect, useState } from "react";
import classNames from "classnames";

import * as ROUTES from "@constants/routes";
import Link from "@components/Link";
import appRoutes from "@routes/Routes";
import Button from "@components/Button";
import AccordionGroup from "@components/Accordion";

import ArrowIcon from "@assets/Arrow.png";
import MenuIcon from "@assets/menu.png";
import logo from "@assets/logo.svg";
import ClosedIcon from "@assets/close.png";
import { motion } from "framer-motion";

const accordionData = [
  {
    id: 1,
    title: "Documentations",
    items: [
      <Link
        key="doc"
        to="https://docs.cortensor.network/"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Documentation
      </Link>,
      <Link
        key="token"
        to="https://docs.cortensor.network/community-and-ecosystem/tokenomics"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Tokenomics
      </Link>,
      <Link
        key="roadmap"
        to="https://docs.cortensor.network/roadmap"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Roadmap
      </Link>,
      <Link
        key="mining"
        to="https://docs.cortensor.network/technical-architecture/mining-overview"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Mining Overview
      </Link>,
      <Link
        key="medium"
        to="https://cortensor.medium.com/"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Medium
      </Link>,
      <Link
        key="dev"
        to="https://docs.cortensor.network/technical-architecture/development-previews"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Dev Previews
      </Link>,
      <Link
        key="tech"
        to="https://docs.cortensor.network/technical-architecture/technical-threads"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Tech Threads
      </Link>,
      <Link
        key="info"
        to="https://docs.cortensor.network/technical-architecture/infographic-archive"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Infographics
      </Link>,
      <Link
        key="partners"
        to="https://docs.cortensor.network/community-and-ecosystem/partnerships"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Partnerships
      </Link>,
    ],
  },
  {
    id: 2,
    title: "Token",
    items: [
      <Link
        key="certik"
        to="https://skynet.certik.com/projects/cortensor"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        CertiK
      </Link>,
      <Link
        key="etherscan"
        to="https://etherscan.io/token/0x8e0eef788350f40255d86dfe8d91ec0ad3a4547f"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Etherscan
      </Link>,
      <Link
        key="cmc"
        to="https://coinmarketcap.com/currencies/cortensor/"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        CoinMarketCap
      </Link>,
      <Link
        key="cg"
        to="https://www.coingecko.com/en/coins/cortensor"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        CoinGecko
      </Link>,
      <Link
        key="dextools"
        to="https://www.dextools.io/app/en/token/cortensor?t=1745745445649"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Dextools
      </Link>,
      <Link
        key="dexscreener"
        to="https://dexscreener.com/ethereum/0x8981dc572dfb436d7d23f1287dee031f833234b9"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Dexscreener
      </Link>,
      <Link
        key="uniswap"
        to="https://app.uniswap.org/explore/tokens/ethereum/0x8e0eef788350f40255d86dfe8d91ec0ad3a4547f"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Uniswap
      </Link>,
    ],
  },
  {
    id: 3,
    title: "Apps & Software",
    items: [
      <Link
        key="dashboard"
        to="https://dashboard-alpha.cortensor.network/"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Dashboard (Alpha)
      </Link>,
      <Link
        key="miner"
        to="https://github.com/cortensor/installer"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Miner (Alpha)
      </Link>,
      <Link
        key="desktop-app"
        to="https://github.com/cortensor/desktop-app"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Desktop App (Alpha)
      </Link>,
      <Link
        key="staking"
        to="https://stake.cortensor.network/"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Staking
      </Link>,
    ],
  },
  {
    id: 4,
    title: "Contact",
    items: [
      <Link
        key="twitter"
        to="https://x.com/cortensor"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Twitter
      </Link>,
      <Link
        key="telegram"
        to="https://t.me/CortensorNetwork"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Telegram
      </Link>,
      <Link
        key="discord"
        to="https://discord.com/invite/cortensor"
        className="normal text-neutral-bi-50 hover:text-primary"
      >
        Discord
      </Link>,
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openId, setOpenId] = useState<number | null>(2);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const updateOpenIdBasedOnScreenSize = () => {
      if (window.innerWidth <= 768) {
        setOpenId(1);
      } else {
        setOpenId(2);
      }
    };

    updateOpenIdBasedOnScreenSize();

    window.addEventListener("resize", updateOpenIdBasedOnScreenSize);

    return () => {
      window.removeEventListener("resize", updateOpenIdBasedOnScreenSize);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white/5 backdrop-blur-[7px] md:bg-transparent">
        <motion.div
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          initial={{
            y: -20,
            x: 0,
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <header className="mx-auto flex h-[62px] max-w-[1440px] items-center justify-between  py-4 pl-4 pr-[28px]  md:h-[75px] md:px-[40px]">
            {/* Logo */}
            <div>
              <Link to={ROUTES.HomePage} className="normal">
                <img
                  src={logo}
                  alt="Consenter"
                  className="mx-0 h-[22px] w-[130px] md:mx-1"
                />
              </Link>
            </div>
            {/* Navigation */}
            <ul className="hidden items-center gap-[40px] md:flex md:w-[470px]">
              {appRoutes.map((route) => (
                <li key={route.id}>
                  <Link to={`${route.path}`}>{route.title}</Link>
                </li>
              ))}
            </ul>
            {/* More Button & Dropdown */}
            <div className="relative hidden h-[44px] w-[110px] overflow-hidden md:block">
              <Button
                className="absolute right-0 top-0 flex h-[44px] w-[97px] items-center justify-center transition-all duration-300 ease-in-out hover:w-[110px]"
                onClick={toggleMenu}
              >
                <div className="flex items-center gap-2">
                  <span>More</span>
                  <img
                    src={ArrowIcon}
                    alt="arrow"
                    className={classNames(
                      "h-3 w-3 transition-transform",
                      menuOpen ? "rotate-180" : "",
                    )}
                  />
                </div>
              </Button>
            </div>
            <button
              className="block md:hidden"
              onClick={() => setNavOpen(true)}
              aria-label="Open menu"
            >
              <img src={MenuIcon} alt="Menu" className="w-6 cursor-pointer" />
            </button>
          </header>
        </motion.div>
      </div>
      {navOpen && (
        <div className="fixed inset-0 z-50 h-screen w-full">
          <div
            className="absolute inset-0 bg-primary bg-opacity-60"
            onClick={() => setNavOpen(false)}
          />
          <div className="relative z-50 m-6 max-h-[80vh] overflow-y-auto rounded-xl bg-white md:hidden">
            <div className="scroll-container right-0 z-50 mt-2 h-auto w-full overflow-y-auto overflow-x-hidden  px-5 py-2 pb-10">
              <div className="w-full">
                <img
                  src={ClosedIcon}
                  alt="Close"
                  onClick={() => setNavOpen(false)}
                  className="relative z-50 float-right h-[30px] cursor-pointer transition-transform"
                />
              </div>
              {accordionData.map((section) => (
                <AccordionGroup
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  items={section.items}
                  isOpen={openId === section.id}
                  onToggle={handleToggle}
                  classNameHeader="mx-5"
                  classNameItem="text-primary underline font-thin  mx-5 !text-[14px] py-0"
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-50  w-full">
            <div
              className="fixed inset-0  w-[110vw] bg-primary bg-opacity-50"
              onClick={() => setMenuOpen(false)}
            />
            <div className="scroll-container scrollbar-hide absolute right-10 top-3 z-50 h-auto w-[322px] overflow-x-hidden overflow-y-hidden scroll-smooth rounded-xl bg-white p-4 shadow-lg"> 
              <div className="mb-5 w-full">
                <img
                  src={ClosedIcon}
                  alt="Close"
                  onClick={() => setMenuOpen(false)}
                  className="relative z-50 float-right h-[36px] w-[36px] cursor-pointer transition-transform"
                />
              </div>
              <div className="mt-5">
                {accordionData.map((section) => (
                  <AccordionGroup
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    items={section.items}
                    isOpen={openId === section.id}
                    onToggle={handleToggle}
                    classNameHeader="mx-5 !text-[18px] font-[300]"
                    classNameItem="text-primary underline !decoration-gray-400 font-[300] mx-5 !text-[16px] !underline-offset-2 py-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
