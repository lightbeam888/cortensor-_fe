import { styled } from "styled-components";

export const MainWrapper = styled.main`
  min-height: 100vh;
  z-index: 30;
  position: relative;
`;

export const GradientDiv = styled.div`
  position: relative;
  z-index: 20;

  &::after {
    content: "";
    position: absolute;
    top: -450px;
    left: 0;
    right: 0;
    bottom: 100%;
    background: linear-gradient(
      163deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.01) 50%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 9.6) 100%
    );
    z-index: -1;
    display: none;
  }
  @media (min-width: 768px) {
    background: linear-gradient(169deg, rgb(245, 244, 242 ,0) 0%, rgba(245, 244, 242, 0.9) 10%, rgba(255, 255, 255, 1) 100%);
    &::after {
      display: block;
    }
  }
`;

