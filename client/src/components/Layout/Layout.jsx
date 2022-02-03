import React from "react";
import Navbar from "../Navbar/Navbar";

import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
