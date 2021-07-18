import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test-utils";
import ThemeSwitcher from "../ThemeSwitcher";

describe("Theme Swicher", () => {
  test("Should render moon initially", () => {
    render(<ThemeSwitcher />);
    userEvent.click(screen.getByRole("img"));
    screen.debug(screen.getByRole("img"));
  });
});
