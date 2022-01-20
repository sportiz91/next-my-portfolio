import WrapperTheme from "../theme/WrapperTheme";

export default function App({ Component, pageProps }) {
  return (
    <WrapperTheme>
      <Component {...pageProps} />
    </WrapperTheme>
  );
}
