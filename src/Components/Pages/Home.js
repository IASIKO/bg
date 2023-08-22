import React from "react";
import Cover from "../Header/Cover";
import Body from "../../UI/Body";
import Categories from "../Pages/home/Categories";
import BGsList from "./home/BGsList";

const Home = () => {
  return (
    <>
      <Cover />
      <Body>
        <BGsList />
        <Categories />
      </Body>
    </>
  );
};

export default Home;
