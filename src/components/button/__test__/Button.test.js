import { render, screen } from "@testing-library/react";
import Button from "../Button";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../theme/light-theme";

describe("Button", () => {
  test("render primary button without error", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button type="primary">New Invoice</Button>
      </ThemeProvider>
    );
    const primaryButton = screen.getByRole("button", { name: /new invoice/i });
    expect(primaryButton).toBeInTheDocument();
  });
  test("primary button should have svg icon", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button type="primary">New Invoice</Button>
      </ThemeProvider>
    );
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
  });
  test("render secondary button without error", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button type="primary">Add</Button>
      </ThemeProvider>
    );
    const secondaryButton = screen.getByRole("button", { name: /add/i });
    expect(secondaryButton).toBeInTheDocument();
  });
  test("secondary button should not have svg icon", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Button type="secondary">Add</Button>
      </ThemeProvider>
    );
    const icon = screen.queryByRole("img");
    expect(icon).not.toBeInTheDocument();
  });
});
