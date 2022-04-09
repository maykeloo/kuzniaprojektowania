import React from "react";
import {
  ConfigurateButton,
  HeaderContent,
  ScrollDown,
  SubText,
  Title,
  HeaderWrap,
} from "../elements/Header";

//ASSETS
import arrow from "../assets/konfarrow.svg";

const Header = () => {
  return (
    <>
      <HeaderContent>
        <ScrollDown />
        <HeaderWrap>
        <Title>
          Witaj <br /> w mojej kuźni.
        </Title>
        <SubText>
          Stworzę internetową duszę twojej firmy i zadbam o jej pozycje w
          cyfrowym świecie.
        </SubText>
        <ConfigurateButton>
          <span>Stwórz swój własny projekt</span>
          <span id="arrowwrap">
            <img src={arrow} alt="arrow" />
          </span>
        </ConfigurateButton>
        </HeaderWrap>
      </HeaderContent>
    </>
  );
};

export default Header;
