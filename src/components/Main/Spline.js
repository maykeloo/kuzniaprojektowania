import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { SplineDiv } from './Main.styles';

export default function SplineComponent() {

  return (
    <SplineDiv>
        <div>
	  <Spline scene="https://draft.spline.design/QwTDdBbNsC17dEY1/scene.spline" />
	</div>
	</SplineDiv>
  );
}