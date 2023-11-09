import { useEffect, useState } from "react";
import "./Intro.scss";

interface T {
  viewHeight: number;
  scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  opacity: number;
  setOpacity: React.Dispatch<React.SetStateAction<number>>;
  scrollY: number;
  x: number;
  y: number;
}
// { viewHeight, scale, setScale, opacity, scrollY, x, y }: T
const Intro = ({ viewHeight, scrollY }: T) => {
  const [scale, setScale] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(0.15);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  useEffect(() => {
    console.log(window.scrollY);

    const scrollHandler = () => {
      // if (window.scrollY > 1000) return;

      let num = 1;
      let opa = 0.15;
      if (window.scrollY > 17) num = (window.scrollY / 100) * 10;
      if (window.scrollY > 1000) num = (window.scrollY / 100) * 30;
      if (num > 190) num = 190;
      opa += num / 100;

      setScale(num);
      setOpacity(opa > 1 ? 1 : opa);
      setX(-window.scrollY / 2.5);
      setY(-window.scrollY / 1.2);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });
  console.log(window.scrollY);
  let opa: number = 0;
  if (scrollY < viewHeight) opa = opacity;
  if (scrollY > viewHeight) opa = 0;

  return (
    <div className="Intro-box">
      <div className="Intro-box1">
        <h2
          style={{
            transform: `matrix(${window.scrollY === 0 ? 1 : scale}, 0, 0, ${
              window.scrollY === 0 ? 1 : scale
            }, ${x}, ${y})`,
            opacity: `${opa}`,
            position: `${window.screenY > 1200 ? "unset" : "fixed"}`,
          }}
        >
          <span className="poly">웅이의 포트폴리오에</span>
          <span className="poly">오신 걸 환영합니다!</span>
          {window.scrollY < 1400 && (
            <span className={`${window.scrollY < 17 ? "Hello" : ""}`}>
              Hello&nbsp;World!
            </span>
          )}
        </h2>
      </div>
      <div className="scroll">
        <div>
          <span>scroll</span>
        </div>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Intro;
