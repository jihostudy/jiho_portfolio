import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '사진 촬영 로직 구현',
    description: [
      '외부 라이브러리인 react-webcam을 활용하여 카메라에 접근 · 촬영하는 로직 구현',
      '촬영된 사진을 Firebase에 업로드하고, 이를 Infinite Scroll 형식으로 Fetching 하는 로직 구현',
    ],
  },
  {
    summary: '다양한 애니메이션 구현',
    description: ['다크 모드 전환버튼 애니메이션 구현', '사진 촬영 및 타이머 구현'],
  },
]

export const details: ProjectDetailType = {
  title: 'Comit Photo Booth Gallery',
  duration: '2023. 08 ~ 2023. 09',
  url: 'https://comit-gallery.vercel.app/',
  github: 'https://comit-gallery.vercel.app/',
  background: `학기 초 진행되는 동아리 홍보 기간동안 홍보부스에서 진행할 수 있는 이벤트성 웹 페이지를 제작하고자 하였습니다. 동아리 홍보부스를 방문하는 학생들이 방문 기록을 사진을 통해 남겨주면, 포토 부스 형태로 저장되는 갤러리 형식의 프로젝트입니다.
  이후, 축제 야간 주점에서 이벤트성 페이지로 활용되어 주점을 방문하는 학생들에게도 즐거운 사진을 찍어주면 서비스를 제공하는 용도로 사용되었습니다.`,
  contribution: contribution,
  report: `교내 개발 동아리인 COMIT의 개발팀원으로 활동하며 진행한 첫 번째 프로젝트입니다. <br />
  당시 개발 초창기로, React의 초석만 알고 있는 상태로 프로젝트를 진행하였다 보니 무엇을 만드는지, 어떻게 만들어야 하는지에 대한 충분한 고민없이 진행되었다고 생각합니다.   
  또한 ,학생들의 초상권에 대한 고민을 하지 못했다는 것과 실제 사용해보았을 때 이를 굉장히 부담스러워한다는 점이었습니다. 촬영된 사진에 대한 저장 기간 명시해드리고, 촬영된 사진을 개개인에게 전달해주는 과정이 포함되었으면 더 풍부한 이벤트가 되지 않았을까 싶습니다.
  `,

  stacks: 'React, Firebase, react-webcam, react-responsive',
  members: {
    frontend: '김지호, 정정환(Team Leader)',
    design: '홍민재',
  },
}
