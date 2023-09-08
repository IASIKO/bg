import React from "react";
import { useParams } from "react-router-dom";

const BGDetailPage = () => {
  const params = useParams();

  return <div>{params.name}</div>;
};

export default BGDetailPage;
