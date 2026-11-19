import { useState } from "react";
import ReviewPreview from "./ReviewPreview";

function ReviewForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [rating, setRating] = useState("5");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [reviews, setReviews] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!name.trim() || !email.trim() || !movieTitle.trim() || !review.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (review.trim().length < 10) {
      setError("Review must be at least 10 characters long.");
      return;
    }

    const newReview = {
      name: name.trim(),
      email: email.trim(),
      movieTitle: movieTitle.trim(),
      rating,
      review: review.trim(),
    };

    setReviews((prev) => [newReview, ...prev]);
    setSuccessMessage(`Review submitted for ${name.trim()}`);

    // Clear form after successful submit
    setName("");
    setEmail("");
    setMovieTitle("");
    setRating("5");
    // BUG: Forgot to clear the review field! Test #6 will catch this.
  }

  return (
    <div>
      <div className="card">
        <span className="badge">Day 14 Mini-Project</span>
        <h2>Movie Review Form</h2>
        <p>
          Write tests in <code>src/components/ReviewForm.test.jsx</code> to verify all 6 required behaviors.
          There is 1 real bug in this form—your tests will catch it!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="movieTitle">Movie Title</label>
            <input
              id="movieTitle"
              value={movieTitle}
              onChange={(event) => setMovieTitle(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            >
              <option value="5">5 - Masterpiece</option>
              <option value="4">4 - Great</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="review">Review</label>
            <textarea
              id="review"
              rows="3"
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Submit Review
          </button>

          {error && <p className="alert-error">{error}</p>}
          {successMessage && <p className="alert-success">{successMessage}</p>}
        </form>
      </div>

      <ReviewPreview reviews={reviews} />
    </div>
  );
}

export default ReviewForm;
