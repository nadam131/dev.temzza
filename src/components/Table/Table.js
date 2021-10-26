import React from "react";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const Table = ({ props, type }) => {
  return (
    <ChakraTable variant='striped' colorScheme='teal'>
      <TableCaption placement='top'>{props.caption}</TableCaption>
      <Thead>
        <Tr>
          {props.rows.map((row) => (
            <Th key={row.id}>{row.title}</Th>
          ))}
        </Tr>
      </Thead>
      {type === "matches" && (
        <Tbody>
          {props.data &&
            props.data.map((item) => (
              <Tr key={item.id}>
                <Td>
                  {item.homeTeam.name} - {item.awayTeam.name}
                </Td>
                <Td>
                  {item.goalsHomeTeam} - {item.goalsAwayTeam}
                </Td>
              </Tr>
            ))}
        </Tbody>
      )}
      {type === "players" && (
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>2</Td>
            <Td>3</Td>
          </Tr>
        </Tbody>
      )}
    </ChakraTable>
  );
};

export default Table;
