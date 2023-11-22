import React from "react";
import "Project.scss";

const Festival = () => {
  return (
    <main className="project-box">
      <h2>Your Calender</h2>
      <h3>FrontEnd, Backend, Designer</h3>
      <figure className="project-slide"></figure>
      <section>
        <p>기술 스택: React, Router, Redux, TypeScript, Firebase</p>
        <p>
          제작 동기 : 공공데이터 API를 이용해서 재밌는 프로젝트를 만들고
          싶었습니다. 당시에 코로나 마스크 해제가 되면서 여기저기 놀러가고
          싶은데 한국의 관광지를 쉽게 찾알 볼 수 있는 웹 서비스를 만들어보고
          싶은 마음에서 제작한 프로젝트입니다. 물론 대한민국 구석구석이라는
          대표적인 관광 사이트가 존재하지만 저의 입장에서는 불문명한 UI로 사용자
          경험성이 좋지 않았습니다. 이를 개선하고자 좀 더 명확하고 단순한 UI로
          만들어 접근성이 좋은 웹 사이트를 만들었습니다.
        </p>
        <br />
        <p>소요 기간 : 2023.03 ~ 진행 중</p>
        <br />
        <p>
          한국관광공사 API를 이용하여 사용자는 지역, 축제, 시설등 다양한
          데이터를 이용할 수 있습니다. 해당 지역의 좌표값으로 카카오톡 지도를
          이용하여 해당 지역의 약도를 볼 수 있습니다. 또한 축제에 갔다온
          사람들의 리뷰를 남길 수 있도록 댓글 기능과 좋아용 기능을 추가하여
          사용자들끼리 정보를 공유할 수 있습니다. 댓글과 좋아요는 Firebase
          FireStore DB에 저장됩니다. 사용자는 키워드를 검색하여 관련된 문화
          시설, 축제, 행사를 찾을 수 있는 검색 기능을 만들었습니다. 마지막으로
          소셜 로그인 선택지를 추가하여 카카오톡, 네이버 로그인 기능을
          추가했습니다. 카카오톡과 네이버 로그인은 Firebase에서 제공되지 않은
          인증으로 Firebase Functions를 통해 백엔드 서버 없이 간단한 코드로
          사용자들의 인증토큰을 받아 로그인을 진행할 수 있게 했습니다.
        </p>
      </section>
    </main>
  );
};

export default Festival;
