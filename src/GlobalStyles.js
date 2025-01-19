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
  background-color: ${({ theme }) => theme.site.background};
  margin-top: 119px;
  transition: all 0.5s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}) {
    margin-top: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 21px;
  }
}
`;
