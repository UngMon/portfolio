import { useEffect, useState } from "react";
import "./Skills.scss";

const Skills = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const scrollHandler = () => {
      console.log(window.scrollY);
      console.log(`scroll ${scrollY}`)
     if (window.scrollY <= 1950) setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return (
    <div className={`Skills-box ${scrollY > 1900 ? "fix" : ""}`}>
      <h2 className="Skill-title">My Skills</h2>
      <div className="Skills">
        <div
          className="MarkUp"
          style={{
            transform: `translate(${400 - (1900 - scrollY) / 2}px, ${
              100 - (1900 - scrollY) / 2
            }px)`,
          }}
        >
          <h3>MarkUp</h3>
        </div>
        <div
          className="Language"
          style={{
            transform: `translate(${700 + (1900 - scrollY) / 2}px, ${
              100 - (1900 - scrollY) / 2
            }px)`,
          }}
        >
          <h3>Language</h3>
        </div>
        <div
          className="Library"
          style={{
            transform: `translate(${250 + (1900 - scrollY) / 2}px, ${
              400 + (1900 - scrollY) / 2
            }px)`,
          }}
        >
          <h3>Library</h3>
        </div>
        <div
          className="DB"
          style={{
            transform: `translate(${500 + (1900 - scrollY) / 2}px, ${
              400 + (1900 - scrollY) / 2
            }px)`,
          }}
        >
          <h3>DB</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
