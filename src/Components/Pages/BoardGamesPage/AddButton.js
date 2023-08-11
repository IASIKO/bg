import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../../UI/Button";
import { isUserAdmin } from "../../../application/utilis";
import styles from "./AddButton.module.css";

const AddButton = () => {
  const userInfo = useSelector((state) => state.user.user.userData);

  return (
    <div className={styles.addButton}>
      {isUserAdmin(userInfo) && (
        <Link to="/boardgames/new">
          <Button>Add products</Button>
        </Link>
      )}
    </div>
  );
};

export default AddButton;
