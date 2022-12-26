import React from "react";
import NavbarItems from "../Navbar";
import FooterItem from "../Footer";
const index = ({ children }) => {
  return (
    <main>
      <NavbarItems />
      {children}
      <FooterItem />
    </main>
  );
};

export default index;
