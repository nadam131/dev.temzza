import { Container } from "@chakra-ui/react";
import React from "react";
import Grid from "../Grid/Grid";
import Sidebar from "../Sidebar/Sidebar";

interface ILayout {
  children: any;
}

const Layout = ({ children }: ILayout) => {
  return (
    <Container maxW='container.xl'>
      <Grid aside={<Sidebar />}>{children}</Grid>
    </Container>
  );
};

export default Layout;
