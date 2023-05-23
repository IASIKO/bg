import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Inputsearch from "./Inputsearch";
import EcommerceNavbar from "./EcommerceNavbar/EcommerceNavbar";
import Navbar from "./Navbar/Navbar";

const Header = () => {

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Logo />
        </div>
        <div className={styles.container}>
          <Inputsearch />
        </div>
        <div className={styles.container}>
          <EcommerceNavbar />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
