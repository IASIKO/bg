import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../../UI/Button";
import { isUserAdmin } from "../../../application/utilis";

const AddButton = () => {
  const userInfo = useSelector((state) => state.user.user.userData);

  return (
    <>
      {isUserAdmin(userInfo) && (
        <Link to="/boardgames/new">
          <Button>Add products</Button>
        </Link>
      )}
    </>
  );
};

export default AddButton;
