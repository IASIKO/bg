import React from "react";
import Cover from "../Header/Cover";
import Body from "../../UI/Body";
import Categories from "../Pages/home/Categories";
import BGsList from "./home/BGsList";
import Loader from "../../UI/Loader";

const Home = () => {
  return (
    <>
      <Cover />
      <Loader/>
      <Body>
        <BGsList />
        <Categories />
      </Body>
    </>
  );
};

export default Home;
