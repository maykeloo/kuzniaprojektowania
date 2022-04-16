import React, { useState } from "react";
import {
  FloatingDiv,
  HamburgerWrapper,
  LogoWrapper,
  MenuText,
  NavigationBar,
} from "./Naviagtion.styles";
import Hamburger from "../Hamburger";
import { Logo } from "../Logo";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../Sidebar";
import { floatingDivVariants } from "../Variants";

//ASSETS
const Navigation = () => {
  // SIDEBAR TOGGLE
  const [menuVisible, setMenuVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showMenu = () => {
    setTimeout(() => setMenuVisible(!menuVisible), 300);
    setTimeout(() => setSidebarVisible(!sidebarVisible), 800);
  };
  return (
    <>
      <NavigationBar>
        <AnimatePresence initial={false}>
          {menuVisible && (
            <FloatingDiv
              variants={floatingDivVariants}
              animate="opening"
              exit="closing"
            />
          )}
        </AnimatePresence>
        {sidebarVisible && (
          <Sidebar menuVisible={menuVisible} menu={menuVisible} showMenu={showMenu}/>
        )}
        <HamburgerWrapper onClick={showMenu}>
          <Hamburger menuVisible={menuVisible} />
          <MenuText menu={menuVisible}>
            <span>M</span>
            <span>e</span>
            <span>n</span>
            <span>u</span>
          </MenuText>
        </HamburgerWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </NavigationBar>
    </>
  );
};

export default Navigation;
