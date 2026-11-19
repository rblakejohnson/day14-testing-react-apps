import { useState } from "react";

// Exercise 1
export function WelcomeCard() {
  return <p>Welcome to React Testing</p>;
}

// Exercise 2
export function ProfileSearchBox() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <h3>Member Directory</h3>
      <label htmlFor="member-search">Search Member</label>
      <input
        id="member-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type a name..."
      />
      <button type="button">Find</button>
    </div>
  );
}

// Exercise 3
export function StepCounter() {
  const [steps, setSteps] = useState(0);
  return (
    <div>
      <p>Steps: {steps}</p>
      <button type="button" onClick={() => setSteps(steps + 1)}>
        Add Step
      </button>
      <button type="button" onClick={() => setSteps(0)}>
        Reset Steps
      </button>
    </div>
  );
}

// Exercise 4 & 5
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus(`Subscribed ${email}!`);
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email">Newsletter Email</label>
      <input
        id="newsletter-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Join</button>
      {status && <p>{status}</p>}
    </form>
  );
}

function ExercisesWorkspace() {
  return (
    <div className="card">
      <span className="badge">In-Class Exercises 1–5</span>
      <h2>Guided Practice Workspace</h2>
      <p>
        Open <code>src/exercises/Exercises.test.jsx</code> and complete the{" "}
        <code>TODO</code> blocks while running <code>npm run test</code>.
      </p>

      <div className="grid-2">
        <div className="card" style={{ background: "#f8fafc" }}>
          <h3>Exercise 1: Render Test</h3>
          <WelcomeCard />
        </div>

        <div className="card" style={{ background: "#f8fafc" }}>
          <h3>Exercise 2: Find by Role &amp; Label</h3>
          <ProfileSearchBox />
        </div>

        <div className="card" style={{ background: "#f8fafc" }}>
          <h3>Exercise 3: Counter Behavior</h3>
          <StepCounter />
        </div>

        <div className="card" style={{ background: "#f8fafc" }}>
          <h3>Exercise 4 &amp; 5: Form &amp; Refactor</h3>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
}

export default ExercisesWorkspace;
