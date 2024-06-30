import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import type { FC, PropsWithChildren } from "react";
import theme from "theme";
import AppFontProvider from "./AppFontProvider";

const AppChakraProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppFontProvider />
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
};

export default AppChakraProvider;
