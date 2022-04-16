import React from 'react'
import { Menu, MenuBar, MenuBarText, MenuContent, MenuLine } from './Navigation/Naviagtion.styles'
import { sidebarBarVariants, sidebarTextVariants, sidebarLineVariants } from './Variants'

const Sidebar = ({showMenu}) => {
  return (
    <>
    <Menu>  
      <MenuContent variants={sidebarBarVariants} initial="start" animate="end">
        <MenuBar onClick={showMenu} to="/home">
          <MenuBarText variants={sidebarTextVariants}>
            Home
          </MenuBarText>
          <MenuLine variants={sidebarLineVariants}/>
        </MenuBar>
        <MenuBar onClick={showMenu} to="/offer">
          <MenuBarText variants={sidebarTextVariants}>
            Offer
          </MenuBarText>
          <MenuLine variants={sidebarLineVariants}/>
        </MenuBar>
        <MenuBar onClick={showMenu} to="/works">
          <MenuBarText variants={sidebarTextVariants}>
            Works
          </MenuBarText>
          <MenuLine variants={sidebarLineVariants}/>
        </MenuBar>
        <MenuBar onClick={showMenu} to="/contact">
          <MenuBarText variants={sidebarTextVariants} >
            Contact
          </MenuBarText>
          <MenuLine variants={sidebarLineVariants}/>
        </MenuBar>
      </MenuContent>
    </Menu>
    </>
  )
}

export default Sidebar