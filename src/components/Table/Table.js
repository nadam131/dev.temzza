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
    setCopiedValue('<div id="temzza-match-card" data-props-id="asdasd"></div>');
    onCopy();
  };

  return (
    <>
      {props && (
        <ChakraTable variant="striped" colorScheme="teal">
          <TableCaption placement="top">{props.caption}</TableCaption>
          <Thead>
            <Tr>
              {props.rows.map((row) => (
                <Th key={row.index}>{row}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {props.columns.map((col) => (
              <Tr onClick={() => handleClick(col)} key={col.index}>
                {col.map((item) => (
                  <Td key={col.index}>{item}</Td>
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
