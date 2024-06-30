import { defineStyleConfig } from "@chakra-ui/react";
import { mobileScreenStyle } from "helpers/utils/themeHelpers";

export const Text = defineStyleConfig({
  variants: {
    item: {
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: "180%",
      ...mobileScreenStyle({ lineHeight: "150%" })
    },
    explanatory: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "180%"
    },
    normal: {
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: "200%"
    },
    small: {
      fontSize: "11px",
      fontWeight: 400
    },
    caption: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "150%"
    },
    button: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "200%",
      ...mobileScreenStyle({ fontSize: "13px" })
    }
  },
  defaultProps: {
    variant: "normal"
  }
});

export const Heading = defineStyleConfig({
  variants: {
    "page-title": {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "180%",
      ...mobileScreenStyle({ fontSize: "1rem" })
    },
    big: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: "170%",
      ...mobileScreenStyle({ fontSize: "14px" })
    },
    normal: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "170%",
      ...mobileScreenStyle({ fontSize: "13px" })
    },
    sentence: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "200%",
      ...mobileScreenStyle({ fontSize: "13px" })
    },
    "asset-number": {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "noraml",
      ...mobileScreenStyle({ fontSize: "18px" })
    }
  },
  defaultProps: {
    variant: "normal"
  }
});
