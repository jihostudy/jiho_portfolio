import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '메인 로직 (여행 계획 생성) 전과정 개발',
    description: [
      'Zustand를 활용하여 여행 계획 전역 데이터 관리 · 라우트간 공유 프로세스 개발',
      'KakaoMap · KakaoMobility API를 활용, 여행 경로 표시 · 경로간 이동 시간 표시하여 계획 플랫폼 핵심기능 제공',
      'Tanstack Query를 사용하여 서버 데이터 캐싱 · Key 관리',
      '백엔드팀과 소통을 통해 Entity Type(여행 계획, 여행지, 유저, 댓글) 구체화',
    ],
  },
  {
    summary: 'DX 개선을 위한 노력',
    description: [
      'shadcn 기반의 재사용성에 중심을 둔 공용 컴포넌트 (Modal · Toast · Filter) 개발',
      'Framer-Motion Wrapper를 활용한 애니메이션 코드를 메인 로직과 분리하여 코드 복잡도 완화',
      'Modal · Filter · Toggle 등 커스텀 훅 제작을 통한 코드 간소화',
    ],
  },
  {
    summary: '도메인 구매 · 등록, UI/UX 디자인',
    description: [
      '가비아 · Vercel에 각각 도메인 구매 · 배포',
      '디자이너 공백을 채우기 위한 Figma 웹 디자인 진행 (1인)',
    ],
  },
]

export const details: ProjectDetailType = {
  title: '여행 계획 생성 플랫폼 TraBook',
  duration: '2024. 07 ~ 2024. 10',
  url: 'https://www.trabook.site/',
  github: 'https://github.com/Tra-Book/Frontend',
  background: `우리는 여행을 계획할 때 많은 정보를 서핑한다.<br /> 네이버·카카오·구글 지도, 블로그, 유튜브 등 다양한 미디어의 정보를 종합하여 방문할 장소를 판단한다.
  방문했던 지인의 정보를 참고하여 여행 계획을 세우기도 한다.<br /> 수 많은 플랫폼을 서핑하며 생기는 복잡함은 여행 계획 수립을 망설이게되는 이유중 하나이다.<br /> 따라서,우리는 여행 계획만을 위해 플랫폼을 만들어서 여행자들이 서핑하지 않아도 되며, 
  본인의 특별한 여행게획을 다른 여행자들에게 공유할 수 있는 서비스를 제공하고자 하였다.`,
  contribution: contribution,
  report: `해당 프로젝트는 사실 2번의 기간으로 나뉘어 장기간 진행되었다. 초기 프로젝트는 프로토타입 형태로 제작되었으나 2개월간 진행되었다가 중단되었다.<br />
    프로젝트가 중단딘 가장 큰 이유는 여행지 데이터의 확보 실패가 있지만, 워퍼풀 방식의 기획 단계에서 너무나 많은 기획으로 인한 의지 저하도 역할을 하였다.<br/><br/>
    하지만, 관공데이터 활용 공모전에 참가하면서 여행지 데이터를 확립하였고, 이전 프로젝트를 교훈삼아 새로운 시작을 하였다.<br /><br />
    팀장으로 활동하며 팀원 모집부터 프로젝트 배포까지 전 과정에 참여하였다. 
    특히, 개인적인 사정으로 함께하지 못한 디자이너분의 빈자리를 채우기 위해 피그마로 UI/UX도 담당하였다.
    처음에는 개발자가 디자인 작업을 하는 것에 시간낭비라고 생각했는데, 모두 피가되고 살이되었다고 생각한다.<br />
    <br />
    프로젝트 중심이 되는 여행 계획 세우기, 내 여행 페이지 등을 제작하였다. 해당 프로젝트는 상당히 많은 API의 도움을 받았다.
    카카오 지도API로 여행 경로 표시, 카카오 모빌리티API로 경로간 거리 표시, next-auth로 소셜 및 이메일 로그인을 구현하였다.
    이렇게 많은 API를 학습하면서 적용해보는 경험은 러닝커브를 낮추는 계기가 되었다고 생각한다. 
    `,
  stacks: 'Typescript, Next.js, TailwindCSS, Zustand, next-auth, Tanstack-query, Husky, Framer-Motion',
  members: {
    frontend: '김지호(Team Leader), 신진건',
    backend: '김도현, 안윤지, 한용준, 황수영',
    design: '김지호',
  },
}
