import React from "react";
import { NextRouter, useRouter } from "next/router";
import Matches from "../composite/Matches/Matches";
import Players from "../composite/Players/Players";

const PAGES_BY_TYPE: { [key: string]: any } = {
  matches: Matches,
  players: Players,
};

const PageType = () => {
  const {
    query: { type },
  }: NextRouter = useRouter();

  if (!type) return null;
  return React.createElement(PAGES_BY_TYPE[type as string]);
};

export default PageType;
