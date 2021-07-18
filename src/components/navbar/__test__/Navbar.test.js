import { render, screen } from "../../../test-utils";
import Navbar from "../Navbar";

describe("Navbar", () => {
  test("should render navbar", () => {
    render(<Navbar />);
  });
});
