import React from "react";
import Table from "../../components/Table/Table";

const Players = () => {
  const playerTableProps = {
    caption: "Данные игрока",
    rows: ["Имя", "Cтрана", "Передачи", "Голы"],
    columns: [
      ["Глебовский", "Польша", 1, 1],
      ["Ник Бордеро", "Колумбия", 1, 1],
    ],
  };
  return <Table props={playerTableProps} />;
};

export default Players;
