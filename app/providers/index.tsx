"use client";

import AppChakraProvider from "providers/AppChakraProvider";
import AppJotaiProvider from "providers/AppJotaiProvider";
import AppQueryClientProvider from "providers/AppQueryClientProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppChakraProvider>
      <AppJotaiProvider>
        <AppQueryClientProvider>{children}</AppQueryClientProvider>
      </AppJotaiProvider>
    </AppChakraProvider>
  );
}
