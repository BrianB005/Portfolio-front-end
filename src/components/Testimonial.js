import React from "react";
import styled from "styled-components";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Testimonial = ({ message, name }) => {
  return (
    <Container>
      <Wrapper>
        <Profile>
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt={name}
          />
          <h4>{name}</h4>
        </Profile>
        <Message>
          <Icon>
            <FaQuoteLeft />
          </Icon>
          <h6>{message}</h6>
          <Icon>
            <FaQuoteRight />
          </Icon>
        </Message>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  background: lightgray;

  width: 90vw;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  flex-direction: column;
  max-width: 700px !important;
  margin: 300px auto 0;

  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  h4 {
    color: green;
    margin-left: 5px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const Message = styled.div`
  h6 {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
`;

const Icon = styled.div`
  color: white;
  font-size: 13px;
`;

export default Testimonial;
