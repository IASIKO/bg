import React from "react";
import styles from "./Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../redux/slices/productSlice";
import Button from "./Button";

const Paginate = () => {
  const { currentPage, totalPages } = useSelector(
    (state) => state.user.product.pagination
  );

  console.log(currentPage);
  console.log(totalPages);
  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    dispatch(setPagination({ currentPage: newPage }));
  };

  return (
    <div className={styles.paginate}>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          className={index + 1 === currentPage ? styles.active : ""}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};

export default Paginate;
