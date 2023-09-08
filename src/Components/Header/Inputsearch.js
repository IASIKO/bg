import styles from "./Inputsearch.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQueryProducts,
  setSearchResults,
} from "../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

const Inputsearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchResults = useSelector(
    (state) => state.user.product.searchResults
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchValue) {
        dispatch(fetchQueryProducts(searchValue));
      }
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [dispatch, searchValue]);

  const isDropdownVisible = searchValue && searchResults.length > 0;

  return (
    <div className={styles.dropdawn}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search here..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className={styles.dropdownContent}>
        {isDropdownVisible && (
          <>
            {searchResults.map((product) => (
              <div
                key={product._id}
                className={styles.dropdownItem}
                onClick={() => {
                  navigate(`/boardgames/${product.name}`);
                  dispatch(setSearchResults());
                  setSearchValue("");
                }}
              >
                {`${product.name} ₾${product.price}`}
              </div>
            ))}
          </>
        )}
      </div>
      <button>Search</button>
    </div>
  );
};

export default Inputsearch;
