import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import Work from "../pages/work";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import Error from "../pages/404";

const AppContent = ({ setActive }) => {
  return (
    <>
      <div className="flex justify-center h-full w-full">
        <Routes>
          <Route path="/" element={<Home setActive={setActive} />} />
          <Route path="/home" element={<Home setActive={setActive} />} />
          <Route path="/about" element={<About setActive={setActive} />} />
          <Route path="/skills" element={<Skills setActive={setActive} />} />
          <Route
            path="/projects"
            element={<Projects setActive={setActive} />}
          />
          <Route path="/work" element={<Work setActive={setActive} />} />
          <Route path="/blog" element={<Blog setActive={setActive} />} />
          <Route path="/contact" element={<Contact setActive={setActive} />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
    </>
  );
};

export default AppContent;
