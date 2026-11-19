import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import {
  WelcomeCard,
  ProfileSearchBox,
  StepCounter,
  NewsletterSignup,
} from "./ExerciseComponents";

// ============================================================================
// EXERCISE 1 — Write a Render Test
// ============================================================================
describe("Exercise 1 — WelcomeCard", () => {
  it("renders 'Welcome to React Testing'", () => {
    // TODO: Render <WelcomeCard /> and check that "Welcome to React Testing" appears
  });
});

// ============================================================================
// EXERCISE 2 — Find Elements by Role & Label
// ============================================================================
describe("Exercise 2 — ProfileSearchBox", () => {
  it("finds heading, input, and button", () => {
    render(<ProfileSearchBox />);
    // TODO: Assert the heading "Member Directory" is in the document (getByRole)
    // TODO: Assert the "Search Member" input is in the document (getByLabelText)
    // TODO: Assert the "Find" button is in the document (getByRole)
  });
});

// ============================================================================
// EXERCISE 3 — Test Counter Behavior
// ============================================================================
describe("Exercise 3 — StepCounter", () => {
  it("starts at 0, increments, and resets", async () => {
    const user = userEvent.setup();
    render(<StepCounter />);

    // TODO: 1. Assert initial text "Steps: 0" is visible
    // TODO: 2. Click "Add Step" button and assert "Steps: 1" is visible
    // TODO: 3. Click "Reset Steps" button and assert "Steps: 0" is visible
  });
});

// ============================================================================
// EXERCISE 4 — Test a Form
// ============================================================================
describe("Exercise 4 — NewsletterSignup", () => {
  it("shows validation error for invalid email", async () => {
    const user = userEvent.setup();
    render(<NewsletterSignup />);

    // TODO: Type "bad-email" into Newsletter Email, click Join,
    // and assert "Please enter a valid email address." appears
  });

  it("submits successfully with a valid email", async () => {
    const user = userEvent.setup();
    render(<NewsletterSignup />);

    // TODO: Type "student@example.com", click Join,
    // and assert "Subscribed student@example.com!" appears
  });
});

// ============================================================================
// EXERCISE 5 — Fix a Bad Test
// ============================================================================
describe("Exercise 5 — Fix a Bad Test", () => {
  // ❌ BAD TEST: Uses container.querySelector, misses await on userEvent,
  // and asserts raw innerHTML instead of visible user behavior.
  // TODO: Refactor using getByLabelText, getByRole, await user.type/click,
  // and expect(screen.getByText("Subscribed alex@test.com!")).toBeInTheDocument()
  it("submits newsletter (fix me!)", () => {
    const { container } = render(<NewsletterSignup />);
    const input = container.querySelector("input");
    const button = container.querySelector("button");
    userEvent.type(input, "alex@test.com");
    userEvent.click(button);
    expect(container.innerHTML).toContain("Join");
  });
});
