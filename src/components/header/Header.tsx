import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      className="header"
      style={{
        backgroundColor: `${window.scrollY > 2000 ? "#0a192f" : "transparent"}`,
      }}
    >
      <span onClick={() => navigate("/")}>{"<웅/>"}</span>
      <nav>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
