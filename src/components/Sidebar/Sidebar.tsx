import { Box, VStack, StackDivider } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { id: 1, title: "Матчи", link: "/matches" },
  { id: 2, title: "Игроки", link: "/players" },
];

const Sidebar = () => {
  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      width='100%'
    >
      {NAV_ITEMS.map((item) => (
        <Link key={item.id} href={item.link}>
          <a>
            <Box>{item.title}</Box>
          </a>
        </Link>
      ))}
    </VStack>
  );
};

export default Sidebar;
