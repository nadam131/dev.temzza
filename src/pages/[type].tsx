import React from "react";
import { NextRouter, useRouter } from "next/router";
import Matches from "../composite/Matches/Matches";

// import useSWR from "swr";
// import Players from "../composite/Players/Players";

// Убрать в api.ts
// const fetcher = (url: any) => fetch(url).then((res) => res.json());

const PAGES_BY_TYPE: { [key: string]: any } = {
  matches: Matches,
};

const PageType = () => {
  const {
    query: { type },
  }: NextRouter = useRouter();

  // Убрать уже внутрь Matches (я бы переименовал в Fixtures. Это лучше отражает смысл)
  // const lastMatches = useSWR(
  //   "https://eplg-nest-nadam131.vercel.app/fixtures/last",
  //   fetcher
  // );

  // const nextMatches = useSWR(
  //   "https://eplg-nest-nadam131.vercel.app/fixtures/next",
  //   fetcher
  // );

  if (!type) return null;
  return React.createElement(PAGES_BY_TYPE[type as string]);
};

export default PageType;
