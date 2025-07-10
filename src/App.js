import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentsList from "./pages/StudentsList";
import StudentDetails from "./pages/StudentDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

