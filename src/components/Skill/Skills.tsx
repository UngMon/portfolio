import { useEffect, useRef, useState } from "react";
import "./Skills.scss";

const Skills = () => {
  // const [scrollY, setScrollY] = useState<number>(0);
  const [activeTwo, setActiveTwo] = useState<boolean>(false);
  const [flip, setFlip] = useState<boolean[]>([false, false, false, false]);
  const boxRef = useRef<HTMLDivElement>(null);
  // console.log(`activTwo ${activeTwo}`);
  useEffect(() => {
    if (activeTwo) return;

    const ref = boxRef.current!;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver(
      (entires: IntersectionObserverEntry[]) => {
        if (entires[0].isIntersecting) {
          console.log("???");
          setActiveTwo(true);
        }
      },
      options
    );

    observer.observe(ref);

    return () => observer.unobserve(ref);
  });

  // useEffect(() => {
  //   const scrollHandler = () => {
  //    if (window.scrollY <= 1950) setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", scrollHandler);
  //   return () => window.removeEventListener("scroll", scrollHandler);
  // });

  const flipClickHandler = () => {
    setFlip([!flip[0], false, false, false]);
  };

  return (
    <section
      className={`Skills-box ${activeTwo ? "s-a" : ""}`}
      ref={boxRef}
      style={{
        opacity: `${activeTwo ? "1" : "0"}`,
      }}
    >
      <h2 className="Skill-title">My Skills</h2>
      <ul className="Skills">
        <li
          className={`MarkUp ${!flip[0] ? 'front' : 'back'}`}
          // style={{ transform: `${flip[0] ? 'rotateY(80deg)' : ''}` }}
        >
          <div>
            <h3>MarkUp</h3>
            <img src="/images/html.svg" alt="html" width="56"></img>
            <img src="/images/css3.svg" alt="css" width="40"></img>
            <p>
              웹 표준을 신경쓰면서 Tag를 작성하고 있습니다. scss를 활용할 수
              있습니다. keyframs와 media를 활용하여 재미있는 반응형 웹 사이트를
              만들 수 있습니다.
            </p>
            <button onClick={flipClickHandler}>click</button>
          </div>
        </li>
        <li className="Language">
          <div>
            <h3>Language</h3>
            <p>
              Javascript로 함수를 작성할 때, 시간 복잡도를 고민하면서
              작성합니다. 가독성이 높은 클린 코드로 작성하고 있습니다. 다양한
              변수들의 타입을 명시한 Typescript를 활용 할 수 있습니다.
            </p>
            <img></img>
            <img></img>
          </div>
        </li>
        <li className="Library">
          <div>
            <h3>Library</h3>
            <p>
              React Hooks로 다양한 기능의 함수형 컴포넌트를 작성할 수 있습니다.
              Carusel, Infite Scroll, Drag & Drop을 구현할 수 있습니다. React
              Router로 다양한 Url을 가지는 SPA를 만들 수 있습니다. Redux로
              다양한 State를 관리할 수 있습니다.
            </p>
            <img src="images/react.png" alt="react" width="60"></img>
            <img></img>
          </div>
        </li>
        <li className="DB">
          <div>
            <h3>DB</h3>
            <p>
              Firebase RealTime / FireStore DataBase에 능숙합니다. NoSQL를
              다뤄봤으며, 프로젝트를 통해서 수많은 데이터 구조를 설계를 해본
              경험이 있습니다.
            </p>
            <img></img>
            <img></img>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Skills;

// return (
//   <div className={`Skills-box ${scrollY > 1900 ? "fix" : ""}`}>
//     <h2 className="Skill-title">My Skills</h2>
//     <div className="Skills">
//       <div
//         className="MarkUp"
//         style={{
//           transform: `translate(${200 - (1900 - scrollY) / 2}px, ${
//             20 - (1900 - scrollY) / 2
//           }px)`,
//         }}
//       >
//         <h3>MarkUp</h3>
//       </div>
//       <div
//         className="Language"
//         style={{
//           transform: `translate(${800 + (1900 - scrollY) / 2}px, ${
//             20 - (1900 - scrollY) / 2
//           }px)`,
//         }}
//       >
//         <h3>Language</h3>
//       </div>
//       <div
//         className="Library"
//         style={{
//           transform: `translate(${100 - (1900 - scrollY) / 2}px, ${
//             400 + (1900 - scrollY) / 2
//           }px)`,
//         }}
//       >
//         <h3>Library</h3>
//       </div>
//       <div
//         className="DB"
//         style={{
//           transform: `translate(${800 + (1900 - scrollY) / 2}px, ${
//             500 + (1900 - scrollY) / 2
//           }px)`,
//         }}
//       >
//         <h3>DB</h3>
//       </div>
//     </div>
//   </div>
// );
