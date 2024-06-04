import React from "react";
import { Paragraph, TabsButton } from "../../Components";
import { Images } from "../../utils/media";
import styled from "styled-components";
import { Card } from "../../Components/Card";

export const Title = styled.h1`
  text-align: left;
  font-size: 42px;
  color: #fff;
  margin: 0;
`;
const Container = styled.div`
  padding: 0px 32px;
`;

const ButtonLeft = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`;
const ImageLeft = styled.img`
  width: 30px;
  height: 30px;
`;

export const History = () => {
  const tabs = [
    { image: Images.home },
    { image: Images.timer },
    { image: Images.logout },
  ];
  return (
    <>
      <Container>
        <ButtonLeft>
          <ImageLeft src={Images.arrowLeft} />
        </ButtonLeft>
        <Title>History</Title>
        <Paragraph $lineParagrahp={1.5} $family="Epilogue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
        <Paragraph $family="Epilogue">17 december</Paragraph>
        <Card
          mainImage={Images.soccer}
          smallImage={Images.heart}
          title="Futbol"
        />
      </Container>
      <TabsButton tabs={tabs} />
    </>
  );
};
