import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: '채팅 소켓 프로그래밍 구현',
    description: ['FastAPI를 사용하여 1:1 채팅 · 1:N 채팅 구현', '채팅창 텍스트 전달 및 이미지 전송 기능 개발'],
  },
  {
    summary: '로그인 및 회원 기능 구현',
    description: ['로그인 · 회원가입 기능 개발', '친구 목록 및 채팅 목록 Fetch · Display 기능 개발'],
  },
]

export const details: ProjectDetailType = {
  title: 'KakaoTalk Clone Coding',
  duration: '2023. 10 ~ 2023. 11',
  github: 'https://github.com/jihostudy/WebProgammingLab',
  background: `카카오톡 클론코딩을 웹 프로그래밍실습 수업에서 진행하였습니다. <br/>
  UI · UX는 차순위로, 기능 구현에 초점을 맞춘 과제이자 프로젝트입니다. 풀스택을 사용하여 프론트엔드와 서버를 직접 구현하였으며, 채팅 서버 개발을 위해 소켓 프로그래밍도 구현하는 뜻 깊은 경험이었습니다.`,
  contribution: contribution,
  report: `사용할 수 있던 프로젝트 스택의 한계로 인해, React를 사용하지 못했던 프로젝트입니다. 다만, JQuery를 사용해보면서 과거부터 현재까지 어떠한 흐름으로 개발이 진화되어 왔는지와, React를 어떻게 사용해야 할지에 대한 인사이트를 얻을 수 있었던 반면교사 역할의 프로젝트였습니다.
  <br/><br/>
  서버와 DB를 직접 구축하여 풀스택으로 프로젝트를 진행해본 점은 클라이언트와 서버가 통신하는 방법에 대한 이해를 할 수 있는 경험이었습니다.
  `,

  stacks: 'HTML, CSS, Jquery, FastAPI, SQLite',
  members: {
    frontend: '김지호',
    backend: '김지호',
  },
}
