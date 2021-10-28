import React, { useState } from "react";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import useClipboard from "react-use-clipboard";

const Table = ({ props }) => {
  const [activeItem, setActiveItem] = useState();
  const [isCopied, setCopied] = useClipboard(activeItem);

  //ЗАМЕЧАНИЕ я не особо понимаю, что мы тут копируем,
  // сейчас в буфере обмена данные из пропсов
  // а должны быть ссылки на id дивов

  console.log(isCopied, "скопировано");
  // ЗАМЕЧАНИЕ - невозможно убрать из-за правила es-lint
  // мне наод где-то это использовать

  const handleClick = (item) => {
    setActiveItem(item);
    setCopied();
  };

  return (
    <>
      {props && (
        <ChakraTable variant='striped' colorScheme='teal'>
          <TableCaption placement='top'>{props.caption}</TableCaption>
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
