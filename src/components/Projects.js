import React from "react";
import styled from "styled-components";
const Projects = () => {
  return (
    <Wrapper>
      <Left>
        <h6>
          With React gaining more popularity and usage by the day,I have been
          recently working on projects using the awesome framework.The
          scalability,simplicity and speed of React Applications is just out of
          this world.The attached links point to some of those projects and also
          my Github repository.
        </h6>
      </Left>
      <Right>
        <Text href="http://urembom-beauty-and-makeups.netlify.app/">
          Full Stack MERN Stack E-commerce web app.
        </Text>
        <Text href="https://online-eats.netlify.app">
          Full Stack MERN Stack Food Ordering web app
        </Text>
        <Text>Fully functional Blog Website</Text>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Text = styled.a``;

const Left = styled.div``;

const Right = styled.div``;

export default Projects;
