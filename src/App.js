import Home from "./components/home";
import Experience from "./components/experience";
import About from "./components/about";
import Project from "./components/project";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Layout from "./components/Layout";
import Resume from "./components/resume";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/project"
        element={
          <Layout>
            <Project />
          </Layout>
        }
      />
      <Route
        path="/experience"
        element={
          <Layout>
            <Experience />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
