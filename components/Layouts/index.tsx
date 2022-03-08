import type { ReactElement } from "react";

export type LayoutPropsType = { children: ReactElement };

const Layouts = function ({ children }: LayoutPropsType) {
  return <main>{children}</main>;
};

export default Layouts;
