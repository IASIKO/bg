import styles from "./Inputsearch.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQueryProducts,
  setSearchResults,
} from "../../redux/slices/productSlice";
// import { useNavigate } from "react-router-dom";

const Inputsearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchResults = useSelector(
    (state) => state.user.product.searchResults
  );
  const dispatch = useDispatch();
  // const navigate = useNavigate();

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

  const onOptionClickHandler = () => {
    dispatch(fetchQueryProducts(searchValue));
    console.log(searchResults);
    // navigate(`/boardgames/categories/${categoryName}/${name}`);
    console.log("kliki");
  };

  return (
    <div>
      <input
        className={styles}
        type="search"
        placeholder="Search here..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        list="brow"
      />
      <datalist id="brow">
        {searchResults.length > 0 && (
          <>
            {searchResults.map((product) => (
              <option
                key={product._id}
                value={product.name}
              >{`${product.name} $${product.price}`}</option>
            ))}
          </>
        )}
      </datalist>
      <button onClick={onOptionClickHandler}>Search</button>
    </div>
  );
};

export default Inputsearch;
