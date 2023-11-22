import "./Project.scss";

const YourCalender = () => {
  return (
    <main className={`project-box on`}>
      <h2>Your Calender</h2>
      <h3>FrontEnd, Backend, Designer</h3>
      <figure className="project-slide"></figure>
      <section>
        <p>기술 스택: React, Router, Redux, TypeScript, Firebase</p>
        <p>
          제작 동기 : To-Do-List를 만들고 난 후, 개인 일정 관리 Web
          Application을 직접 만들어 보고싶은 마음에서 시작한 프로젝트 입니다.
          물론 구글 캘린더, 네이버 캘린더 등과 같이 이미 만들어진 캘린더에 비해
          기능이 많지 않지만, 라이브러리 없이 직접 기능을 구현하고 싶은 욕심으로
          성실히 만들었습니다.
        </p>
        <br />
        <p>소요 기간 : 2022.09 ~ 진행 중</p>
        <br />
        <p>
          사용자의 일정을 저장할 수 있게 Friebase RealTime DB를 사용했습니다.
          또한 Firebase Auth2.0을 이용하여 사용자 마다 일정을 확인할 수 있도록
          로그인 기능을 구현했습니다. 전역 상태관리는 Redux를 사용했습니다.
          SPA를 만들기 위해 Router를 사용했습니다.
        </p>
      </section>
    </main>
  );
};

export default YourCalender;
