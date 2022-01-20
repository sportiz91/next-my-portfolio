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
