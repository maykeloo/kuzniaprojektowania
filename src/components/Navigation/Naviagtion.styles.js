import styled from "styled-components";
import { darkColor, device, greenColor } from "../Variables";
import { lightColor } from "../Variables";

import { motion } from "framer-motion";


export const NavigationBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  z-index: 3; 
  color: ${lightColor}
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  margin-top: 1rem;
  z-index: 10;
  margin-left: 2rem;
`;

export const MenuText = styled.span`
  display: none;
  color: ${({menu}) => menu ? 'black' : lightColor};
  
  @media ${device.tablet} {
    display: block;
    text-transform: uppercase;
    font-weight: 500;
  }

  span:nth-child(2n) {
    transition: 0.2s;
    display: inline-block;
    transform: ${({ menu }) => (menu ? "translateY(5px)" : "translateY(0)")};
  }
  span:nth-child(2n - 1) {
    transition: 0.2s;
    display: inline-block;
    transform: ${({ menu }) => (menu ? "translateY(-5px)" : "translateY(0)")};
  }
`;

export const HamburgerBox = styled.div``;

export const LogoWrapper = styled.div`
  height: 100%;
  width: 10rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 50%;
  transform: translate(-50%);

  > * {
    width: 60%;
  }
`;
export const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${lightColor};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FloatingDiv = styled(motion.div)`
  width: 150vw;
  height: 100vh;
  background-color: ${greenColor};
  position: fixed;
  z-index: 3;
`;


export const MenuContent = styled(motion.div)`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MenuBar = styled(motion.Link)`
  width: 100%;
  height: 25%;
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  overflow: hidden;
`

export const MenuBarText = styled(motion.span)`
  font-size: 5rem;
  color: black;
`

export const MenuLine = styled.span`
  display: block;
  flex-grow: 1;
  height: 2px;
  background-color: black;
`