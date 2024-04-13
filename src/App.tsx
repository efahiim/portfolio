import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "@components/navigation";
import { Home, About, Projects, Contact } from "@pages/index";

const App: React.FunctionComponent = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
