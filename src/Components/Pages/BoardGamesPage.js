import React from "react";
import AddButton from "./BoardGamesPage/AddButton";
import BGCover from "./BoardGamesPage/BGCover";
import BGContent from "../../UI/BGContent";
import CategorySideBar from "./BoardGamesPage/CategorySideBar";
import BGProductsList from "./BoardGamesPage/BGProductsList";


const BoardGamesPage = () => {
  return (
    <>
      <BGCover />
      <AddButton />
      <BGContent>
        <CategorySideBar />
        <BGProductsList />
      </BGContent>
    </>
  );
};

export default BoardGamesPage;
