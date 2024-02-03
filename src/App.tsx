import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./routes/country/Country";
import Countries from "./routes/countries/Countries";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:name" element={<Country />} />
        <Route path="/" element={<Countries />} />
      </Routes>
    </Router>
  );
}

export default App;
