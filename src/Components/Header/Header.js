import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Inputsearch from "./Inputsearch";
import EcommerceNavbar from "./EcommerceNavbar/EcommerceNavbar";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <Logo />
        <Inputsearch />
        <EcommerceNavbar />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
