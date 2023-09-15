const Total = ({ cartItems }) => {
  return cartItems?.reduce((acc, curr) => {
    const total = curr.product.price * curr.quantity;

    return acc + total;
  }, 0);
};

export default Total;
