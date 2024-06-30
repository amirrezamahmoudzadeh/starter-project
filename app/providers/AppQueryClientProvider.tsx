import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  type DehydratedState
} from "@tanstack/react-query";

import { useState, type FC, type PropsWithChildren } from "react";

interface Props {
  dehydratedState?: DehydratedState;
}

const AppQueryClientProvider: FC<PropsWithChildren<Props>> = ({
  children,
  dehydratedState
}) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          networkMode: "offlineFirst"
        }
      }
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
};

export default AppQueryClientProvider;
