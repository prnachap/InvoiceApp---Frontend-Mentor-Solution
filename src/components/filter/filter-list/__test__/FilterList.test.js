import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../test-utils";
import FilterOptions from "../FilterList";

describe("Filter List", () => {
  test("should render input", () => {
    render(<FilterOptions option="draft" />);
    const inputElement = screen.getByLabelText(/draft/i);
    expect(inputElement).toBeInTheDocument();
  });
  test("checkbox should not be checked initially", () => {
    render(<FilterOptions option="draft" />);
    const inputElement = screen.getByLabelText(/draft/i);
    expect(inputElement).not.toBeChecked();
  });
  test("checking the checkbox should be checked", () => {
    render(<FilterOptions option="draft" />);
    const inputElement = screen.getByLabelText(/draft/i);
    userEvent.click(inputElement);
    expect(inputElement).toBeChecked();
  });
  test("unchecking the checkbox should be unchecked", () => {
    render(<FilterOptions option="draft" />);
    const inputElement = screen.getByLabelText(/draft/i);
    userEvent.click(inputElement);
    userEvent.click(inputElement);
    expect(inputElement).not.toBeChecked();
  });
});
