import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Projects.scss";

let isFirst: boolean = true;

interface Obj {
  url: string;
  text: string;
  img: string;
}

const project: Obj[] = [
  {
    url: "Your-Caledner",
    text: "일정관리를 할 수 있는 캘린더 서비스",
    img: "/images/여기저기.png",
  },
  {
    url: "여기저기",
    text: "전국 관광정보를 한 곳에 볼 수 있는 서비스",
    img: "",
  },
  { url: "Portfolio", text: "React로 제작한 웹 포트폴리오", img: "" },
];

const card: string[] = ["Your Calender", "여기저기", "Portfolio"];

const Projects = () => {
  const navigate = useNavigate();
  const projectRef = useRef<HTMLUListElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [clickCard, SetClickCard] = useState<number>(0);

  useEffect(() => {
    const resizeHandler = () => {
      console.log(projectRef.current!.clientWidth);
      setWidth(projectRef.current!.clientWidth);
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  });

  useEffect(() => {
    setWidth(projectRef.current!.clientWidth);
  }, []);

  const cardClick = (index: number) => {
    SetClickCard(index);
  };

  return (
    <section className="Project">
      <h3>Projects</h3>
      <ul className="Project-Content" ref={projectRef}>
        {project.map((item, index) => (
          <li
            className="Project-item"
            onClick={() => navigate(`/projects/${item.url}`)}
            key={index}
          >
            <div className="pr-info">
              <h4 className="pr-title">{item.url}</h4>
              <p>{item.text}</p>
            </div>
            <img src={item.img} alt={item.url}></img>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

/* <div
className="Projects"
// style={{
//   transform: `translateX(-${clickCard * width}px)`,
// }}
></div> */

/* <div className="Project-card">
        <div
          className="card-slide"
          style={{ transform: `translateX(${-(clickCard - 1) * 230}px)` }}
        >
          {card.map((item, index) => (
            <div
              className={index === clickCard ? "card-active" : "card-n-active"}
              onClick={() => cardClick(index)}
            >
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </div> */
