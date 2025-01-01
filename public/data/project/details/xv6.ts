import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: 'System Call 생성하기',
    description: ['Process에 nice-value(Process 우선순위) 추가', 'setNice(), getNice(), ps() System Call 개발'],
  },
  {
    summary: 'CPU Scheduling 구현',
    description: [
      'RR Scheduling 기법을 nice-value에 의거한 CFS(Completely Fair Scheduling) 기법으로 전환',
      '1tick 마다 Scheduling하여, vruntime recalculate & Priority Reorder',
      'vruntime integer Overflow Handling 구현',
    ],
  },
  {
    summary: 'Virtual Memory Management 기법 구현',
    description: [
      '파일을 가상메모리 기법을 활용하여 Physical Memory에 저장하도록 구현',
      'Page Table을 구현하여 paging 대응',
      'Page Fault Handling 로직을 구현하여, 가상메모리 기법의 정확도 향상',
      'freemem() 함수로 불필요한 메모리 초기화 기능 구현',
    ],
  },
]

export const details: ProjectDetailType = {
  title: 'xv6 OS Modification',
  duration: '2023. 08 ~ 2023. 11',
  github: 'https://github.com/jihostudy/xv6-SKKU',
  background: `Operating System (운영체제) 수업에서 학습한 지식을 토대로 MIT에서 제공하는 학습용 운영체제인 xv6를 수정하는 과제입니다.`,
  contribution: contribution,
  report: `운영체제의 System-Call · Process Scheduling · Virtual Memory Management를 이론에 그치지 않고, 직접 구현까지 해볼 수 있었던 매우 소중한 경험이었습니다. <br />
  처음에는 너무나도 거대하고 복잡했던 코드 구조를 이해하기가 어려웠는데, 함께 스터디를 진행했던 부원들과 매주 모여 이해하려고 노력하다 보니 어느 순간 xv6의 구조에 대해 간략하게 나마 이해할 수 있었습니다.
  
  <br />
  과제를 성공적으로 완수했다는 점에 의의도 있지만, 스터디원들과 함께 과제를 수행하며 극복해나간 경험이 저에게 가장 의미있는 경험이었습니다.`,

  stacks: 'C',
  members: {
    frontend: '김지호',
  },
}
