import Intro from "../Introduce/Intro";
import Projects from "../Projects/Projects";
import Skills from "../Skill/Skills";
import About from "../about/About";
import './Main.scss';

const Main = () => {
  return (
    <main className="Main-box">
      <Intro />
      <About/>
      <Skills />
      <Projects />
    </main>
  );
};

export default Main;
