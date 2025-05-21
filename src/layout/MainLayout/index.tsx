import { ReactNode } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import * as Styles from "./MainLayout.styles";
import VideoBackground from "@components/VideoBackground";
import WrapperBackground from "@components/WrapperBackground";

interface IMainLayout {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div className="relative h-screen w-full font-primary text-base font-medium text-primary">
      <VideoBackground />
      <WrapperBackground />
      <Header />
      <Styles.MainWrapper>{children}</Styles.MainWrapper>
      <Styles.GradientDiv className="pb-[60px] md:pb-[126px]">
        <Footer />
        {/* <hr className="mt-[10px] hidden h-[.1px] w-full border-0 bg-primary opacity-20 md:block" /> */}
      </Styles.GradientDiv>
    </div>
  );
}

