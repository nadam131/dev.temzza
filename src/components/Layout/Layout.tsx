import { Container } from "@chakra-ui/react";
import React from "react";

interface Layout {
  children: any;
}

const Layout = ({ children }: Layout) => {
  return <Container maxW="container.xl">{children}</Container>;
};

export default Layout;
