import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
