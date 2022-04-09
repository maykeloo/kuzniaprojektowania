import styled from "styled-components";
import { HamburgerCollapse } from "react-animated-burgers";
import { device } from "./Body";

//ASSETS
import { BsFillTelephoneInboundFill } from "react-icons/bs";

export const Navigation = styled.nav`
  top: 50px;
  position: sticky;
  width: 85%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  @media ${device.tablet} {
    gap: 2rem;
  }
`;

export const CallButton = styled.span`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ color }) => (color ? "black" : "white")};
  transition: 0.15s;
  color: ${({ color }) => (color ? "white" : "black")};
  height: 30px;

  @media ${device.tablet} {
    padding: 0.25rem 1rem;
  }
`;

export const PhoneIcon = styled(BsFillTelephoneInboundFill)`
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const Number = styled.span`
  font-size: 1.3rem;
  font-weight: 600;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Hamburger = styled(HamburgerCollapse)`
  span {
    border-radius: 0;
    height: 3px;

    &:before {
      border-radius: 0;
      height: 3px;
    }

    &:after {
      border-radius: 0;
      height: 3px;
    }
  }
`;
