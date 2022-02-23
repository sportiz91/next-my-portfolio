/*
  index.js loads the AppWrapper component, which is the father of all the structure.
*/

import Head from "next/head";

import AppWrapper from "../components/Wrapper/AppWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Santiago Pablo Ortiz</title>
      </Head>
      <AppWrapper />
    </>
  );
}
