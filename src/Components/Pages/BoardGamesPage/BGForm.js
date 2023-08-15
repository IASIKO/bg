import React, { useEffect, useState } from "react";
import useForm from "../../../application/hooks/useForm";
import styles from "./BGForm.module.css";
import InputForm from "../../../UI/InputForm";
import { useDispatch, useSelector } from "react-redux";
import { saveProduct } from "../../../redux/slices/productSlice";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";

const generateAddProductFormValues = (selectedProduct) => {
  return {
    name: {
      value: selectedProduct?.name || "",
      required: true,
      error: "",
      validateInput: (name) =>
        name.length > 1 ? null : "name should have at least 2 characters",
    },
    description: {
      value: selectedProduct?.description || "",
      required: true,
      error: "",
      validateInput: (description) =>
        description.length > 1
          ? null
          : "description should have at least 2 characters",
    },
    category: {
      value: selectedProduct?.category || "",
      required: true,
      error: "",
      validateInput: (category) =>
        category.length > 1
          ? null
          : "category should have at least 2 chracters",
    },
    price: {
      value: selectedProduct?.price || 0,
      required: true,
      error: "",
      validateInput: (price) =>
        price.length > 0 ? null : "price should be positive number",
    },
  };
};

const BGForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState("");

  const selectedProduct = useSelector(
    (state) => state.user.product.selectedProduct
  );

  const {
    formValues: productFormValues,
    onInputChange,
    setFormValues,
  } = useForm({
    defaultFormValues: generateAddProductFormValues(),
  });

  const saveProductHandler = (event) => {
    event.preventDefault();
    const name = productFormValues.name.value;
    const description = productFormValues.description.value;
    const category = productFormValues.category.value;
    const price = productFormValues.price.value;

    dispatch(
      saveProduct({
        product: {
          name,
          description,
          category,
          price,
          image,
          id: selectedProduct._id,
        },
        isUpdating: !!selectedProduct,
      })
    );
    navigate("/boardgames");
  };

  useEffect(() => {
    if (selectedProduct) {
      setFormValues(generateAddProductFormValues(selectedProduct));
      setImage(selectedProduct.image);
    }
  }, [selectedProduct]);

  return (
    <>
      <form className={styles.form} onSubmit={saveProductHandler}>
        <h1>Add product</h1>
        <InputForm
          name="name"
          label="Name"
          value={productFormValues.name.value}
          onChange={onInputChange}
          error={productFormValues.name.error}
        />
        <InputForm
          name="description"
          label="Description"
          value={productFormValues.description.value}
          onChange={onInputChange}
          error={productFormValues.description.error}
        />
        <InputForm
          name="category"
          label="Category"
          value={productFormValues.category.value}
          onChange={onInputChange}
          error={productFormValues.category.error}
        />
        <InputForm
          name="price"
          label="Price"
          value={productFormValues.price.value}
          onChange={onInputChange}
          error={productFormValues.price.error}
        />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            setImage(base64);
          }}
        />
        <div className={styles.actions}>
          <button>Save</button>
        </div>
      </form>
    </>
  );
};

export default BGForm;
