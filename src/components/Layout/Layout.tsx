import { Container } from "@chakra-ui/react";
import React from "react";

interface ILayout {
  children: any;
}

const Layout = ({ children }: ILayout) => {
  return <Container maxW="container.xl">{children}</Container>;
};

export default Layout;
