import React from "react";
import { Socials } from "../data";
import Typical from "react-typical";
import Social from "./Social";
import styled from "styled-components";
const Intro = () => {
  return (
    <Wrapper>
      <Left>
        <Title>Hello There</Title>
        <Title>
          I'm <span>Brian Bett</span>
        </Title>
        <Text>A professional web designer and Full stack web developer.</Text>
        <Animated>
          <Typical
            steps={[
              "MERN stack developer.",
              1000,
              "React Native For Native App development..",
              1000,
              "Good at Team Work...",
              1000,
              "Passionate and determinstic...",
              1000,
              "Two years of experience...",
              1000,
              "Proficient in Javascript and Python",
              1000,
            ]}
            loop={Infinity}
          />
        </Animated>
        <Icons>
          {Socials.map((social) => (
            <Social key={social.id} {...social} />
          ))}
        </Icons>
        <Button>Hire me.</Button>
      </Left>
      <Right>
        <ImageContainer></ImageContainer>
      </Right>
    </Wrapper>
  );
};
// const BackToTopIcon = styled.div`
//   position: absolute;
//   top: 90vh;
//   right: 100px;
//   color: green;
//   font-size: 28px;
// `;

const Wrapper = styled.div`
  display: flex;
  max-width: 1100px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 30px auto;
  /* min-height: fit-content; */
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    margin-top: 100px;
  }
`;
const Animated = styled.h2`
  color: lightseagreen;
  margin: 10px 0;
`;

const Left = styled.div`
  flex: 2;
  color: #f6f6f6;
`;
const Title = styled.h3`
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 1.2px;
  padding-bottom: 3px;
  span {
    color: #17d7a0;
    cursor: pointer;
    transition: all 0.6s linear;
    &:hover {
      text-decoration: underline;
      padding-left: 4px;
    }
  }
`;

const Text = styled.h6`
  font-family: "Cookie", cursive;
  font-size: 23px;
  letter-spacing: 1.2px;
  padding-bottom: 4px;
`;

const Icons = styled.div`
  display: flex;
`;

const Right = styled.div`
  flex: 1;
`;

const Button = styled.button`
  padding: 10px 18px;
  margin-top: 9px;
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 8px;
  border: 2px solid #17a7a0;

  transition: all 0.6s linear;
  &:hover {
    background: #017a70;
    border-radius: 20px;
    color: white;
  }
`;

const ImageContainer = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  transition: all 1s linear;
  position: relative;
  cursor: pointer;
  border: 4px solid gray;
  border-top: 2px solid gray;
  border-bottom: 10px solid gray;
  &:hover {
    transform: scale(1.08);
  }
  @media screen and (max-width: 800px) {
    width: 270px;
    height: 270px;
  }

  background: url("https://lh3.googleusercontent.com/kwLIaSm3VYNvd8yZOjMN6umQBY5LBTaHms1UoiWbrEQjfTOWiIoHbux2kLIe7yzeqr3i5CUxtue3WmTs0zJOcwzS3CCCHS5WL6v8AoqgDDO6FnZq5RY8fjVAjxRzQmNY8MK2lUgBosUxiagBtwTGew58dpZa4qy3JF25loMKomtOdGq04QXtz5HYS2UTLAWn64qYS4cOPDAgbtvYcnO6mNNmg0ZdHyW9Qjgf6N0mmjiZ3yxjgL60nIyhGUS-_zVUa-bJi8aAFcr6aDTQSMBE02xCKKRh0wQGCBc1lD3c9OsWxOxSRmQvI9Jykv8nCTR89Oi39QVFBJYZ7w6iKccwhTDsSH3NVJbjGPjjeDnV8hDrXVV638ZW1CLXt6i8hRM7tr4EHlKEL9pVB3wkDXmjEWgi2O80CQBFwMhRYlxcEUU7YyFYjpVDNjCguHwmC1JE2X4Shn4rr7KHGl50nVhNzvDkU9hZVUQ7nIpx0F03oLJA8QbSXT9n9Mty3h05Kq-52uff1IbYK1nuHwGRDxDqhMn7Iaxp9ZTWTTD8Jp_LWDXVFkyR8sG_5WFHTMolrbApOwkxSy46gBeykLf9yKr6oP-OeoCkC94IhHVPrTp-ck7b0UnzWY8zmw0Hu6vvTzEFE9gNXT5hY8NjOSiaagEsfJgLoehtFeYAJHEQdWujZWgEv4rBf4KxwLlc3_N04etGW5p3v0as-2LkJKBn7Ri7Gg=w557-h742-no?authuser=0")
    center center/cover no-repeat;
`;

export default Intro;
