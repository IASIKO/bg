import styles from "./Inputsearch.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQueryProducts,
  setSearchResults,
} from "../../redux/slices/productSlice";
import { Link } from "react-router-dom";

const Inputsearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchResults = useSelector(
    (state) => state.user.product.searchResults
  );
  const dispatch = useDispatch();

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

  const filteredResults = searchResults.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

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
            {filteredResults.map((product) => (
              <Link
                to={`/boardgames/${product.name}`}
                state={{ id: product._id }}
                key={product._id}
              >
                <div
                  className={styles.dropdownItem}
                  onClick={() => {
                    dispatch(setSearchResults([]));
                    setSearchValue("");
                  }}
                >{`${product.name} ₾${product.price}`}</div>
              </Link>
            ))}
          </>
        )}
      </div>
      <button>Search</button>
    </div>
  );
};

export default Inputsearch;
