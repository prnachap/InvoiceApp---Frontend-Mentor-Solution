import { render, screen } from "../../../test-utils";
import Button from "../Button";

describe("Button", () => {
  test("render primary button without error", () => {
    render(<Button type="primary">New Invoice</Button>);
    const primaryButton = screen.getByRole("button", { name: /new invoice/i });
    expect(primaryButton).toBeInTheDocument();
  });
  test("primary button should have svg icon", () => {
    render(<Button type="primary">New Invoice</Button>);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
  });
  test("render secondary button without error", () => {
    render(<Button type="primary">Add</Button>);
    const secondaryButton = screen.getByRole("button", { name: /add/i });
    expect(secondaryButton).toBeInTheDocument();
  });
  test("secondary button should not have svg icon", () => {
    render(<Button type="secondary">Add</Button>);
    const icon = screen.queryByRole("img");
    expect(icon).not.toBeInTheDocument();
  });
});
