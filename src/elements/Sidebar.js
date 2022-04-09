import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./Body";

export const SidebarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${device.tablet} {
    justify-content: center;
    align-items: flex-start;
  }
`;

export const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 10rem;

  @media ${device.tablet} {
    margin-right: 0;
    margin-top: 7rem;
  }
`;

export const LinkSidebar = styled(Link)`
  color: white;
  font-size: 3rem;
`;
