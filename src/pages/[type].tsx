import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Matches from "../composite/Matches/Matches";
import Players from "../composite/Players/Players";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const PageType = () => {
  const {
    query: { type },
  } = useRouter();

  const lastMatches = useSWR(
    "https://eplg-nest-nadam131.vercel.app/fixtures/last",
    fetcher
  );

  const nextMatches = useSWR(
    "https://eplg-nest-nadam131.vercel.app/fixtures/next",
    fetcher
  );

  return (
    <div>
      {type === "matches" ? (
        <Matches
          lastMatches={lastMatches}
          nextMatches={nextMatches}
          type={type}
        />
      ) : (
        <Players type={type} />
      )}
    </div>
  );
};

export default PageType;
