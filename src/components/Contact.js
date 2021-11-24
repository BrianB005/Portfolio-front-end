import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";
const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <h3>Reach Me by filling the form below</h3>
        <Form>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              placeholder="Enter your name"
              autofocus
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email Address</Label>
            <Input
              name="email"
              placeholder="Enter your email address"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="subject">Subject</Label>
            <Input name="subject" placeholder="Message Subject" required />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="body">Message</Label>
            <textarea
              name="message"
              rows={7}
              placeholder="Enter your message"
              required
            />
          </InputWrapper>
          <Button>
            Send Message
            <FaTelegramPlane />
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #082032;
`;
const Wrapper = styled.div`
  width: 90vw;
  max-width: 400px;
  background: gray;
  border-radius: 19px;
  box-shadow: 3px 8px 19px lightgray;
  padding: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  h3 {
    color: aliceblue;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
`;

const Form = styled.form``;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  textarea {
    outline: none;
    border: none;
    padding: 8px;
    /* border-bottom: 3px solid linear-gradient(to right, green, lightgreen); */
    border-bottom: 3px solid lightgreen;
    &:focus {
      border-bottom: 3px solid green;
    }
  }
`;
const Input = styled.input`
  padding: 10px;
  ::placeholder {
    color: lightgrey;
  }
  outline: none;
  border: none;
  /* border-bottom: 3px solid linear-gradient(to right, green, lightgreen); */
  border-bottom: 3px solid lightgreen;
  &:focus {
    border-bottom: 3px solid green;
  }
`;
const Label = styled.label`
  color: lavenderblush;
`;
const Button = styled.button`
  padding: 13px 0;
  width: 80%;
  margin: 10px 20px;
  cursor: pointer;
  background: aliceblue;
  border: 3px solid lightgreen;
  transition: all 0.6s linear;
  font-size: 15px;
  &:hover {
    background: lightgreen;
  }
`;

export default Contact;
