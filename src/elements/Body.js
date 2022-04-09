import styled from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };

export const BodyContent = styled.div`
    height: 100vh;
    width: 100vw;
    transition: .7s cubic-bezier(.15,.2,.1,1);
    overflow-y: ${({sidebarVisible}) => sidebarVisible ? 'hidden' : 'scroll' };
    overflow-x: hidden;
    transform: ${({sidebarVisible}) => sidebarVisible ? 'scale(0.85) translateX(-30%)' : 'scale(1)'};

    @media ${device.tablet} {
        transform: ${({sidebarVisible}) => sidebarVisible ? 'translateY(50%)' : 'translateY(0)'};
    }

    &::-webkit-scrollbar {
      display: none;
    }
`

export const HomepageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    flex-direction: column;
    margin: 0 auto;
    display: flex;
`

export const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: red;
`