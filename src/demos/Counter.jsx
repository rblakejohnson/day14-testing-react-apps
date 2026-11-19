import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <span className="badge">Demo 2: User Interaction</span>
      <h2>Counter</h2>
      <p style={{ fontSize: "1.2rem", fontWeight: 700 }}>Count: {count}</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="btn btn-secondary" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
