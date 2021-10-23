import { Grid as CGrid, GridItem } from "@chakra-ui/react";
import React from "react";

const styles = {
  grid: {
    templateColumns: "repeat(12, 1fr)",
    gap: 4,
    flex: 1,
  },
  aside: {
    d: { base: "none", md: "flex" },
    borderRight: "1px solid",
    borderColor: "gray.100",
    p: 4,
    colSpan: 4,
  },
  main: {
    pt: 4,
    pb: 4,
    colSpan: 8,
  },
};

//

interface IGrid {
  children: any;
  aside: any;
}

const Grid: React.FC = ({ children, aside }: IGrid) => {
  return (
    <CGrid {...styles.grid}>
      <GridItem {...styles.aside}>{aside}</GridItem>
      <GridItem {...styles.main}>{children}</GridItem>
    </CGrid>
  );
};

export default Grid;
