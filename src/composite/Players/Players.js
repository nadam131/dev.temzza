import React from "react";
import Table from "../../components/Table/Table";

const Players = ({ type }) => {
  const playerTableProps = {
    caption: "Данные игрока",
    rows: [
      { id: 1, title: "Имя" },
      { id: 2, title: "Выходы на поле" },
      { id: 3, title: "Голы" },
    ],
    data: [{ homeTeam: 1, title: null }],
  };
  return <Table props={playerTableProps} type={type} />;
};

export default Players;
