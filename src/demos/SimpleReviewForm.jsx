import { useState } from "react";

function SimpleReviewForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setMessage("Name is required.");
      return;
    }

    setMessage(`Submitted for ${name}`);
  }

  return (
    <div className="card">
      <span className="badge">Demo 3: Testing Forms</span>
      <h2>Simple Review Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="simple-name">Name</label>
          <input
            id="simple-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
        {message && (
          <p className={message.includes("required") ? "alert-error" : "alert-success"}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default SimpleReviewForm;
