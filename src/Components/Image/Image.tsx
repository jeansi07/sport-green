import styled from "styled-components";

export const Image = styled.img<{$width?: string; $height?: string}>`
  width: ${props => props.$width || '36.45px'};
  height: ${props => props.$height || '34.63px'};
`;
