import React from "react";
import "./Home.scss";
import { Container } from "@mui/material";
function Home() {
  return (
    <div>
      {/* <Container maxWidth="sm"></Container> */}
      <div className="hero">
        <div className="hero-left"></div>
        <div className="hero-right"></div>
      </div>
    </div>
  );
}

export default Home;
