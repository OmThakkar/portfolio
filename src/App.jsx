import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
import Work from "./pages/Work";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
// import ProjectDetails from "./pages/ProjectDetails";
// import Contact from "./pages/Contact";
// import Extras from "./pages/Extras";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:title" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
