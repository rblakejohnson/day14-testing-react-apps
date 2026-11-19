import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Testing Greeting component", () => {
  it("renders the heading text", async () => {
    const user = userEvent.setup();
    render(<Greeting />);

    // Before clicking — text should NOT be visible
    expect(screen.queryByText("Hello Students")).not.toBeInTheDocument();

    // Click the button to show the text
    const button = screen.getByRole("button", { name: /greeting/i });
    await user.click(button);

    // After clicking — text SHOULD be visible
    expect(screen.getByText("Hello Students")).toBeInTheDocument();

    // Click again to hide it
    await user.click(button);
    expect(screen.queryByText("Hello Students")).not.toBeInTheDocument();
  });
});
