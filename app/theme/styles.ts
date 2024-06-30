import type { ThemeOverride } from "@chakra-ui/react";

const styles: ThemeOverride["styles"] = {
  global: () => ({
    a: {
      outline: "none",
      color: "inherit",
      textDecoration: "none",
      WebkitTapHighlightColor() {
        return "transparent";
      }
    },
    div: {
      WebkitTapHighlightColor() {
        return "transparent";
      }
    },
    "a:hover": {
      textDecoration: "none !important"
    },
    "*:focus": {
      textDecoration: "none",
      outline: "none !important"
    },
    "html, body": {
      maxWidth: "100vw",
      overflowX: "hidden"
    },
    "*:focus-visible": {
      outline: 0,
      outlineOffset: 0,
      boxShadow: "none"
    },
    "*": {
      WebkitOverflowScrolling: "touch",
      webkitTapHighlightColor: "transparent !important",
      overscrollBehaviorY: "none",
      scrollbarWidth: "none"
    },
    "*:not(input, textarea)": {
      webkitTouchCallout: "none",
      userSelect: "none",
      MozUserSelect: "none",
      WebkitUserSelect: "none",
      msUserSelect: "none"
    },
    "*::-webkit-scrollbar": {
      display: "none",
      width: "0 !important"
    },
    ".chakra-toast__inner": {
      minWidth: "auto !important"
    },
    // Removing input background colour for Chrome autocomplete
    "input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active":
      {
        transition: "background-color 5000s ease-in-out 0s"
      }
  })
};

export default styles;
