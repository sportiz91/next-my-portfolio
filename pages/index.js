import TestingComp from "../components/Testing/TestingComp";
import Layout from "../layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import { HiddenNavbar } from "../components/Navbar/NavbarStyles";
import { BurgerDiv, BurgerSpan } from "../components/Navbar/NavbarStyles";
import { useState } from "react";
import NavbarItems from "../components/Navbar/NavbarItems";

export default function Home() {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  return (
    <>
      <HiddenNavbar state={mobileNavbar}>
        <NavbarItems />
      </HiddenNavbar>
      <BurgerDiv onClick={() => setMobileNavbar(!mobileNavbar)}>
        <BurgerSpan />
      </BurgerDiv>
      <Navbar />
      <Layout>
        <TestingComp />
      </Layout>
    </>
  );
}
