import "./About.scss";
import { useEffect, useRef } from "react";
import AboutInfo from "./AboutInfo";
import AboutIntroduce from "./AboutIntroduce";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aboutElementScroll = () => {
      const { top } = aboutRef.current!.getBoundingClientRect();

      if (top < window.innerHeight + 600) {
        aboutRef.current!.classList.add("aboutAnimation");
      }
    };
    window.addEventListener("scroll", aboutElementScroll);

    return () => {
      window.removeEventListener("scroll", aboutElementScroll);
    };
  });

  return (
    <div className="About-box" ref={aboutRef}>
      <h2>About Me</h2>
      <div className="About-Grid">
        {/* <div className="About-text">
          <p>꾸준하고 성실하게! </p>
        </div> */}
        <div className="About-photo">
          <img src="/images/myicon.png" alt="내 이미지" />
        </div>
        <AboutIntroduce/>
        <AboutInfo/>
      </div>
    </div>
  );
};

export default About;
