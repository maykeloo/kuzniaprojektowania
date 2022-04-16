import React from "react";
import { MainText, MainWrapper } from "./Main.styles";
import SplineComponent from "./Spline";
import text from '../../assets/kuzniatext.svg'
import TextLoop from "react-text-loop";


const Main = () => {
  return (
    <>
      <MainWrapper>
        <SplineComponent />
        <MainText img={text}/>
        
      </MainWrapper>
    </>
  );
};

export default Main;
