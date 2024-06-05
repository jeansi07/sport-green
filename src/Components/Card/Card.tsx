import React from "react";
import styled from "styled-components";

interface CardProps {
  mainImage: string;
  title: string;
  smallImage: string;
}

const CardContainer = styled.div`
  width: 100%;
  height: 77px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  background-color: #212135;
`;

const MainImage = styled.div<{ image: string }>`
  width: 258px;
  height: 77px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;
`;

const Title = styled.h2`
  position: absolute;
  bottom: 0px;
  left: 10px;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SmallImage = styled.img`
  width: 23px;
  height: 23px;
`;

export const Card: React.FC<CardProps> = ({ mainImage, title, smallImage }) => {
  return (
    <CardContainer>
      <MainImage image={mainImage}>
        <Title>{title}</Title>
      </MainImage>
      <Content>
        <SmallImage src={smallImage} alt="small" />
      </Content>
    </CardContainer>
  );
};
