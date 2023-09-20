import React from "react";
import styles from "./SingleProductPage.module.css";

const SingleProductPage = ({ singleProduct }) => {
  console.log(singleProduct);
  return (
    <div className={styles.productDetail}>
      <div className={styles.productImage}>
        <img src={singleProduct?.image} alt={singleProduct?.name} />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{singleProduct?.name}</h1>
        <p className={styles.productDescription}>
          Description: {singleProduct?.description}
        </p>
        <p className={styles.productDescription}>
          Category: {singleProduct?.category}
        </p>
        <p className={styles.productPrice}>{singleProduct?.price} ₾</p>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProductPage;
