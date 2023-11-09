import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <span onClick={() => navigate("/")}>{"<웅/>"}</span>
      <nav>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
