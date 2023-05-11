import "./About.scss";
import { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aboutElementScroll = () => {
      const { top } = aboutRef.current!.getBoundingClientRect();

      if (top < window.innerHeight + 200) {
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
      <h2>My Profile</h2>
      <div className="About-Grid">
        <div className="About-text">
          <p>꾸준하고 성실하게! 개발이 즐거운 박완웅 입니다.</p>
        </div>
        <div className="About-photo">
          <img src="/images/myicon.png" alt="내 이미지" />
        </div>
        <div className="About-info">
          <ul>
            <li>
              <a href="mailTo:ungmoring9@gmail.com">
                <img
                  src="./images/Gmail.png"
                  alt="email"
                  width="30"
                  height="20"
                />
                <span>ungmoring9@gmail.com</span>
              </a>
            </li>
            <li>
              <img src="/images/phone.png" alt="Gmail" width="30" height="30" />{" "}
              <span>010-7186-1955</span>
            </li>
            <li>
              <a href="https://github.com/UngMon" title="Github">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/ungmon/invite/084baf2b10d61d13cef905daa5ba2d328ebb2402"
                title="Notion"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326l-2.196-1.587c-.42-.326-.981-.7-2.055-.607l-12.795.934c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167v-13.811c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.328s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233v-9.193l-1.165-.094c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zm-17.653-6.998 13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96v-14.558c0-.839.374-1.54 1.447-1.632z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;


{/* <p>
새로운 기술을 배우는 것도 즐겁지만, <br /> 사용자에게 유의미한
서비스를 제공하는 데 가장 큰 즐거움을 느낍니다.
</p> */}