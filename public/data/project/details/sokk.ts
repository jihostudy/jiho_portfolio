import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '좌석 배정 · 자동반납 시스템 구현',
    description: [
      'QR코드 인식을 통한 간편 좌석 배정 구현',
      'PWA로 아키텍쳐 설계 및 구현하여 네이티브 기능 제공',
      'FCM (Firebase Cloud Messaging)을 통해 자동 반납 알림 백그라운드 제공',
    ],
  },
  {
    summary: '스터디룸 예약 · Auth 시스템 구현',
    description: [
      '일자별 스터디룸 현황 조회 · 스터디룸 예약 시스템 구현',
      '회원가입 시도 유저의 재학증명서를 AI서버에 전달하여 증명서 위변조 · 내용 일치 확인',
    ],
  },
  {
    summary: '프로젝트 리드로 활동',
    description: [
      'Proposal · 요구사항 명세서 · Final Presentation 담당',
      '스크럼 스프린트 형식의 개발 환경 시스템 구축',
    ],
  },
  {
    summary: '페이지 제작 및 디자인',
    description: ['전 페이지 UI/UX 디자인(Figma)', '메인 · Auth(로그인 등) · 좌석 배정 · 스터디룸 예약 페이지 개발'],
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
  report: `SoKK 프로젝트는 팀장으로 활동하며 바쁜 학업 중에도 빠르게 프로토타입을 생성하고 최종 결과물을 만드는 경험을 하였다.<br />
  그 과정에서, 이전의 프로젝트들보다 적극적인 팀원들로 인해 빠르고 정확하게 개발에만 집중할 수 있었다. 각자가 최대의 효율을 발휘할 수 있는 분야에 대한 충분한 연구를 진행해서 스크럼마다 공유해서 팀원들에게 이해시키는 과정이 흥미로웠다.<br />
  특히, AI를 직접 구축하지는 않았지만, 이를 활용해서 서비스를 제작해보았다는 점이 가장 뜻 깊은 경험이었다. 이전까지는 Python으로 직접 CNN 모델을 구현 · 학습하는 방식으로 AI를 사용한다고 생각했는데, Yolo 모델을 사용하며 더 편리한 방법이 있다는 것도 깨달았다.`,
  stacks: 'Typescript, Next.js, TailwindCSS, Zustand, Tanstack-query',
  members: {
    frontend: '김지호(Team Leader)',
    backend: '안태현, 홍혁진',
    AI: '김태양, 김성준',
    design: '김지호',
  },
}
