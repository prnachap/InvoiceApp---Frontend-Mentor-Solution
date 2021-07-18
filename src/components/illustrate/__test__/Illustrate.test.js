import { render, screen } from "../../../test-utils";
import Illustate from "../Illustrate";

describe("Illustrate", () => {
  test("should render image component", () => {
    render(<Illustate />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("should render heading", () => {
    render(<Illustate />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /there is nothing here/i
    );
  });
});
