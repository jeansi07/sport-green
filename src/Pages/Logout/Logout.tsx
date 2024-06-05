import { getAuth, signOut } from "firebase/auth";
import styled from "styled-components";
import { TabsButton } from "../../Components";
import appFirebase from "../../Credentials";
import { Images } from "../../utils/media";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const ContainerDiv = styled.div`
  height: 100%;
  display: flex;
  background-color: #181828;
  flex-direction: column;
`;

const Message = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const TabsContainer = styled.div`
  padding-bottom: 20px;
  padding-left: 21px;
  padding-right: 21px;
`;

const auth = getAuth(appFirebase);

export const Logout = () => {
  const tabs = [
    { image: Images.home, path: "/home" },
    { image: Images.timer, path: "/history" },
    { image: Images.logout, path: "/logout" },
  ];

  return (
    <>
      <ContainerDiv>
        <Container>
          <Message>See you later :)</Message>
          <LogoutButton onClick={() => signOut(auth)}>Log out</LogoutButton>
        </Container>
        <TabsContainer>
          <TabsButton tabs={tabs} />
        </TabsContainer>
      </ContainerDiv>
    </>
  );
};
