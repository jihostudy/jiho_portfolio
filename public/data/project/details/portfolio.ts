import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary:
      'Custom Hook npm 패키지 <a style="color: blue;" href="https://www.npmjs.com/package/usehooks-jihostudy" target="_blank">usehooks-jihostudy</a> 개발 · 적용',
    description: [
      '기존 라이브러리의 단점을 보완한 npm 라이브러리 개발 및 적용',
      'useOutsideClick 모달의 존재 여부를 설정할 수 있는 훅',
      'useEscClose Escape 버튼을 통한 Unmount 훅',
      'esbuild 기반의 번들링을 통한 ES6 · CJS 지원',
      '400 다운로드 유저 확보',
    ],
  },
  {
    summary: '웹 사이트 최적화 진행',
    description: [
      'nextjs Image 컴포넌트 preload · srcset(sizes) 설정을 통해 LCP 요소 최적화',
      '렌더링 시간 4.33s 524ms 85.57% 감축',
      'subset 폰트 제공을 통한 FOUT 현상 완화',
      '최종 Lighthouse 결과 [83,100,100,100]까지 성능 향상',
    ],
  },
]

export const details: ProjectDetailType = {
  title: '개인 포토폴리오 사이트',
  duration: '2024. 12 ~ 진행 중',
  url: 'https://www.jihostudy.site/',
  github: 'https://github.com/jihostudy/jiho_portfolio',
  background: `프론트엔드 개발자는 본인 PR을 직접 포토폴리오 사이트를 만들어서 하는 해야한다고 생각했다.<br /> 나 또한 포토폴리오를 직접 만들어 보려고 한다.`,
  contribution: contribution,
  report: `개인 포토폴리오 사이트로 디자인 감각이 없어 많은 레퍼런스를 참고하여 만들어졌다.<br/>
  해당 프로젝트의 가장 흥미로운 사항은 직접 NPM 패키지를 제작해보았다는 점이다. (계속 만들어볼 생각이다)<br/>
  비록 다운로드 유저가 적고, 매우 흥미로운 주제의 패키지는 아닐지라도 오픈소스에 발을 들이고 개발자 생태계에 기여했다는 점에 매우 뿌듯하다.<br/> 
  <br />
  또한, 최적화에 대한 공부를 하면서 놓치고 있었던 내용들 (React useMemo 훅 등)에 대한 학습을 통해 최적황의 중요성에 대해 한번더 깨닫게 되었다.`,
  stacks: 'Typescript, Next.js, TailwindCSS, framer-motion, usehooks-jihostudy',
  members: {
    frontend: '김지호',
  },
}
