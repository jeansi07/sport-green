import { getAuth } from "firebase/auth";
import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Paragraph, TabsButton } from "../../Components";
import { Card } from "../../Components/Card";
import appFirebase from "../../Credentials";
import { Images } from "../../utils/media";
const auth = getAuth(appFirebase);

export const Title = styled.h1`
  text-align: left;
  font-size: 42px;
  color: ${({ theme }) => theme.title};
  margin: 0;
`;
const ContainerDiv = styled.div`
  height: 88%;
  display: flex;
  flex-direction: column;
  padding: 0px 32px;
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: #181828;
  flex-direction: column;
`;

const ContainerCards = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 14px;
  padding-bottom: 14px;
  height: 70%;
`;

const ButtonLeft = styled.button`
  display: flex;
  justify-content: flex-start;
  background: transparent;
  border: none;
  padding: 0;
  padding-top: 12px;
`;
const ImageLeft = styled.img`
  width: 30px;
  height: 30px;
`;
const ContainerTabs = styled.div`
  padding-bottom: 20px;
  padding-left: 21px;
  padding-right: 21px;
`;

const ParagraphMessages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const History = () => {
  const [reactions, setReactions] = useState<DocumentData[]>([]);
  const navigate = useNavigate();
  const tabs = [
    { image: Images.home, path: "/home" },
    { image: Images.timer, path: "/history" },
    { image: Images.logout, path: "/logout" },
  ];

  const getHistory = async () => {
    const colletions = collection(getFirestore(), "reactions");
    const resp = await getDocs(
      query(colletions, where("userId", "==", auth.currentUser?.uid))
    );
    setReactions(resp.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <Container>
        <ContainerDiv>
          <ButtonLeft onClick={() => navigate(-1)}>
            <ImageLeft src={Images.arrowLeft} />
          </ButtonLeft>
          <Title>History</Title>
          <Paragraph $lineParagrahp={1.5} $family="Epilogue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
          <Paragraph $family="Epilogue">17 december</Paragraph>
          <ContainerCards>
            {reactions.length === 0 ? (
              <ParagraphMessages>
                you have no recent reactions
              </ParagraphMessages>
            ) : (
              reactions.map((item, key) => (
                <Card
                  key={key}
                  mainImage={item.images}
                  smallImage={
                    item.rate === "like" ? Images.heart : Images.close2
                  }
                  title={item.title}
                />
              ))
            )}
          </ContainerCards>
        </ContainerDiv>
        <ContainerTabs>
          <TabsButton tabs={tabs} />
        </ContainerTabs>
      </Container>
    </>
  );
};
