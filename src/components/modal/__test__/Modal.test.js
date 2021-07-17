import { render, screen } from "../../../test-utils";
import Modal from "../Modal";

describe("Modal", () => {
  test("should render Modal", () => {
    render(<Modal />);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
