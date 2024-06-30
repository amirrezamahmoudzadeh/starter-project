import { Provider } from "jotai";
import type { FC, PropsWithChildren } from "react";

const AppJotaiProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default AppJotaiProvider;
