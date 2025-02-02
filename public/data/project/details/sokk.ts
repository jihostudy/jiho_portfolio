import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '좌석 배정 · 자동반납 시스템 구현',
    description: [
      'QR코드 인식을 통해 라우팅간 데이터 전달하여 간편 배정 시스템 구축',
      'PWA 기반의 아키텍쳐를 통해 웹 · 앱 프로세스 구축',
      '설치 권유 로직 구현 및 예비 이용자의 피드백을 반영한 설치 권유 시기 조절',
      'zustand를 활용한 설치 미권유 유저 구분 · local-storage 저장',
      'FCM을 활용하여 좌석 자동 반납 백그라운드 알림을 제공하여 유저 경험 향상',
    ],
  },
  {
    summary: '스터디룸 예약 페이지',
    description: ['Tanstack Query를 활용하여 일자별 스터디룸 현황 조회 · 예약 시스템 구현'],
  },
  {
    summary: 'Auth 로직 구축(로그인 · 회원가입)',
    description: ['회원가입 시도 유저의 재학증명서를 AI서버에 전달하여 증명서 위변조 여부 · 내용 일치 여부 확인'],
  },
  {
    summary: '위클리 스크럼 스프린트 개발론 도입',
    description: ['스프린트 우선순위 지정, 매주 스프린트 회의 진행'],
  },
]

export const details: ProjectDetailType = {
  title: 'SoKK 라운지 관리 시스템',
  duration: '2024. 10 ~ 2024. 12',
  url: 'https://sokk-skku.vercel.app/',
  github: 'https://github.com/skkuswEng/Frontend',
  background: `성균관대학교 SW 라운지의 탄생은 1년이 되지 않았습니다. <br /> 해당 라운지의 문제는 좌석 및 예약 시스템 혹은 관리자가 없다는 점이었습니다. 좌석에 짐을 두고 사라지는 학생, 스터디룸을 독점 사용하는 무리, 주변 학우들을 존중하지 않고 시끄럽게 떠드는 학생 등 다양합니다.
  <br /> 따라서, 실명제 라운지 좌석 배정 및 스터디룸 예약 시스템을 제작하고자 하였습니다. 특히, 좌석 장시간 이탈자를 확인 · 통제하기 위해 좌석 실시간 화면을 토대로 좌석 이탈자를 판단하는 AI 모델을 도입하였습니다.`,
  contribution: contribution,
  report: `SoKK 프로젝트는 바쁜 학업 중에도 빠르게 프로토타입을 생성하고 최종 결과물을 만들어야 했다.<br />
  그 과정에서, 적극적인 팀원들 덕에 팀장의 역할인 팀원 및 업무 프로세스 관리보다 제품 개발에만 집중할 수 있었다.<br/>
  새롭게 도입해본 스크럼 방식은 매우 흥미로웠는데, 각자의 분야에 대해 디벨롭할 수 있는 부분들을 스크럼마다 팀원들에게 설명하고 이해시키는 과정이 초기 스타트업에서 작업하는 기분이었다.<br /><br />
  또한, AI활용 서비스를 제작해보았다는 점이 가장 뜻 깊은 경험이었다.<br/> 이전까지는 Python으로 직접 CNN 모델을 구현 · 학습하는 방식으로 AI를 사용한다고 생각했는데, 초기부터 학습하는 것이 아닌 Yolo 모델을 사용하는 편리한 방법이 있다는 점이 놀라웠다.`,
  stacks: 'Typescript, Next.js, TailwindCSS, Zustand, Tanstack-query, next-pwa',
  members: {
    frontend: '김지호(Team Leader)',
    backend: '안태현, 홍혁진',
    AI: '김태양, 김성준',
    design: '김지호',
  },
}
