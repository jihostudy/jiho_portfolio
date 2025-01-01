import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '전 페이지 애니메이션 및 게임 로직 담당',
    description: ['캐릭터 진화 애니메이션 구현', '순차적 게임 애니메이션 및 타이포 애니메이션 구현'],
  },
  {
    summary: '행사 참여로 게임 홍보 및 굿즈 판매',
    description: [
      '대학로 행사에 참여하여 게임 홍보 및 사용자들의 참여 도움',
      '캐릭터 굿즈 판매를 통해 30만원 상당의 수익 창출',
    ],
  },
]

export const details: ProjectDetailType = {
  title: 'Catch My Mind',
  duration: '2023. 07 ~ 2023. 08',
  url: 'https://catch-project.vercel.app/',
  github: 'https://github.com/skku-comit/catch',
  background: `성균관대학교 무용학과 학회 MOD X 개발 중앙동아리 COMIT의 협업 프로젝트입니다. <br />
  해당 프로젝트는 혜화역 차 없는 거리의 행사에 사용되었으며, 학회 전시 프로젝트에도 사용되었습니다. <br />
  게임 이용자의 디자인 센스를 시험하는 퀴즈 형식의 게임으로, 게임이 진행됨에 따라 맞춘 문항의 개수에 근거하여 캐릭터가 진화하는 애니메이션이 풍부한 프로젝트입니다.
  많은 어린이 사용자들이 좋아해주었던 게임이며, 학회에서 극찬을 받아 추후 콩쿨 접수 사이트의 의뢰까지 이어진 프로젝트입니다.
  또한, 굿즈 판매를 통해 30만원의 수익을 창출했던 프로젝트입니다.
  `,
  contribution: contribution,
  report: `해당 프로젝트는 프론트엔드 개발자로서의 첫 프로젝트이자, 웹 디자이너와의 첫 협업 프로젝트입니다.<br />
  React만을 사용하여 개발하였으며, 기본기를 학습하는 과정으로 제작된 프로젝트입니다. 훌륭한 아트와, 다양한 애니메이션이 활용된 프로젝트로 Framer-Motion에 완전히 친해지는 계기가된 경험입니다.
  당시에는 IPad-Pro 기기만을 사용하여 반응형 구현 없이 개발되었지만, 추후 리펙토링을 통해 전체 기기에서 사용할 수 있도록 구현할 예정입니다.
  
  `,

  stacks: 'React, Framer-motion',
  members: {
    frontend: '김지호',
    design: '이동규(Team Leader), 박준호, 홍민재',
  },
}
