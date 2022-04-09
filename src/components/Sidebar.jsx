import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'
import { LinksBox, LinkSidebar, SidebarWrapper } from '../elements/Sidebar'

const Sidebar = () => {

  const {setSidebarVisilityHandler} = useContext(Context)

  return (
    <>
        <SidebarWrapper>
          <LinksBox>
          <LinkSidebar onClick={setSidebarVisilityHandler} to="/">Home</LinkSidebar>
          <LinkSidebar onClick={setSidebarVisilityHandler} to="/">Oferta</LinkSidebar>
          <LinkSidebar onClick={setSidebarVisilityHandler} to="/">Prace</LinkSidebar>
          <LinkSidebar onClick={setSidebarVisilityHandler} to="/">Kontakt</LinkSidebar>
          </LinksBox>
        </SidebarWrapper>
    </>
    )
}

export default Sidebar