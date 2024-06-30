import { extendTheme, type ThemeOverride } from "@chakra-ui/react";
import colors from "theme/colors";
import { Button, Heading, Input, Stepper, Text } from "theme/components";
import fonts from "theme/fonts";
import styles from "theme/styles";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};

const theme: ThemeOverride = extendTheme({
  // direction: "rtl",
  colors,
  fonts,
  styles,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },
  components: {
    Text,
    Heading,
    Button,
    Input,
    Stepper,
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles
              },
            label: {
              top: 0,
              right: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "transparent",
              pointerEvents: "none",
              mx: 0,
              px: 0,
              my: 2,
              transformOrigin: "right top"
            }
          }
        }
      }
    }
  },
  shadows: {
    footer: "0px -4px 10px 0px rgba(219, 219, 219, 0.50);",
    high: "0px 3px 4px 0px rgba(219, 219, 219, 0.15);",
    main: "0px 2px 4px 0px rgba(0, 0, 0, 0.10);",
    azki: "0px 0px 10px 0px rgba(0, 0, 0, 0.10);",
    navbar: "0px -4px 16px 0px rgba(4, 10, 31, 0.04);",
    general:
      "0px 8px 10px 0px rgba(0, 0, 0, 0.08), 0px 16px 24px 0px rgba(0, 0, 0, 0.04);"
  },
  radii: {
    base: "4px"
  }
});

export default theme;
