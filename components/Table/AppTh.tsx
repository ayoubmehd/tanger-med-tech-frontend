import type { ReactElement } from "react";

function Th({
  color,
  children,
}: {
  color?: string;
  children: ReactElement | string;
}) {
  return (
    <th
      className={
        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
        (color === "light"
          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
      }
    >
      {children}
    </th>
  );
}

export default Th;
