import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
// import { BiUpArrowCircle } from "react-icons/bi";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Left>
        <Logo>
          BrianBett <span>~</span>
        </Logo>
      </Left>
      <Right>
        <List open={open}>
          <ListItem
            onClick={() => setOpen(false)}
            smooth={true}
            duration={1000}
          >
            Home
          </ListItem>
          <ListItem
            to="about"
            onClick={() => setOpen(false)}
            smooth={true}
            duration={1000}
          >
            About
          </ListItem>
          <ListItem
            to="resume"
            onClick={() => setOpen(false)}
            smooth={true}
            duration={1000}
          >
            Resume
          </ListItem>
          <ListItem
            to="projects"
            onClick={() => setOpen(false)}
            smooth={true}
            duration={1000}
          >
            Projects
          </ListItem>
          <ListItem
            smooth={true}
            duration={1000}
            to="testimonials"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </ListItem>
          <ListItem
            to="contact"
            onClick={() => setOpen(false)}
            smooth={true}
            duration={1000}
          >
            ContactMe
          </ListItem>
        </List>
      </Right>
      <NavToggle onClick={() => setOpen(!open)}>
        <FaBars />
      </NavToggle>

      <BackToTopIcon onClick={() => scroll.scrollToTop()}>
        <IoIosArrowDropupCircle />
      </BackToTopIcon>
    </Wrapper>
  );
};
const BackToTopIcon = styled.div`
  position: fixed;
  top: 90vh;
  right: 60px;
  color: green;
  cursor: pointer;
  font-size: 42px;
  transition: all 0.6s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  position: absolute;
  top: 60px;
  width: 90%;
  background: #082032;
  display: flex;
  color: #f6f6f6;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  @media screen and (max-width: 800px) {
    top: 20px;
  }
  /* position: relative; */
`;

const Left = styled.div``;

const Logo = styled.h1`
  color: #f6f6f6;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.6s linear;
  text-shadow: 3px 2px 0 black, 4px 3px gray;
  &:hover {
    color: #17d7a0;
  }
  span {
    font-size: 40px;
  }
`;
const List = styled.ul`
  display: flex;
  transition: all 0.8s linear;
  @media screen and (max-width: 900px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    background: #082032;
    height: 100vh;
    left: -70px;
    z-index: 1000;
    top: 67px;
    transform: translateX(-120%);
    transform: ${(props) => props.open === true && "translateX(0)"};

    &::after {
      content: "";
      position: absolute;
      background: rgba(0, 0, 0, 0.6);
      top: 0;
      left: -20px;
      right: 0;
      bottom: 0;

      z-index: -1;
    }
  }
`;

const ListItem = styled(Link)`
  font-size: 19px;
  line-height: 2;
  width: 100%;
  cursor: pointer;
  margin-right: 35px;
  padding: 10px;
  transition: all 0.5s linear;
  &:hover {
    /* background: lightgray; */
    color: #17d7a0;
  }
  @media screen and (max-width: 900px) {
    padding: 0 80px;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;

const Right = styled.div``;

const NavToggle = styled.div`
  cursor: pointer;
  font-size: 22px;
  margin-top: 8px;
  transition: all 0.5s linear;
  &:hover {
    color: #17d7a0;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export default Navbar;
