import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Projects.scss";

interface Obj {
  url: string;
  text: string;
  img: string;
  color: string;
}

const project: Obj[] = [
  {
    url: "Your-Calender",
    text: "일정관리를 할 수 있는 캘린더 서비스",
    img: "/images/여기저기.png",
    color: "bazzle",
  },
  {
    url: "여기저기",
    text: "전국 관광정보를 한 곳에 볼 수 있는 서비스",
    img: "",
    color: "purple",
  },
  {
    url: "Portfolio",
    text: "React로 제작한 웹 포트폴리오",
    img: "",
    color: "yellow",
  },
];

const card: string[] = ["Your Calender", "여기저기", "Portfolio"];

const Projects = () => {
  const navigate = useNavigate();
  const projectRef = useRef<HTMLUListElement>(null);
  // const [width, setWidth] = useState<number>(0);
  const [clickCard, SetClickCard] = useState<number>(-1);

  // useEffect(() => {
  //   const resizeHandler = () => {
  //     console.log(projectRef.current!.clientWidth);
  //     setWidth(projectRef.current!.clientWidth);
  //   };

  //   window.addEventListener("resize", resizeHandler);

  //   return () => window.removeEventListener("resize", resizeHandler);
  // });

  // useEffect(() => {
  //   setWidth(projectRef.current!.clientWidth);
  // }, []);

  const cardClick = (index: number, url: string) => {
    console.log(clickCard, index);
    SetClickCard(index);
    setTimeout(() => navigate(`/projects/${url}`), 500);
  };

  const backgroudColorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("click");
    SetClickCard(-1);
    navigate("/");
  };

  return (
    <section className={`Project on`}>
      <h3>Projects</h3>
      <ul className="Project-Content" ref={projectRef}>
        {project.map((item, index) => (
          <li
            className="Project-item"
            onClick={() => cardClick(index, item.url)}
            key={index}
          >
            <div className="pr-info">
              <h4 className="pr-title">{item.url}</h4>
              <p>{item.text}</p>
            </div>
            <div
              className={`${index === clickCard ? "expand" : "contraction"} ${
                project[index].color
              }`}
              onClick={(e) => backgroudColorClick(e)}
            ></div>
            {/* <img src={item.img} alt={item.url}></img> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
