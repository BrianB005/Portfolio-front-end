import React from "react";
import styled from "styled-components";
const Social = ({ url, icon, text }) => {
  return (
    <Icon href={url}>
      {icon}
      <Text>{text}</Text>
    </Icon>
  );
};

const Text = styled.h4`
  font-size: 13px;
  display: none;
  position: absolute;
`;
const Icon = styled.a`
  color: #17d7a0;
  position: relative;
  font-size: 22px;
  padding-right: 9px;
  padding-bottom: 20px;
  transition: all 0.6s linear;
  &:hover {
    transform: scale(1.1);
    color: #99ddcc;
    ${Text} {
      display: block;
    }
  }
`;

export default Social;
