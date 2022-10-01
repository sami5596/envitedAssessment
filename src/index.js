import React from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/homepage/homepage";
import CreateEvent from "./pages/create/create";
import Event from "./pages/event/event";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/create" element={<CreateEvent />}></Route>
        <Route exact path="/event" element={<Event />}></Route>
      </Routes>
    </Router>
  );
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
