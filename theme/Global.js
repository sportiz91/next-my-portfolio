import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0rem;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      background-color: ${(props) => props.theme.background.bg1};
  }
`;
