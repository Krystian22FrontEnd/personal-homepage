import styled from "styled-components";

export const Container = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  font-family: inherit;
  background-color: ${({ theme }) => theme.color.whiteLilac};
`;

export const FlexContainer = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
