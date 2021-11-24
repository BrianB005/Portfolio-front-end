import React from "react";
import styled from "styled-components";
import { Languages } from "../data";
const Resume = () => {
  return (
    <Wrapper id="resume">
      <ContentWrapper>
        <Left>
          <h1>Web Development</h1>
          {Languages.map((language) => (
            <MeterWrapper>
              <label>{language.text}</label>
              <Meter
                key={language.id}
                min="0"
                max="100"
                value={language.level}
              />
              <h6>{language.level}%</h6>
            </MeterWrapper>
          ))}
        </Left>
        <Center>
          <h1>Data Science</h1>
          <h4>
            Data Science is also my favorite field.I have a two-year experince
            in it thus I'm knowledge-rich.I have worked on projects entailing
            Data Visualization,Predictive MOdelling,Data Exploration and Data
            Cleaning Projects. others are <label>Python For Data Science</label>
          </h4>
          <MeterWrapper>
            <Meter value={85} min="0" max="100" />
            <h6 style={{ top: 7 }}>{85}%</h6>
          </MeterWrapper>
        </Center>
        <Right>
          <h1>Android Development</h1>
          <h4>
            With Android development being a field that continuosly gets
            updated,the choice of technology matters alot.It's for this reason
            that I have majored on using <span>React Native</span>.It provides a
            slick, smooth and responsive user interface, while significantly
            reducing load time. It's also much faster and cheaper to build apps
            in React Native as opposed to building native ones, without the need
            to compromise on quality and functionality.
          </h4>
          <MeterWrapper>
            <Meter value={79} min="0" max="100" />
            <h6 style={{ top: 7 }}>{79}%</h6>
          </MeterWrapper>
        </Right>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background: #082032;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 90vw;
  max-width: 1100px;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  justify-content: space-between;
  color: white;
  h1 {
    text-decoration: underline;
    color: lightcyan;
    margin-bottom: 12px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 23px;
  }
`;

const Right = styled.div`
  flex: 1;
  h4 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    line-height: 1.6;
    span {
      color: #17a7a0;
    }
  }
  h1 {
    font-size: 23px;
  }
`;
const Center = styled.div`
  flex: 1;
  h1 {
    font-size: 23px;
  }

  h4 {
    padding: 0 20px 0 0;
    line-height: 1.6;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;

const MeterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h6 {
    position: absolute;
    top: 28px;
    left: 40%;
    @media screen and (max-width: 700px) {
      top: 8px;
      z-index: 1;
    }
  }

  label {
    @media screen and (max-width: 700px) {
      position: absolute;
      z-index: 1;
      font-size: 13px;
      top: 7px;
      left: 3px;
    }
  }
`;
const Meter = styled.meter`
  width: 80%;
  height: 30px;
  position: relative;
`;

export default Resume;
