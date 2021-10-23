import React from "react";
import { useRouter } from "next/router";

const PageType = () => {
  const {
    query: { type },
  } = useRouter();

  return <div>{type}</div>;
};

export default PageType;
