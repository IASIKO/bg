import React from "react";
import styles from "./BGsList.module.css";
import BG from "./BG";

const DUMMY_BGs = [
  {
    id: "1",
    img: "https://corners.ge/wp-content/uploads/2023/06/Rebellion-Unplugged-Sniper-Elite-The-Board-Game-247x247.jpg",
    title: "Sniper Elite",
    price: "400.00 ₾",
  },
  {
    id: "2",
    img: "https://corners.ge/wp-content/uploads/2023/06/Rebellion-Unplugged-Sniper-Elite-The-Board-Game-247x247.jpg",
    title: "Sniper Elite",
    price: "400.00 ₾",
  },
  {
    id: "3",
    img: "https://corners.ge/wp-content/uploads/2023/06/Rebellion-Unplugged-Sniper-Elite-The-Board-Game-247x247.jpg",
    title: "Sniper Elite",
    price: "400.00 ₾",
  },
  {
    id: "4",
    img: "https://corners.ge/wp-content/uploads/2023/06/Rebellion-Unplugged-Sniper-Elite-The-Board-Game-247x247.jpg",
    title: "Sniper Elite",
    price: "400.00 ₾",
  },
  {
    id: "5",
    img: "https://corners.ge/wp-content/uploads/2023/06/Rebellion-Unplugged-Sniper-Elite-The-Board-Game-247x247.jpg",
    title: "Sniper Elite",
    price: "400.00 ₾",
  },
];

const BGsList = () => {
  return (
    <>
      <h1 className={styles.lastAddedTitle}>Last added</h1>
      <ul className={styles.bgs}>
        <BG bgData={DUMMY_BGs} />
      </ul>
    </>
  );
};

export default BGsList;
