import type { SystemStyleObject } from "@chakra-ui/react";

export const mobileScreenStyle = (styles: SystemStyleObject) => {
  return { "@media (max-width: 992px)": styles };
};
