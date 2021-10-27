import React from "react";
import Table from "../../components/Table/Table";

const Matches = ({ lastMatches, nextMatches, type }) => {
  const lastMatchesProps = {
    caption: "Предыдущие матчи",
    rows: [
      { id: 1, title: "Матч" },
      { id: 2, title: "Результат" },
    ],
    data: lastMatches.data,
  };

  const nextMatchesProps = {
    caption: "Будущие матчи",
    rows: [
      { id: 1, title: "Матч" },
      { id: 2, title: "Результат" },
    ],
    data: nextMatches.data,
  };

  // Чтобы таблица была не зависима от типа, надо передавать что-то подобное
  // const rows = ["Home", "Away", "Score"];
  // const columns = [
  //   ["Arsenal", "Manchester"],
  //   ["Aston Villa", "Liverpool"],
  //   ["3-1", "0-5"],
  // ];
  //
  // Для этого нужно будет сначала такие массивы подготовить из lastMatches.data и nextMatches.data
  //
  // Потом в таблице составляешь из них Колонки и ряды.

  return (
    <div>
      <Table props={lastMatchesProps} type={type} />
      <br />
      <Table props={nextMatchesProps} type={type} />
    </div>
  );
};

export default Matches;
