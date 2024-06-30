import { defineStyleConfig } from "@chakra-ui/react";

const baseStyle = {
  indicator: {
    borderWidth: "0 !important",
    bgColor: "transparent !important"
  },
  separator: {
    right: "calc(var(--stepper-indicator-size) / 2 - 1px)"
  }
};

export const Stepper = defineStyleConfig({
  baseStyle
});
