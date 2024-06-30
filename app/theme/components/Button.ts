import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mobileScreenStyle } from "helpers/utils/themeHelpers";

const outline = defineStyle({
  borderWidth: 2,
  ...mobileScreenStyle({ borderWidth: 1 })
});

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "medium",
    lineHeight: "2",
    borderRadius: "8px"
  },
  sizes: {
    sm: {
      fontSize: "14px",
      minW: "76px",
      px: "12px",
      py: "4px",
      h: "40px",
      ...mobileScreenStyle({ fontSize: "0.8125rem", h: "auto", py: "2px" })
    },
    md: {
      fontSize: "14px",
      minW: "96px",
      px: "16px",
      py: "4px",
      h: "40px",
      ...mobileScreenStyle({
        fontSize: "0.8125rem",
        minW: "84px",
        h: "auto",
        py: "6px"
      })
    },
    lg: {
      fontSize: "14px",
      minW: "108px",
      px: "22px",
      py: "8px",
      h: "44px",
      ...mobileScreenStyle({ fontSize: "0.8125rem", minW: "96px", h: "auto" })
    },
    "wide-sm": {
      fontSize: "14px",
      minW: "156px",
      px: "30px",
      py: "4px",
      h: "40px",
      ...mobileScreenStyle({ fontSize: "0.8125rem", h: "auto", py: "2px" })
    },
    "wide-md": {
      fontSize: "14px",
      minW: "156px",
      px: "30px",
      py: "6px",
      h: "40px",
      ...mobileScreenStyle({ fontSize: "0.8125rem", h: "auto" })
    },
    "wide-lg": {
      fontSize: "14px",
      minW: "156px",
      px: "40px",
      py: "8px",
      h: "44px",
      ...mobileScreenStyle({ fontSize: "0.8125rem", h: "auto" })
    },
    "wider-sm": {
      fontSize: "14px",
      minW: "200px",
      px: "40px",
      py: "4px",
      h: "40px",
      ...mobileScreenStyle({
        fontSize: "0.8125rem",
        minW: "176px",
        h: "auto",
        py: "2px"
      })
    },
    "wider-md": {
      fontSize: "14px",
      minW: "200px",
      px: "45px",
      py: "6px",
      h: "40px",
      ...mobileScreenStyle({ fontSize: "0.8125rem", h: "auto", minW: "176px" })
    },
    "wider-lg": {
      fontSize: "14px",
      minW: "200px",
      px: "60px",
      py: "8px",
      h: "44px",
      ...mobileScreenStyle({ fontSize: "0.8125rem", minW: "176px", h: "auto" })
    }
  },
  variants: {
    outline
  },
  defaultProps: {
    size: "wider-lg",
    colorScheme: "primary"
  }
});
