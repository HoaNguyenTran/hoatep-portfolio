import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "components/ScrollToTop";
import NavBar from "components/Navbar";
import About from "components/About";
import Footer from "components/Footer";

function App() {
  const [firstLoading, setFirstLoading] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFirstLoading(false);
  //   }, 1200);
  //   return () => clearTimeout(timer);
  // }, []);

  // console.log("firstLoading", firstLoading);
  return (
    <Router>
      <Preloader load={firstLoading} />
      <div className="App" id={firstLoading ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
