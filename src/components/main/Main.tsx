import { useState, useEffect } from "react";
import Intro from "../Introduce/Intro";
import Projects from "../Projects/Projects";
import Skills from "../Skill/Skills";
import About from "../about/About";
import "./Main.scss";

const Main = () => {
  const [viewWidth, setViewWidth] = useState<number>(window.innerWidth);
  const [viewHeight, setViewHeight] = useState<number>(window.innerHeight);
  const [ratio, setRatio] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(0.15);
  const [scrollY, setScrollY] = useState<number>(0);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  // useEffect(() => {
  //   console.log(window.scrollY);

  //   const scrollHandler = () => {
  //     if (window.scrollY > viewHeight) {
  //       setOpacity(0);
  //       return;
  //     }

  //     if (window.scrollY < 76) {
  //       let opa = window.scrollY / 100 + 0.15 < 1 ? window.scrollY / 100 + 0.15 : 1;
  //       setScale(1);
  //       setOpacity(opa);
  //       setX(0);
  //       setY(0);
  //     } else {
  //       let num = 0;
  //       console.log(`?? ${window.scrollY >= 76}`)
  //       // num = window.scrollY / 10;
  //       if (window.scrollY < viewHeight / 3) num = (window.scrollY / 50)
  //       else if (window.scrollY < viewHeight / 2) num = (window.scrollY / 20);
  //       else num = num = (window.scrollY / 10)

  //       num *= viewWidth / 1000
  //       setOpacity(1);
  //       setScale(num);
  //       setScrollY(window.scrollY);
  //       setX(- 30 * num);
  //       setY(25 * num);
  //     }

  //   };
  //   window.addEventListener("scroll", scrollHandler);
  //   // window.addEventListener("resize");
  //   return () => {
  //     // window.addEventListener('resize')
  //     window.removeEventListener("scroll", scrollHandler);
  //   };
  // });

  // useEffect(() => {
  //   if (window.innerWidth < 1024) return;

  //   const resizeHandler = () => {
  //     const widthRatio = 1024 - window.innerWidth;
  //     const heightRatio = 848 - window.innerHeight;

  //     if (scrollY > 0) {
  //       setRatio(widthRatio / 100)
  //       setViewWidth(width / 100);
  //       setViewHeight(heightRatio / 100);
  //     }
  //   }

  //   window.addEventListener('resize', resizeHandler)
  //   return () => window.removeEventListener('resize', resizeHandler)
  // })

  // console.log(window.scrollY, scale)
  return (
    <main className="Main-box">
      {/* <Intro
        viewHeight={viewHeight}
        scale={scale}
        setScale={setScale}
        opacity={opacity}
        setOpacity={setOpacity}
        scrollY={scrollY}
        x={x}
        y={y}
      /> */}
      <About />
      <Skills />
      <Projects />
    </main>
  );
};

export default Main;
