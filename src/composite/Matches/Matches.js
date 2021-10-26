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
  return (
    <div>
      <Table props={lastMatchesProps} type={type} />
      <br />
      <Table props={nextMatchesProps} type={type} />
    </div>
  );
};

export default Matches;
