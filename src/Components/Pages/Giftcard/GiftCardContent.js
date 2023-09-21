import React from "react";
import styles from "./GiftCardContent.module.css";
import GC200 from "../../../Assets/Gift cards/GIFT-CARD-200-Gel-280x280.jpg";
import GC150 from "../../../Assets/Gift cards/GIFT-CARD-150-Gel-280x280.jpg";
import GC100 from "../../../Assets/Gift cards/GIFT-CARD-100-Gel-280x280.jpg";
import GC50 from "../../../Assets/Gift cards/GIFT-CARD-50-Gel-280x280.jpg";

const giftCards = [
  {
    id: 1,
    name: `GIFT CARD - 200GEL`,
    price: 200,
    image: GC200,
  },
  {
    id: 2,
    name: `GIFT CARD - 150GEL`,
    price: 150,
    image: GC150,
  },
  {
    id: 3,
    name: `GIFT CARD - 100GEL`,
    price: 100,
    image: GC100,
  },
  {
    id: 4,
    name: `GIFT CARD - 50GEL`,
    price: 50,
    image: GC50,
  },
];

const GiftCardContent = () => {
  return (
    <>
      <h1 className={styles.giftTitle}>Gift cards</h1>
      <ul className={styles.giftContainer}>
        {giftCards.map((card) => (
          <li key={card.id} className={styles.card}>
            <img src={card.image} alt={card.name} />
            <h2>{card.name}</h2>
            <p>{card.price} ₾</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GiftCardContent;
