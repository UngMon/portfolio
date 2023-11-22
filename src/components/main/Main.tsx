import Projects from "../Projects/Projects";
import Skills from "../Skill/Skills";
import About from "../about/About";
import Contact from "../contact/Contact";
import Introduce from "../Introduce/Introduce";
import Cursor from "../Cursor";
import CssTest from "./CssTest";
import "./Main.scss";

const Main = () => {

  return (
    <main className="Main-box">
      {/* <Cursor /> */}
      <Introduce />
      {/* <CssTest /> */}
      {/* <About /> */}
      {/* <Skills />
      <Projects />
      <Contact /> */}
    </main>
  );
};

export default Main;
