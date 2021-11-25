import React from "react";
import styled from "styled-components";
const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Left>
          <h6>
            With React gaining more popularity and usage by the day,I have been
            recently working on projects using the awesome framework.The
            scalability,simplicity and speed of React Applications is just out
            of this world.The attached links point to some of those projects and
            also my Github repository.
          </h6>
        </Left>
        <Right>
          <Text
            target="_blank"
            href="http://urembom-beauty-and-makeups.netlify.app/"
          >
            Full Stack MERN Stack E-commerce web app.
          </Text>
          <Text target="_blank" href="https://online-eats.netlify.app">
            Full Stack MERN Stack Food Ordering web app
          </Text>
          <Text
            target="_blank"
            href="https://awesome-blog-website.netlify.app/"
          >
            Fully functional Blog Website
          </Text>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1100px;
  width: 90vw;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  background: whitesmoke;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.a`
  text-decoration: underline;
  margin-bottom: 12px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  transition: all 0.6s linear;
  &:hover {
    transform: scale(1.03);
  }
`;

const Left = styled.div`
  width: 70vw;
  max-width: 400px;
  margin: 20px;
  background: lightgray;
  padding: 20px;

  h6 {
    color: #082032;
    font-size: 16px;
    line-height: 1.6;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;

const Right = styled.div`
  width: 70vw;
  max-width: 400px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  background: lightgray;
  padding: 20px;
`;

export default Projects;
