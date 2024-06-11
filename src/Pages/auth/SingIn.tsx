import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, Paragraph, Title } from "../../Components";
import appFirebase from "../../Credentials";

const auth = getAuth(appFirebase);
const Container = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  margin: auto;
  width: auto;
  height: 100%;
  background-color: ${({ theme }) => theme.bgc};
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

const ButtonRegister = styled.button`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: none;
  height: 32px;
  text-align: center;
  background: linear-gradient(90deg, #236bfe 0%, #0d4ed3 100%);
`;
const ContainerRegister = styled.div`
  margin-top: 20px;
  gap: 12px;
  display: flex;
  align-items: center;
`;

const ParagraphRegister = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.buttonLoginText};
`;

const ParagraphAccount = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.ParagraphAccount};
`;
const ParagraphLogin = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.buttonLoginText};
  font-weight: 700;
  font-family: "Dm Sans";
  font-size: 18px;
`;

export const SingIn = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);

  const onSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    if (register) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("created in successfully!");
        navigate("/home");
      } catch (error) {
        alert("make sure your password is more than 8 characters long");
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
        navigate("/home");
      } catch (error) {
        alert("Failed to log in. Please check your credentials.");
      }
    }
  };

  return (
    <Container>
      <form onSubmit={onSubmitLogin}>
        <Title>Welcome</Title>
        <ContainerParagrahp>
          <Paragraph
            $weightParagrahp={400}
            $family="Epilogue"
            $positions="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Paragraph>
        </ContainerParagrahp>
        <ContainerInput>
          <Input name="email" type="email" title="User" />
          <Input name="password" type="password" title="Password" />
        </ContainerInput>
        <Paragraph $size="16px">Forgot your password?</Paragraph>
        <ContainerLogin>
          <Button type="submit">
            <ContainerParagrahpLogin>
              <ParagraphLogin>{register ? "Register" : "Login"}</ParagraphLogin>
            </ContainerParagrahpLogin>
          </Button>
        </ContainerLogin>
      </form>
      <ContainerRegister>
        <ParagraphAccount>
          {register ? "if you have an account, " : " don't have an account? "}
        </ParagraphAccount>
        <ButtonRegister onClick={() => setRegister(!register)}>
          <ParagraphRegister>
            {register ? "log in" : "Register"}
          </ParagraphRegister>
        </ButtonRegister>
      </ContainerRegister>
    </Container>
  );
};
