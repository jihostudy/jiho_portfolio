import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '학과 공지사항 페이지 개발',
    description: [
      'react-quill을 활용한 공지사항 작성 및 Firebase로 공지사항 관리 기능 개발',
      'pagination 형식으로 공지사항 개시',
      'PDF 요강을 페이지에 전시하는 Guideline 페이지 개발',
    ],
  },
]

export const details: ProjectDetailType = {
  title: 'SKKU Concours',
  duration: '2024. 03 ~ 2024. 05',
  url: 'https://www.skkudanceconcours.kr/',
  github: 'https://github.com/skkudanceconcours/skkudanceconcours',
  background: `이전 무용학과 디자인 학회와의 협업 당시 맺어진 인연이 이어져, 성균관대학교 무용학과 콩쿨 접수 및 공지사항 사이트를 개발하게 되었습니다.<br /> 
  기존 접수는 구글 독스를 통해 진행되었는데, 구글 독스는 학부모님들에게 익숙하지 않았으며, 공지사항을 전달하기에는 한계가 있었습니다. <br />
  외주 프로젝트로 무용학과측과의 협업으로 진행되었으며, 콩쿨 접수를 도와드리며 접수 현황을 Excel로 확인할 수 있도록 도와드렸습니다.
  <br /> 또한, 공지사항을 전달할 수 있는 페이지를 제작하여 제공하였습니다.`,
  contribution: contribution,
  report: `첫 외주 프로젝트인 만큼 설레기도 하고, 실력에 대한 두려움이 많았던 프로젝트입니다. 백엔드 서버 구축 없이, Firebase를 활용해서 친한 프론트엔드 친구와 2인 개발로 진행되었다 보니, 생각보다 빠르게 제작할 수 있었습니다. 많은 사용자는 아니지만, 193명의 학생들이 사이트를 통해 접수했으며, 19개의 공지사항을 개시하였습니다.
  
  <br /> 첫번째 외부 협력 프로젝트였던 만큼 아쉬움도 많이 남아있습니다. ADMIN 기능을 구현하였지만, 보안 및 UX에 허술한 부분들이 많았다는 점과 공지사항 알림과 같은 더 풍부한 기능을 제공해드리고 싶었지만, 외주 프로젝트의 한계는 분명히 존재했습니다.
  <br /><br /> 해당 프로젝트를 계기로, 외주 프로젝트보다는 자체 서비스를 제작할 수 있는 일과 직업을 가지고 싶다고 마음먹었습니다.
  `,

  stacks: 'Typescript, Next.js, TailwindCSS, Zustand, Firebase',
  members: {
    frontend: '김지호, 정정환(Team Leader)',
  },
}
