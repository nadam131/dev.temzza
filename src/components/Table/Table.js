import React, { useState, useEffect } from "react";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import { useClipboard } from "@chakra-ui/react";

const style = {
  row: {
    cursor: "pointer",
  },
};

const Table = ({ data, caption, columns, rows }) => {
  const [copiedValue, setCopiedValue] = useState("");
  const { onCopy } = useClipboard(copiedValue);

  useEffect(() => {
    console.log(copiedValue, "copiedValue");
    copiedValue && onCopy();
  }, [copiedValue, onCopy]);

  const handleClick = (id) => {
    setCopiedValue(`<div id="temzza-match-card" data-props-id=${id}></div>`);
    onCopy();
  };

  const renderRows = () => {
    return data.map((el, i) => {
      const rowValues = rows[i];
      return (
        <Tr key={el.id} onClick={() => handleClick(el.id)} {...style.row}>
          {rowValues.map((value, i) => {
            return <Td key={i}>{value}</Td>;
          })}
        </Tr>
      );
    });
  };

  return (
    <ChakraTable variant="striped" colorScheme="teal">
      <TableCaption placement="top">{caption}</TableCaption>
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Th key={index}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>{renderRows()}</Tbody>
    </ChakraTable>
  );
};

export default Table;
