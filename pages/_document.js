/*
  This page overrides the default document. This is also used to integrate Styled Components with a Next.js app.
  "A custom Document can update the <html> and <body> tags used to render a Page. 
  This file is only rendered on the server, so event handlers like onClick cannot be used in _document." -> see: https://nextjs.org/docs/advanced-features/custom-document
*/

import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

/*
  Injecting Styled Components.
  See this repo example: https://github.com/vercel/next.js/tree/main/examples/with-styled-components/pages
  Coming from Styled Components Docs: https://styled-components.com/docs/advanced#nextjs
*/
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  /*
    Rendering custom document.
    Injecting font in the documment.
  */
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
