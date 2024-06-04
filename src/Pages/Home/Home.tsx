import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSport } from "../../api/Sports";
import {
  ButtonDislike,
  ButtonLike,
  TabsButton,
  ViewImage,
} from "../../Components";
import { Image } from "../../Components/Image";
import { Images } from "../../utils/media";

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
`;
const ContainerTabs = styled.div`
  padding-bottom: 20px;
  padding-left: 21px;
  padding-right: 21px;
`;
const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
`;

interface CardImageInterface {
  title: string;
  image: string;
  rate?: "like" | "dislike";
}

export const Home = () => {
  const [images, setImages] = useState<CardImageInterface[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentAnimation, setCurrentAnimation] = useState<
    "like" | "dislike" | undefined
  >(undefined);

  const onRateImage = (rate: "like" | "dislike") => {
    setCurrentAnimation(rate);
    setTimeout(() => {
      const updatedImages = [...images];
      updatedImages[currentImageIndex].rate = rate;
      setImages(updatedImages);
      setCurrentAnimation(undefined);
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 1400);
  };

  const tabs = [
    { image: Images.home },
    { image: Images.timer },
    { image: Images.logout },
  ];

  const allSport = async (): Promise<void> => {
    try {
      const res = await getSport();
      setImages(
        res.sports.map((item) => ({
          image: item.strSportThumb,
          title: item.strSport,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    allSport();
  }, []);

  return (
    <Container>
      <CardsContainer>
        {images.map(
          (item, index) =>
            index === currentImageIndex && (
              <ViewImage
                key={item.title}
                animation={currentAnimation}
                src={item.image}
                title={item.title}
              />
            )
        )}
      </CardsContainer>
      <ContainerButtons>
        <ButtonDislike onClick={() => onRateImage("dislike")}>
          <Image $width="19px" $height="19px" alt="close" src={Images.close} />
        </ButtonDislike>
        <ButtonLike onClick={() => onRateImage("like")}>
          <Image alt="heart" src={Images.heart} />
        </ButtonLike>
      </ContainerButtons>
      <ContainerTabs>
        <TabsButton tabs={tabs} />
      </ContainerTabs>
    </Container>
  );
};
