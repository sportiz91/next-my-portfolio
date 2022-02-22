/*
  THEMING: styled-components has full theming support by exporting a <ThemeProvider> wrapper component. 
  This component provides a theme to all React components underneath itself via the context API. 
  In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep.
  The <ThemeProvider> component needs to have the theme object passed as prop, in order to access it on every child component.
  ---
  WrapperTheme is the Wrapper component that goes above _app, which is used to initialize the page.
  In this case, we are passing a Wrapping component with the theme object and the global styles.
  {children} -> because we are wrapping the <Component /> component of next in _app.js.
*/

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./Global";

const WrapperTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default WrapperTheme;
