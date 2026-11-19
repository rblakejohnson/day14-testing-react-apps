import { useState } from "react";

function Greeting() {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <span className="badge">Demo 1: Conditional UI</span>
      <h2>Greeting Component</h2>
      <button className="btn" onClick={() => setShow(!show)}>
        Greeting
      </button>
      {show && <h1 style={{ marginTop: "1rem" }}>Hello Students</h1>}
    </div>
  );
}

export default Greeting;
