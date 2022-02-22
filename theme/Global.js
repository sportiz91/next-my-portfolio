/*
  Global Styled from Styled Components.
  Common resets goes in here.
  ${normalize} -> from styled-normalize package.
  styled-normalize:
    1. Preserves useful defaults, unlike many CSS resets.
    2. Normalizes styles for a wide range of elements.
    3. Corrects bugs and common browser inconsistencies.
    Commonly used in the Global Style component as ${normalize}
*/

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

  /* 
    Font-size: 10px -> easier scaling doing rem measures.
    1rem = 10px.
  */
  html {
    font-size: 10px;
  }

  body {
    background-color: ${(props) => props.theme.background.bg1};
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.primary};
    position: relative;
  }
`;
