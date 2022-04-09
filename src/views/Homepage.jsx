import React from 'react'
import Header from '../components/Header'
import {HomepageWrapper } from '../elements/Body'
import SectionOne from '../components/SectionOne'


const Homepage = () => {


  return (  
    <>
      <HomepageWrapper>
          <Header/>
      </HomepageWrapper>
      <SectionOne/>
    </>
    )
}

export default Homepage