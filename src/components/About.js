import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <Wrapper id="about">
      <ContentWrapper>
        <ImageContainer>
          <Image></Image>
        </ImageContainer>
        <Info>
          Hello.Iam Brian Bett.A professional web developer with vast knowledge
          and experince in the field.I design and develop websites for both
          business and personal use.I develop perfectly-designed modern websites
          that are fully responsive with assurance of excellent User experince.I
          have a two year experince in web development.In that time I have
          developed hundreds of websites and web applications using different
          technologies.Javascript is my favorite language for web development
          but I'm too flexible and can develop websites with the requested
          technologies.MERN stack is my specialty.
          <span>
            If You are looking for a great web designer and developer then look
            no more!.Hit me Up below.
          </span>{" "}
          <Button>Hit Me Up</Button>
        </Info>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: lightgray;
  height: 100vh;
  width: 100vw;
  /* margin: 0; */
`;

const ContentWrapper = styled.div`
  width: 90vw;
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  line-height: 2;
  margin-right: 20px;
  margin-left: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  span {
    color: green;
    padding-left: 3px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Button = styled.div`
  padding: 12px 20px;
  margin-top: 9px;
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 8px;
  border: 2px solid #17a7a0;
  width: 30%;
  justify-content: center;
  display: flex;
  background: green;
  transition: all 0.6s linear;
  @media screen and (max-width: 900px) {
    width: 60%;
  }
  &:hover {
    background: #017a70;
    border-radius: 30px;
    color: white;
  }
`;
const ImageContainer = styled.div``;
const Image = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 120px;
  object-fit: contain;
  background: url("https://lh3.googleusercontent.com/kwLIaSm3VYNvd8yZOjMN6umQBY5LBTaHms1UoiWbrEQjfTOWiIoHbux2kLIe7yzeqr3i5CUxtue3WmTs0zJOcwzS3CCCHS5WL6v8AoqgDDO6FnZq5RY8fjVAjxRzQmNY8MK2lUgBosUxiagBtwTGew58dpZa4qy3JF25loMKomtOdGq04QXtz5HYS2UTLAWn64qYS4cOPDAgbtvYcnO6mNNmg0ZdHyW9Qjgf6N0mmjiZ3yxjgL60nIyhGUS-_zVUa-bJi8aAFcr6aDTQSMBE02xCKKRh0wQGCBc1lD3c9OsWxOxSRmQvI9Jykv8nCTR89Oi39QVFBJYZ7w6iKccwhTDsSH3NVJbjGPjjeDnV8hDrXVV638ZW1CLXt6i8hRM7tr4EHlKEL9pVB3wkDXmjEWgi2O80CQBFwMhRYlxcEUU7YyFYjpVDNjCguHwmC1JE2X4Shn4rr7KHGl50nVhNzvDkU9hZVUQ7nIpx0F03oLJA8QbSXT9n9Mty3h05Kq-52uff1IbYK1nuHwGRDxDqhMn7Iaxp9ZTWTTD8Jp_LWDXVFkyR8sG_5WFHTMolrbApOwkxSy46gBeykLf9yKr6oP-OeoCkC94IhHVPrTp-ck7b0UnzWY8zmw0Hu6vvTzEFE9gNXT5hY8NjOSiaagEsfJgLoehtFeYAJHEQdWujZWgEv4rBf4KxwLlc3_N04etGW5p3v0as-2LkJKBn7Ri7Gg=w557-h742-no?authuser=0")
    center center/cover no-repeat;
  @media screen and (max-width: 800px) {
    width: 270px;
    height: 270px;
  }
`;

export default About;
