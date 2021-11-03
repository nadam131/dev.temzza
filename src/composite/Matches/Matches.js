import React from "react";
import Table from "../../components/Table/Table";
import { createRows } from "../../assets/func";
import { useLastMatches, useNextMatches } from "../../assets/hooks";

const Matches = () => {
  const {
    lastMatches,
    isLoadingLastMatches,
    isErrorLastMatches,
  } = useLastMatches();
  const {
    nextMatches,
    isLoadingNextMatches,
    isErrorNextMatches,
  } = useNextMatches();

  if (isLoadingNextMatches || isLoadingLastMatches)
    return <div>loading lastMatches...</div>;
  if (isErrorNextMatches || isErrorLastMatches)
    return <div>failed to load</div>;

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
