import React from "react";
import { useParams } from "react-router-dom";

const BGDetailPage = () => {
  const params = useParams();

  return <div>{params.bgId}</div>;
};

export default BGDetailPage;
