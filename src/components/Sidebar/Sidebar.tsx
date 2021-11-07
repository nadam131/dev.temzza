import { Box, VStack, StackDivider } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const data = [{ id: 1, title: "Матчи", link: "matches" }];

const Sidebar = () => {
  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      width='100%'
    >
      {data.map((item) => (
        <Link key={item.id} href={`/${item.link}`}>
          <a>
            <Box>{item.title}</Box>
          </a>
        </Link>
      ))}
    </VStack>
  );
};

export default Sidebar;
