import { Container, Flex } from "@chakra-ui/react";
import React from "react";

const styles = {
  wrapper: {
    minH: "100vh",
  },
};

interface ILayout {
  children: any;
}

const Layout: React.FC = ({ children }: ILayout) => {
  return (
    <Container maxW='container.xl'>
      <Flex {...styles.wrapper}>{children}</Flex>
    </Container>
  );
};

export default Layout;
