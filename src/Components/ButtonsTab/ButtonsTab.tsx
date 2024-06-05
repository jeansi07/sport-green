import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

interface TabButtonProps {
  selected: boolean;
}

interface TabsButtonProps {
  tabs: { image: string; path: string }[];
}

const TabsContainer = styled.div`
  padding: 13px 13px;
  background: #2c2b3e;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const TabButton = styled.button<TabButtonProps>`
  background-color: ${({ selected }) => (selected ? "#1F1F31" : "#2C2B3E")};
  border: none;
  border-radius: ${({ selected }) => (selected ? "16px" : "")};
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ selected }) =>
    selected &&
    css`
      background-color: white;
    `}

  &:hover {
    background-color: #1f1f31;
  }

  img {
    padding: 4px;
    width: 25px;
    height: 25px;
    ${({ selected }) =>
      selected &&
      css`
        filter: brightness(0) invert(1);
      `}
  }
`;

export const TabsButton: React.FC<TabsButtonProps> = ({ tabs }) => {
  const navigate = useNavigate();
  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <TabsContainer>
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          selected={window.location.pathname === tab.path}
          onClick={() => handleTabClick(tab.path)}
        >
          <img src={tab.image} alt={`tab-${index}`} />
        </TabButton>
      ))}
    </TabsContainer>
  );
};
