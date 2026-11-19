import { useState } from "react";
import Greeting from "./demos/Greeting";
import Counter from "./demos/Counter";
import SimpleReviewForm from "./demos/SimpleReviewForm";
import ExercisesWorkspace from "./exercises/ExerciseComponents";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [activeTab, setActiveTab] = useState("demos");

  return (
    <div className="app-container">
      <header className="header">
        <h1>Day 14: Testing React Apps</h1>
        <p>Vitest &amp; React Testing Library</p>
      </header>

      <nav className="nav-tabs" aria-label="Lesson sections">
        <button
          className={`tab-btn ${activeTab === "demos" ? "active" : ""}`}
          onClick={() => setActiveTab("demos")}
        >
          1. Lecture Demos (I Do)
        </button>
        <button
          className={`tab-btn ${activeTab === "exercises" ? "active" : ""}`}
          onClick={() => setActiveTab("exercises")}
        >
          2. Exercises 1–5 (We Do)
        </button>
        <button
          className={`tab-btn ${activeTab === "project" ? "active" : ""}`}
          onClick={() => setActiveTab("project")}
        >
          3. Mini-Project: Movie Review Form (You Do)
        </button>
      </nav>

      <main>
        {activeTab === "demos" && (
          <div>
            <Greeting />
            <Counter />
            <SimpleReviewForm />
          </div>
        )}

        {activeTab === "exercises" && <ExercisesWorkspace />}

        {activeTab === "project" && <ReviewForm />}
      </main>
    </div>
  );
}

export default App;
