import React from "react";
import Table from "../../components/Table/Table";
import { fetcher } from "../../assets/api";
import { createRows } from "../../assets/func";
import useSWR from "swr";

const Matches = () => {
  const { data: lastMatches, error: lastMatchesError } = useSWR(
    "https://eplg-nest-nadam131.vercel.app/fixtures/last",
    fetcher
  );
  const { data: nextMatches, error: nextMatchesError } = useSWR(
    "https://eplg-nest-nadam131.vercel.app/fixtures/next",
    fetcher
  );

  if (lastMatchesError || nextMatchesError) return <div>failed to load</div>;
  if (!lastMatches || !nextMatches) return <div>loading lastMatches...</div>;

  const lastMatchesProps = {
    caption: "Предыдущие матчи",
    columns: ["Дома", "На выезде", "Счет"],
    rows: createRows(lastMatches, [
      "id",
      "homeTeam.name",
      "awayTeam.name",
      "goalsHomeTeam",
      "goalsAwayTeam",
    ]),
  };

  const nextMatchesProps = {
    caption: "Следующие матчи",
    columns: ["Дома", "На выезде"],
    rows: createRows(nextMatches, ["id", "homeTeam.name", "awayTeam.name"]),
  };

  return (
    <>
      <Table props={lastMatchesProps} />
      <br />
      <Table props={nextMatchesProps} />
    </>
  );
};

export default Matches;
