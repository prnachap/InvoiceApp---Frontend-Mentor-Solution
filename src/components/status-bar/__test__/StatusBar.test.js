import { render, screen } from "../../../test-utils";
import StatusBar from "../StatusBar";

describe("Status Bar", () => {
  test("should render paid as status when status is paid", () => {
    render(<StatusBar id={1} status="paid" />);
    expect(screen.getByText(/paid/i)).toBeInTheDocument();
  });
  test("should render pending as status when status is pending", () => {
    render(<StatusBar id={1} status="pending" />);
    expect(screen.getByText(/pending/i)).toBeInTheDocument();
  });
  test("should render draft as status when status is draft", () => {
    render(<StatusBar id={1} status="draft" />);
    expect(screen.getByText(/draft/i)).toBeInTheDocument();
  });
  test("should render three buttons when status is othet than paid", () => {
    render(<StatusBar id={1} status="draft" />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });
  test("should render two buttons when status is paid", () => {
    render(<StatusBar id={1} status="paid" />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });
});
