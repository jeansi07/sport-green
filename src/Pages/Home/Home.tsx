import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

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
import appFirebase from "../../Credentials";
import { Images } from "../../utils/media";
const auth = getAuth(appFirebase);

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
  background-color: #181828;
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
const Message = styled.p`
  color: #333;
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
`;

interface CardImageInterface {
  title: string;
  image: string;
  idSport: string;
  rate?: "like" | "dislike";
}

export const Home = () => {
  const [images, setImages] = useState<CardImageInterface[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentAnimation, setCurrentAnimation] = useState<
    "like" | "dislike" | undefined
  >(undefined);

  const onRateImage = async (rate: "like" | "dislike", idSport: string) => {
    const docRef = doc(
      getFirestore(),
      "reactions",
      `${idSport}-${auth.currentUser?.uid}`
    );
    setCurrentAnimation(rate);
    await setDoc(docRef, {
      rate,
      userId: auth.currentUser?.uid,
      idSport,
      images: images.find((item) => item.idSport === idSport)?.image,
      title: images.find((item) => item.idSport === idSport)?.title,
    });
    setTimeout(() => {
      const updatedImages = [...images];
      updatedImages[currentImageIndex].rate = rate;
      setImages(updatedImages);
      setCurrentAnimation(undefined);
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 1400);
  };

  const tabs = [
    { image: Images.home, path: "/home" },
    { image: Images.timer, path: "/history" },
    { image: Images.logout, path: "/logout" },
  ];

  const allSport = async (): Promise<void> => {
    try {
      const res = await getSport();
      setImages(
        res.sports.map((item) => ({
          image: item.strSportThumb,
          title: item.strSport,
          idSport: item.idSport,
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
        {images.length === 0 ? (
          <Message>
            You reached the limit of the free tier limit for today.
          </Message>
        ) : (
          images.map(
            (item, index) =>
              index === currentImageIndex && (
                <ViewImage
                  key={item.title}
                  animation={currentAnimation}
                  src={item.image}
                  title={item.title}
                />
              )
          )
        )}
      </CardsContainer>
      <ContainerButtons>
        <ButtonDislike
          onClick={() =>
            onRateImage("dislike", images[currentImageIndex].idSport)
          }
        >
          <Image $width="19px" $height="19px" alt="close" src={Images.close} />
        </ButtonDislike>
        <ButtonLike
          onClick={() => onRateImage("like", images[currentImageIndex].idSport)}
        >
          <Image alt="heart" src={Images.heart} />
        </ButtonLike>
      </ContainerButtons>
      <ContainerTabs>
        <TabsButton tabs={tabs} />
      </ContainerTabs>
    </Container>
  );
};
