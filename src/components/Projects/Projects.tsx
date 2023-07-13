import { useNavigate } from "react-router-dom";
import "./Projects.scss";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="Projects">
      <h3>My Projects</h3>
      <div className="Project" onClick={() => navigate("/projects/your-calender")}>
        <div className="position">Front-end</div>
        <div className="pr-title">Your Calender</div>
        <div className="start-date">2022</div>
      </div>
      <div
        className="Project"
        onClick={() => navigate("/projects/여기저기")}
      >
        <div className="position">Front-end</div>
        <div className="pr-title">여기저기</div>
        <div className="start-date">2023</div>
      </div>
      <div
        className="Project"
        onClick={() => navigate("/projects/포트폴리오")}
      >
        <div className="position">Front-end</div>
        <div className="pr-title">포트폴리오</div>
        <div className="start-date">2023</div>
      </div>
    </div>
  );
};

export default Projects;
