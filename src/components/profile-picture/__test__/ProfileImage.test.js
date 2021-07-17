import { render, screen } from "../../../test-utils";
import Profile from "../ProfileImage";

describe("Profile", () => {
  test("should render image", () => {
    render(<Profile />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
