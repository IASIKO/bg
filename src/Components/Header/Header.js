import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Inputsearch from "./Inputsearch";
import EcommerceNavbar from "./EcommerceNavbar/EcommerceNavbar";
import Cover from "./Cover";

const Header = () => {
  return (
    <>
    <Cover />
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Logo/>
      </div>
      <div className={styles.container}>
        <Inputsearch />
      </div>
      <div className={styles.container}>
        <EcommerceNavbar/>
      </div>
    </div>
    </>
  );
};

export default Header;
