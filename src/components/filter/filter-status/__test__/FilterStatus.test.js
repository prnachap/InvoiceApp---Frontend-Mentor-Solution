import { render, screen, waitFor } from "@testing-library/react";
import FilterStatus from "../FilterStatus";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../../theme/light-theme";
import userEvent from "@testing-library/user-event";

describe("Filter Status", () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={lightTheme}>
        <FilterStatus />
      </ThemeProvider>
    )
  );

  test("should render with Filter Text", () => {
    expect(screen.getAllByText(/filter/i, { exact: false })).toHaveLength(2);
  });

  test("should render svg with filter text", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("should rotate svg on hover", async () => {
    const filterText = screen.getAllByText(/filter/i, { exact: false });

    const svgElement = screen.getByRole("img");
    userEvent.hover(filterText[0]);
    await waitFor(() => {
      expect(svgElement).toHaveStyle(`transform:rotate(-180deg)`);
    });
    await waitFor(() => {
      expect(screen.getByTestId("dropdown")).toHaveStyle(`opacity:1`);
    });
    await waitFor(() => {
      expect(screen.getAllByTestId("list")).toHaveLength(3);
    });

    // screen.debug();
  });
});
