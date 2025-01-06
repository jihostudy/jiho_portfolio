import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '작업 진행중입니다.',
    description: ['On-Progress'],
  },
]

export const details: ProjectDetailType = {
  title: 'jihostudy 포토폴리오 사이트',
  duration: '2024. 12 ~ 진행 중',
  url: 'https://www.jihostudy.site/',
  github: 'https://github.com/jihostudy/jiho_portfolio',
  background: `저를 소개합니다!`,
  contribution: contribution,
  report: `On Progress... Updated after finished`,
  stacks: 'Typescript, Next.js, TailwindCSS, Framer-Motion usehooks-ts',
  members: {
    frontend: '김지호',
  },
}
