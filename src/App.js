import Home from "./components/home";
import Navbar from "./components/navbar";
import Experience from "./components/experience";
import About from "./components/about";
import Footer from "./components/footer";
import Project from "./components/project";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/experience" element={<Experience />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
