import { render } from "@testing-library/react";
import Reservations from "pages/reservations";
import Home from "../pages/index";

it("renders hompage", () => {
  const { container } = render(<Home />);
});

// it("renders reservation", () => {
//   const { container } = render(<Reservations />);
// });
