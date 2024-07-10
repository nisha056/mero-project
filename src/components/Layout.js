import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Navbar />
        <div className="min-h-custom-content">{children}</div>
      </div>
      <Footer className="flex-none" />
    </div>
  );
};

export default Layout;
