import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const Link = styled.a`
  :hover {
    fill: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: fill 0.3s;
  }
`;
