import styled from "styled-components";
import { MyTitle } from "../components/Testing/MyTittle";
import Layout from "../layout/Layout";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <MyTitle></MyTitle>
      </Layout>
    </>
  );
}
