import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import sizes from "./foundations/sizes";
import fonts from "./foundations/fonts";

const overrides = {
  ...styles,
  ...sizes,
  ...fonts,
};

export default extendTheme(overrides);
