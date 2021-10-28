import React from "react";
import Table from "../../components/Table/Table";
import { fetcher } from "../../assets/api";
import useSWR from "swr";

const Matches = () => {
  const lastMatches = useSWR(
    "https://eplg-nest-nadam131.vercel.app/fixtures/last",
    fetcher
  );

  const nextMatches = useSWR(
    "https://eplg-nest-nadam131.vercel.app/fixtures/next",
    fetcher
  );

  // ВОПРОС эта функция не работает сначала
  // нужен промис?

  const columnsSort = (arr) => {
    console.log(arr, "lastMatches");
    if (arr) {
      return arr.data.map((item) => [
        item.homeTeam.name,
        item.awayTeam.name,
        item.goalsHomeTeam !== null
          ? `${item.goalsHomeTeam} - ${item.goalsAwayTeam}`
          : "-",
      ]);
    }
  };

  const lastMatchesProps = {
    caption: "Предыдущие матчи",
    rows: ["Дома", "На выезде", "Счет"],
    // columns: columnsSort(lastMatches),
    columns: [],
  };

  const nextMatchesProps = {
    caption: "Будущие матчи",
    rows: ["Дома", "На выезде", "Счет"],
    // columns: columnsSort(nextMatches),
    columns: [],
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
