import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import "./style.css";
import NavBar from "components/NavBar";

function App() {
  const [firstLoading, setFirstLoading] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFirstLoading(false);
  //   }, 1200);
  //   return () => clearTimeout(timer);
  // }, []);
  console.log("firstLoading", firstLoading);
  return (
    <Router>
      <Preloader load={firstLoading} />
      <div className="app" id={firstLoading ? "no-scroll" : "scroll"}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
