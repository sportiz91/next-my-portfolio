import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, ::before, ::after, h1 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  /* Font-size: 10px -> easier scaling doing rem measures. */
  html {
    font-size: 10px;
  }

  /* fallback font-size is 16px */
  body {
    background-color: ${(props) => props.theme.background.bg1};
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.fonts.main};
    min-height: 100vh;
    color: ${(props) => props.theme.colors.primary}
  }
`;
