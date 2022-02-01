import Footer from "../components/Footer/Footer";

import { BodyLayout } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <BodyLayout>
      {children}
      <Footer />
    </BodyLayout>
  );
};

export default Layout;
