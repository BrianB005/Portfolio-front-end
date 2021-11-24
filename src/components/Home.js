import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

import Intro from "./Intro";
const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Intro />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #082032;
  /* font-family: "Cookie", cursive; */
  font-family: "Alegreya", serif;
  overflow: hidden;
`;

export default Home;
