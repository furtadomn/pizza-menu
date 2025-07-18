import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./components/Pizza.js";

function App() {
  return (
    <div>
      <Pizza />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
