import React from "react";
import styles from "./Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../redux/slices/productSlice";

const Paginate = () => {
  const { currentPage, totalPages } = useSelector(
    (state) => state.user.product.pagination
  );

  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    dispatch(setPagination({ currentPage: newPage }));
  };
  

  return (
    <div className={styles.paginate}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={index + 1 === currentPage ? styles.active : ""}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Paginate;
