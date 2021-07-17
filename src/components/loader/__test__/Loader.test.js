import { render, screen } from "../../../test-utils";
import Loader from "../Loader";

describe("Loader", () => {
  test("should render loader", () => {
    render(<Loader />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
