/*
  Layout component for body part of the App.
  This component apply some common styling, for example max-width when resizing to high widths,
  Padding and common margins, etc.
*/
import { BodyLayout } from "./LayoutStyles";

const Layout = ({ children }) => {
  return <BodyLayout>{children}</BodyLayout>;
};

export default Layout;
