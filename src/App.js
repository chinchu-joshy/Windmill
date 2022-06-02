import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./bootstrap.min.css";
import Home from "./pages/Home";
import Visualisation from "./pages/Visualisation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualisation" element={<Visualisation />} />
      </Routes>
    </div>
  );
}

export default App;
