import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import sizes from "./foundations/sizes";
import fonts from "./foundations/fonts";
import colors from "./foundations/colors";

const overrides = {
  ...styles,
  ...sizes,
  ...fonts,
  ...colors,
};

export default extendTheme(overrides);
