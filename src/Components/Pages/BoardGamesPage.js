import React from "react";
import AddButton from "./BoardGamesPage/AddButton";
import BGCover from "./BoardGamesPage/BGCover";
import BGProductsList from "./BoardGamesPage/BGProductsList";

const BoardGamesPage = () => {
  return (
    <>
      <BGCover />
      <AddButton />
      <BGProductsList />
    </>
  );
};

export default BoardGamesPage;
