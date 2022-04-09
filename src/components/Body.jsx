import React, { useContext } from "react";
import { Context } from "../App";
import { BodyContent } from "../elements/Body";
import { VideoBackground } from "../elements/Header";
import Homepage from "../views/Homepage";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"; 

const Body = () => {
  const { sidebarVisible } = useContext(Context);

  return (
    <>
      <Sidebar />
      <BodyContent id="body" sidebarVisible={sidebarVisible}>
        <VideoBackground />
        <Navbar />
        <Homepage />
      </BodyContent>
    </>
  );
};

export default Body;
