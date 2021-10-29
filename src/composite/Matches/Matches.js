import React from "react";
import Table from "../../components/Table/Table";
import { fetcher } from "../../assets/api";
import { pick } from "lodash";
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

  const createRows = (rows, keys) => {
    const columnsCount = keys.length;

    return rows.map((row, i) => {
      const data = pick(row, keys);
      return data;
    });
  };

  console.log(lastMatches, "lastMatches");
  console.log(nextMatches, "nextMatches");

  // const lastMatchesProps = {
  //   caption: "Предыдущие матчи",
  //   columns: ["Дома", "На выезде", "Счет"],
  //   rows: createRows(lastMatches, [
  //     "homeTeam",
  //     "awayTeam",
  //     ["goalsHomeTeam", "goalsAwayTeam"],
  //   ]),
  // };

  const lastMatchesProps = {
    caption: "Данные игрока",
    rows: ["Имя", "Cтрана", "Передачи", "Голы"],
    columns: [
      ["Глебовский", "Польша", 1, 1],
      ["Ник Бордеро", "Колумбия", 1, 1],
    ],
  };

  const nextMatchesProps = {
    caption: "Данные игрока",
    rows: ["Имя", "Cтрана", "Передачи", "Голы"],
    columns: [
      ["Глебовский", "Польша", 1, 1],
      ["Ник Бордеро", "Колумбия", 1, 1],
    ],
  };

  console.log(lastMatchesProps, "lastMatchesProps ROWS");
  console.log(nextMatchesProps, "nextMatchesProps ROWS");

  return (
    <>
      <Table props={lastMatchesProps} />
      <br />
      <Table props={nextMatchesProps} />
    </>
  );
};

export default Matches;
