/*
  Next.js uses the App component to initialize pages. You can override it and control the page initialization. 
  Which allows you to do things like:
    1. Persisting layout between page changes
    2. Keeping state when navigating pages
    3. Custom error handling using componentDidCatch
    4. Inject additional data into pages
    5. Add global CSS
  To override the default App, create the file ./pages/_app.js
  The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. 
  Therefore, any props you send to Component will be received by the page.
  pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.
  ---
  In our case pageProps is an empty object, because we haven't preloaded the web with any prop fetched by data fetching methods propvided by next.
  ---
  The only page we are going to load in our page is the root -> index.js.
*/

import WrapperTheme from "../theme/WrapperTheme";

export default function App({ Component, pageProps }) {
  return (
    <WrapperTheme>
      <Component {...pageProps} />
    </WrapperTheme>
  );
}
