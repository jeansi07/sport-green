import styled from "styled-components";

import React, { ChangeEvent } from "react";

interface InputProps {
  title: string;
  type: "text" | "password" | "email";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}

export const InputStyled = styled.input`
  border-radius: 12px;
  background-color: #2f2f43;
  color: #ffffff;
  margin-top: 5px;
  border: none;
  outline: none;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2f2f43;
  border: 1px;
  border-radius: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: #fefefe;
  opacity: 60%;
`;

export const Input: React.FC<InputProps> = ({
  title,
  type,
  onChange,
  name,
  value,
}) => {
  return (
    <InputContainer>
      <Label>{title}</Label>
      <InputStyled value={value} name={name} onChange={onChange} type={type} />
    </InputContainer>
  );
};
