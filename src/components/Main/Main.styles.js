import styled, { keyframes } from "styled-components";
import video from "../../assets/mainvideo.mp4";
import { device, lightColor } from "../Variables";

const slide = keyframes`
  from {
    background-position-x: -100%;
  }
  to {
    background-position-x: 100%;
  }
`;

export const SplineDiv = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 60rem;

  > iframe {
    width: 70%;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }
`

export const MainWrapper = styled.main`
  width: 100%;
  margin: 0 auto;
  margin-top: 10rem;
  position: relative;
  color: ${lightColor};

  @media ${device.tablet} {
    margin-top: 5rem;
  }
`;

export const MainVideo = styled.video.attrs(() => ({
  src: video,
  playsInLine: true,
  muted: true,
  autoPlay: true,
  loop: true,
}))`
  width: 100%;
  height: 20rem;
  margin-top: 3rem;
  object-fit: cover;
`;

export const MainText = styled.div`
  width: 100%;
  height: 20rem;
  position: absolute;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-repeat: repeat-x;
  background-size: cover;
  animation: 10s linear infinite ${slide};
  z-index: -1;
  top: 5%;

  @media ${device.tablet} {
    top: 25%;
  }
`;

export const 