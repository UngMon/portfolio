import Intro from "./Intro";
import "./Main.scss";
import Projects from "./Projects";
import Skils from "./Skils";

const Main = () => {
  return (
    <main className="Main-box">
      <Intro />
      <Skils />
      <Projects />
    </main>
  );
};

export default Main;
