import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import LogoLoader from "./Pages/Home/logo_loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LogoLoader />;

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
