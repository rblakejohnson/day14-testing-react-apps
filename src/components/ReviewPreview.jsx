function ReviewPreview({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="card" style={{ background: "#f8fafc" }}>
        <h3>Submitted Reviews</h3>
        <p>No reviews submitted yet.</p>
      </div>
    );
  }

  return (
    <div className="card" style={{ background: "#f8fafc" }}>
      <h3>Submitted Reviews ({reviews.length})</h3>
      {reviews.map((item, index) => (
        <article
          key={index}
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "0.75rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{item.movieTitle}</strong>
            <span>Rating: {item.rating}/5</span>
          </div>
          <p style={{ margin: "0.5rem 0" }}>{item.review}</p>
          <small style={{ color: "#64748b" }}>
            Reviewed by {item.name} ({item.email})
          </small>
        </article>
      ))}
    </div>
  );
}

export default ReviewPreview;
