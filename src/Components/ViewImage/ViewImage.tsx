import React from "react";
import styled from "styled-components";

interface ViewImagesProps {
  title: string;
  src: string;
  animation?: "like" | "dislike" | null;
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-end-start-radius: 32px;
  border-end-end-radius: 32px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, black 10%, transparent 30%);
  z-index: 1;
`;

const Title = styled.h1`
  padding-left: 25px;
  position: absolute;
  top: 90%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 1;
  margin: 0;
`;

export const ViewImage: React.FC<ViewImagesProps> = ({
  src,
  title,
  animation,
}) => {
  return (
    <Container
      className={
        animation
          ? animation === "like"
            ? "like-animation"
            : "dislike-animation"
          : ""
      }
    >
      <Image src={src} alt={title} />
      <GradientOverlay />
      <Title>{title}</Title>
    </Container>
  );
};
