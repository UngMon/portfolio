import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="Projects">
      <div
        className="Project one"
        onClick={() => navigate("/your-calender")}
      >
        <div className="position">Front-end</div>
        <div className="pr-title">Your Calender</div>
        <div className="start-date">2022</div>
      </div>
      <div
        className="Project two"
        onClick={() => navigate("/projects/your-calender")}
      >
        <div className="position">Front-end</div>
        <div className="pr-title">축제모아</div>
        <div className="start-date">2023</div>
      </div>
      <div
        className="Project three"
        onClick={() => navigate("/projects/your-calender")}
      >
        <div className="position">Front-end</div>
        <div className="pr-title">포트폴리오</div>
        <div className="start-date">2023</div>
      </div>
    </div>
  );
};

export default Projects;
