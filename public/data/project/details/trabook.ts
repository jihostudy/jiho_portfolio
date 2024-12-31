import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '여행 계획 수립을 위한 모든 과정 제작',
    description: [
      '무한스크롤을 활용한 여행지 데이터 페칭',
      '전체 계획 전역 변수 저장 및 업데이트',
      '선택 경로 지도 표시 및 경로간 거리 표시',
      '여행지 좋아요 · 스크랩 기능',
    ],
  },
  {
    summary: '공용 컴포넌트 제작',
    description: [
      'Framer-Motion Wrapper를 활용한 SRR 최적화 및 코드 간소화',
      'Modal · Toast · Filter · Dropdown Custom Hook 제작하여 DX 제공',
      '프로젝트의 중심 Entity(여행 계획, 여행지, 유저, 댓글) Type 구체화',
    ],
  },
  {
    summary: '페이지 제작 및 디자인',
    description: ['전 페이지 UI/UX 디자인(Figma)', '메인 · 내 여행 · 여행 계획 세우기 · 계획 디테일 페이지 개발'],
  },
]

export const details: ProjectDetailType = {
  title: 'TraBook 여행 플래너',
  duration: '2024. 10 ~ 2024. 12',
  url: 'https://www.trabook.site/',
  github: 'https://github.com/Tra-Book/Frontend',
  background: `우리는 여행을 계획할 때 많은 정보를 서핑한다.<br /> 네이버 지도, 카카오 지도, 구글 지도, 블로그, 유튜브 등 다양한 미디어의 정보를 종합하여 방문할 장소를 판단한다.
  방문했던 지인의 정보를 참고하여 여행 계획을 세우기도 한다.<br /> 수 많은 플랫폼을 서핑하며 생기는 복잡함은 여행 계획 수립을 망설이게되는 이유중 하나이다.<br /> 따라서,우리는 여행 계획만을 위해 플랫폼을 만들어서 여행자들이 서핑하지 않아도 되며, 
  특별했던 여행게획을 여행자들에게 공유할 수 있는 서비스를 제공하고자 한다.`,
  contribution: contribution,
  report: `해당 프로젝트 기간은 사실 2회에 나뉘어 진행되었다. 초기 프로젝트는 프로토타입 형태로 제작되었으나, 제작하다 보니 여행지 데이터가 부족하다는 것을 깨닫고 중단되었다.<br />
    이후, 관공데이터 활용 공모전에 참가하여 공공데이터로 여행지 데이터를 확립하여 재시작되었다.<br /><br />
    팀장으로 활동하며 팀원 모집부터 프로젝트 배포까지 전 과정을 경험하였다. 특히, 개인적인 사정으로 함께하지 못한 디자이너분의 빈자리를 채우기 위해 피그마를 통해 웹 사이트 전체의 UI/UX도 담당하였다. 개발자가 디자인 작업을 하는 것에 시간낭비라고 생각했는데, 모두 피가되고 살이되었다고 생각한다.<br />
    <br />
    프로젝트 중심이 되는 여행 계획 세우기, 내 여행 페이지 등을 제작하였다. 해당 프로젝트는 짧은 시간에 제작해야하는 시간적 제약 때문에 상당히 많은 API의 도움을 받았다.
    카카오 지도API로 여행 경로 표시, 카카오 모빌리티API로 경로간 거리 표시, next-auth로 소셜 및 이메일 로그인을 구현하였다.
    이렇게 많은 API를 학습하면서 적용해보는 경험은 러닝커브를 낮추는 원동력이 되었다고 생각한다. 
    `,
  stacks: 'Typescript, Next.js, TailwindCSS, Zustand, next-auth, Tanstack-query, Husky, Framer-Motion',
  members: {
    frontend: '김지호(Team Leader), 신진건',
    backend: '김도현, 안윤지, 한용준, 황수영',
  },
}
