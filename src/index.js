import ReactDOM from "react-dom/client";
import Pizza from "./components/Pizza.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Pizza />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
