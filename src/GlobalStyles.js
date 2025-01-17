import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  font-family: "Inter", serif;
  background-color: ${({ theme }) => theme.color.whiteLilac};
  margin-top: 119px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}) {
    margin-top: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 21px;
  }
}
`;
