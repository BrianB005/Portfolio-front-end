import React from "react";
import { Feedbacks } from "../data";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Wrapper id="testimonials">
      <Slider {...settings}>
        {Feedbacks.map((feedback) => {
          return <Testimonial key={feedback.id} {...feedback} />;
        })}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background: lightcyan;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export default Testimonials;
