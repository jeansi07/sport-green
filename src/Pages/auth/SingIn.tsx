import styled from "styled-components";
import { Button, Input, Paragraph, Title } from "../../Components";

export const SingIn = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    margin: auto;
    width: auto;
    height: 100%;
    background-color: #181828;
  `;

  const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    margin-bottom: 22px;
  `;

  const ContainerLogin = styled.div`
    margin-top: 22px;
  `;
  const ContainerParagrahp = styled.div`
    margin-top: 7px;
    margin-bottom: 23px;
    text-align: center;
  `;

  const ContainerParagrahpLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;

  return (
    <Container>
      <Title>Welcome</Title>
      <ContainerParagrahp>
        <Paragraph $family="Epilogue" $positions="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Paragraph>
      </ContainerParagrahp>
      <ContainerInput>
        <Input type="text" title="User" />
        <Input type="password" title="Password" />
      </ContainerInput>
      <Paragraph $size="16px">Forgot your password?</Paragraph>
      <ContainerLogin>
        <Button>
          {" "}
          <ContainerParagrahpLogin>
            <Paragraph $weightParagrahp={700}>Login</Paragraph>{" "}
          </ContainerParagrahpLogin>
        </Button>
      </ContainerLogin>
    </Container>
  );
};
