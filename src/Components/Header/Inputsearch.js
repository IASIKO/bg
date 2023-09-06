import React, { useEffect, useState } from "react";
import styles from "./Inputsearch.module.css";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQueryProducts,
  setSearchResults,
} from "../../redux/slices/productSlice";

const Inputsearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const searchResults = useSelector(
    (state) => state.user.product.searchResults
  );

  console.log(searchResults);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchValue) {
        dispatch(fetchQueryProducts(searchValue));
      } else {
        dispatch(setSearchResults());
      }
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [dispatch, searchValue]);

  return (
    <div>
      <input
        value={searchValue}
        className={styles}
        type="search"
        placeholder="Search here..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button>Search</Button>
    </div>
  );
};

export default Inputsearch;
