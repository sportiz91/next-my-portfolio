import TestingComp from "../components/Testing/TestingComp";
import Layout from "../layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import { HiddenNavbar } from "../components/Navbar/NavbarStyles";
import { BurgerDiv, BurgerSpan } from "../components/Navbar/NavbarStyles";
import { useState } from "react";
import HiddenNavbarItems from "../components/Navbar/HiddenNavbarItems";

export default function Home() {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  return (
    <>
      <HiddenNavbar state={mobileNavbar}>
        <HiddenNavbarItems state={mobileNavbar} />
      </HiddenNavbar>
      <BurgerDiv
        onClick={() => setMobileNavbar(!mobileNavbar)}
        state={mobileNavbar}
      >
        <BurgerSpan state={mobileNavbar} />
      </BurgerDiv>
      <Navbar />
      <Layout>
        <TestingComp />
      </Layout>
    </>
  );
}
