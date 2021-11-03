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

const Table = ({ data, caption, columns, rows }) => {
  const [copiedValue, setCopiedValue] = useState("");
  const { onCopy } = useClipboard(copiedValue);

  useEffect(() => {
    console.log(copiedValue, "copiedValue");
    copiedValue && onCopy();
  }, [copiedValue, onCopy]);

  const handleClick = (item) => {
    setCopiedValue(
      `<div id="temzza-match-card" data-props-id=${item.id}></div>`
    );
    onCopy();
  };

  const style = {
    row: {
      cursor: "pointer",
    },
  };

  return (
    <>
      <ChakraTable variant="striped" colorScheme="teal">
        <TableCaption placement="top">{caption}</TableCaption>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.index}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((el, i) => {
            const row = rows[i];
            return (
              <Tr key={el.id} onClick={() => handleClick(el.id)} {...style.row}>
                {row.map((item, i) => (
                  <Td key={i}>{item}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
    </>
  );
};

export default Table;
