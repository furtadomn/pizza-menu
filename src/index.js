import ReactDOM from "react-dom/client";
import Menu from "./components/Menu.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
