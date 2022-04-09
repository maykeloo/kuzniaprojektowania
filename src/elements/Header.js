import styled, { keyframes } from "styled-components";
import {device} from './Body'
//ASSETS
import videobg from '../assets/videobg.mp4'
import scrolldown from '../assets/scrolldown.svg'

//ANIMATIONS
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const VideoBackground = styled.video.attrs(() => ({
    src: videobg,
    loop: true,
    playsInline: true,
    muted: true,
    autoPlay: true
}))`
    width: 100vw;
    height: 115vh;
    position: absolute;
    left: 0;
    object-fit: cover;
    z-index: -1;
`

export const HeaderContent = styled.div`
    width: 85%;
    margin: 0 auto;
    color: white;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const HeaderWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    
    @media ${device.tablet} {
        align-items: center;
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    margin: 0;
    padding: 0;

    @media ${device.tablet} {
        font-size: 4rem;
        text-align: center;
    }
`

export const SubText = styled.p`
    display: block;
    width: 30%;

    
    @media ${device.tablet} {
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
    }
`

export const ConfigurateButton = styled.span`
    padding: 0.5rem 2rem;
    display: inline-flex;
    cursor: pointer;
    background: white;
    color: black;
    border-radius: 3px;
    margin-top: 2rem;
    align-items: center;
    gap: 1rem;
    font-weight: 600;

    @media ${device.tablet} {
        font-size: 1.5rem;
    }

    &:hover {
        img {
            transform: translateX(5px);
        }
    }
    #arrowwrap {
        display: flex;
        align-items: center;
    }

    img {
        width: 1.5rem;
        transition: 0.3s;   
    }
`

export const ScrollDown = styled.img.attrs(() => ({
    src: scrolldown
}))`
    position: absolute;
    width: 10rem;
    bottom: -5rem;
    left: calc(50% - 5rem);
    cursor: pointer;
    animation: ${rotate} 8s linear infinite;


    @media ${device.tablet} {
        bottom: 2rem;
    }
`