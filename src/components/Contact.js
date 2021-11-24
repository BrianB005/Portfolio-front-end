import React, { useState } from "react";
import axios from "axios";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({});

  // console.log(value);

  const handleChange = (e) => {
    setValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const SendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://portfolio-nodemailer-api.herokuapp.com/",
        value
      );

      console.log(data);
      setLoading(false);
      alert("Email sent successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Oops!Something went wrong!Try Again in  a few minutes");
    }
  };
  return (
    <Container id="contact">
      <Wrapper>
        <h3>Reach Me by filling the form below</h3>
        <Form>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              placeholder="Enter your name"
              autoFocus
              required
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email Address</Label>
            <Input
              name="email"
              placeholder="Enter your email address"
              required
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </InputWrapper>
          <Button onClick={SendEmail}>
            {loading ? "Sending" : "Send Message"}
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
