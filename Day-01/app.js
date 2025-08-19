import React from "react";
import ReactDOM from "react-dom/client";

// App component
function App() {
  return (
    <div>
      <h1>Hello, React is working! 🚀</h1>
      <p>This is rendered using ReactDOM.</p>
    </div>
  );
}

// Render into #root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
