import { useEffect, useState } from "react";
import "./Intro.scss";

const Intro = () => {
  const [scale, setScale] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(0.15);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  useEffect(() => {
    console.log(window.scrollY);
    const scrollHandler = () => {
      let num = 1;
      let opa = 0.15;
      if (window.scrollY > 17) num = (window.scrollY / 100) * 10;
      if (window.scrollY > 1800) num = (window.scrollY / 100) * 30;
      if (num > 190) num = 190;
      opa += num / 100;

      setScale(num);
      setOpacity(opa > 1 ? 1 : opa);
      setX(-window.scrollY / 2.5)
      setY(-window.scrollY / 1.2);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return (
    <div className="Intro-box">
      <div>
        <h2
          style={{
            transform: `matrix(${window.scrollY === 0 ? 1 : scale}, 0, 0, ${
              window.scrollY === 0 ? 1 : scale
            }, ${x}, ${y})`,
            opacity: `${opacity}`,
            position: `${scale >= 172 ? "unset" : "fixed"}`,
          }}
        >
          <span className={`${window.scrollY < 17 ? "Hello" : ""}`}>
            Hello World!
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Intro;
//        /* <span className="poly">웅이의 포트폴리오에</span>
//           <span className="poly">오신 걸 환영합니다!</span> */
