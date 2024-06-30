import { mobileScreenStyle } from "./../../helpers/utils/themeHelpers";
import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const outline = definePartsStyle({
  field: {
    borderColor: "gray.500",
    fontSize: "1rem",
    borderWidth: 2,
    ...mobileScreenStyle({ fontSize: "13px", borderWidth: 1 }),
    fontWeight: 500,
    rounded: "lg",
    _focus: {
      fontSize: "1rem",
      ...mobileScreenStyle({ fontSize: "13px" }),
      borderColor: "primary.500"
    },
    _focusVisible: {
      fontSize: "1rem",
      ...mobileScreenStyle({ fontSize: "13px" }),
      shadow: "none"
    },
    _hover: {
      fontSize: "1rem",
      ...mobileScreenStyle({ fontSize: "13px" }),
      borderColor: "gray.500"
    }
  }
});

const flushed = definePartsStyle({
  field: {
    borderColor: "gray.500",
    fontSize: "1rem",
    ...mobileScreenStyle({ fontSize: "13px" }),
    fontWeight: 500,
    _focus: {
      fontSize: "1rem",
      ...mobileScreenStyle({ fontSize: "13px" }),
      borderColor: "primary.500"
    },
    _focusVisible: {
      fontSize: "1rem",
      ...mobileScreenStyle({ fontSize: "13px" }),
      shadow: "none"
    },
    _hover: {
      fontSize: "1rem",
      ...mobileScreenStyle({ fontSize: "13px" }),
      borderColor: "gray.500"
    }
  }
});

export const Input = defineMultiStyleConfig({
  variants: { outline, flushed }
});
