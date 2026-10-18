import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WandalMT from "./pages/WandalMT";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <div className="min-h-screen flex flex-col px-3 py-3">
        <Navbar />
        <div className="mt-8 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/wandalmt" element={<WandalMT />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;

// //import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutMe from "./pages/AboutMe";
// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import "./App.css";

// function App() {
//   return (
//     <div className="h-screen py-3 px-3">
//       <BrowserRouter basename="/Portfolio">
//         <Navbar />
//         <div className="mt-8 ">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/aboutme" element={<AboutMe />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
