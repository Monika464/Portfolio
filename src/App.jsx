//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="h-screen py-3 px-3">
      <BrowserRouter>
        <Navbar />
        <div className="mt-8 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;