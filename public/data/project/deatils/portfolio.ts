import { LanguageSkills } from '@public/data/skills'
import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '한 줄 요약',
    description: [
      '어떤 것을 만들었는지 에대 한 한 줄 요약',
      '어떤 것을 만들었는지 에대 한 한 줄 요약',
      '어떤 것을 만들었는지 에대 한 한 줄 요약',
    ],
  },
  {
    summary: '두 줄 요약',
    description: [
      '어떤 것을 만들었는지 에대 한 한 줄 요약',
      '어떤 것을 만들었는지 에대 한 한 줄 요약',
      '어떤 것을 만들었는지 에대 한 한 줄 요약',
    ],
  },
]

export const details: ProjectDetailType = {
  title: 'TraBook 여행 플래너',
  duration: '2024. 10 ~ 2024. 12',
  url: 'https://www.trabook.site/',
  github: 'https://github.com/Tra-Book/Frontend',
  background:
    '우리는 여행을 계획할 때 많은 정보를 서핑한다. 네이버 지도, 카카오 지도, 구글 지도, 블로그, 유튜브 등 다양한 미디어의 정보를 종합하여 방문할 장소를 판단한다. 또한, 방문했던 지인의 정보를 참고하여 여행 계획을 세운다. 하지만, 많은 플랫폼을 서핑하며 생기는 복잡함은 여행 계획을 세우기를 망설이게되는 이유중 하나이다. 따라서, 우리는 여행 계획 수립을 위해 플랫폼을 서핑하지 않아도 되며, 여행자들이 여행로그를 공유할 수 있는 서비스를 제공하고자 한다.',
  contribution: contribution,
  report:
    '우리는 여행을 계획할 때 많은 정보를 서핑한다. 네이버 지도, 카카오 지도, 구글 지도, 블로그, 유튜브 등 다양한 미디어의 정보를 종합하여 방문할 장소를 판단한다. 또한, 방문했던 지인의 정보를 참고하여 여행 계획을 세운다. 하지만, 많은 플랫폼을 서핑하며 생기는 복잡함은 여행 계획을 세우기를 망설이게되는 이유중 하나이다. 따라서, 우리는 여행 계획 수립을 위해 플랫폼을 서핑하지 않아도 되며, 여행자들이 여행로그를 공유할 수 있는 서비스를 제공하고자 한다.',
  stacks: 'Typescript, Next.js, TailwindCSS, Zustand, next-auth, Tanstack-query, Husky, Framer-Motion',
  members: {
    frontend: '김지호(Team Leader), 신진건',
    backend: '김도현, 안윤지, 한용준, 황수영',
  },
}
