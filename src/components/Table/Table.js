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

const Table = ({ props }) => {
  const [copiedValue, setCopiedValue] = useState("");
  const { onCopy } = useClipboard(copiedValue);

  useEffect(() => {
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
      {props && (
        <ChakraTable variant='striped' colorScheme='teal'>
          <TableCaption placement='top'>{props.caption}</TableCaption>
          <Thead>
            <Tr>
              {props.columns.map((column) => (
                <Th key={column.index}>{column}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {props.rows.map((row) => (
              <Tr
                key={row.index}
                onClick={() => handleClick(row[0])}
                {...style.row}
              >
                {row[1].data.map((item) => (
                  <Td key={item.index}>{item}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      )}
    </>
  );
};

export default Table;
