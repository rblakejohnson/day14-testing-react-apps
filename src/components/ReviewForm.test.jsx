import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import ReviewForm from "./ReviewForm";

describe("ReviewForm", () => {
  // ✅ Requirement 1 (Completed example)
  it("1. renders all important inputs and submit button", () => {
    render(<ReviewForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/movie title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/review/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit review/i })
    ).toBeInTheDocument();
  });

  // TODO — Requirement 2: Shows validation error on empty submit
  it("2. shows validation error on empty submit", async () => {
    const user = userEvent.setup();
    render(<ReviewForm />);

    // Click Submit Review without filling inputs
    // Assert "All fields are required." is in the document
  });

  // TODO — Requirement 3: Shows email validation error for invalid email
  it("3. shows email validation error for invalid email", async () => {
    const user = userEvent.setup();
    render(<ReviewForm />);

    // Fill Name, Movie Title, and Review (>= 10 chars), enter invalid Email
    // Click Submit Review and assert "Please enter a valid email." is in the document
  });

  // TODO — Requirement 4: Shows short-review validation error
  it("4. shows short-review validation error", async () => {
    const user = userEvent.setup();
    render(<ReviewForm />);

    // Fill Name, Email, Movie Title, and a Review shorter than 10 characters
    // Click Submit Review and assert "Review must be at least 10 characters long." is in the document
  });

  // TODO — Requirement 5: Successfully submits with valid data
  it("5. successfully submits with valid data", async () => {
    const user = userEvent.setup();
    render(<ReviewForm />);

    // Fill all fields with valid data and click Submit Review
    // Assert "Review submitted for <Name>" and the movie title appear on screen
  });

  // TODO — Requirement 6: Clears the form after successful submit
  // ⚠️ When written properly, this test will fail until you fix the bug in ReviewForm.jsx!
  it("6. clears the form after successful submit", async () => {
    const user = userEvent.setup();
    render(<ReviewForm />);

    // Fill all fields with valid data, click Submit Review,
    // and assert Name, Email, Movie Title, and Review inputs all have value "" (.toHaveValue(""))
  });
});
