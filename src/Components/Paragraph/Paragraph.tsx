import styled from "styled-components";

export const Paragraph = styled.p<{
  $size?: string;
  $positions?: string;
  $family?: string;
  $weightParagrahp?: number;
  $lineParagrahp?: number;
}>`
  font-size: ${(props) => props.$size || "18px"};
  font-weight: ${(props) => props.$weightParagrahp || 200};
  font-family: ${(props) => props.$family || "Dm Sans"};
  margin: 0;
  text-align: ${(props) => props.$positions || "left"};
  line-height: ${(props) => props.$lineParagrahp || ""};
`;
