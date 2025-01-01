import { ContributionType, ProjectDetailType } from '.'

const contribution: Array<ContributionType> = [
  {
    summary: 'IPv4 & Ipv6 Packet Stripping(분석)',
    description: ['Wireshark를 통해 패킷 캡쳐', 'C언어로 패킷 분석 및 각 Field 역할 탐구'],
  },
  {
    summary: 'Socket Programming (DNS)',
    description: [
      'Low-level 수준의 Socket Programming 구현',
      'DNS에 IP주소를 전달 후 Domain-Name 수신하여 이를 활용하여 통신하도록 구현',
    ],
  },
]

export const details: ProjectDetailType = {
  title: 'IP Packet Analyze & Socket Programming',
  duration: '2024. 03 ~ 2024. 07',
  github: 'https://github.com/jihostudy/SKKU-Network',
  background: `네트워크개론 수업에서 진행했던 프로젝트들입니다. <br/>
  Wireshark(패킷 분석 툴)을 통해 패킷을 캡쳐하여, 해당 패킷을 불러와 분석하는 작업을 수행하였습니다. 또한, 소켓 프로그래밍을 Low-Level 수준으로 구현하였으며, DNS에 ip를 통해 Domain Name을 받아오는 로직또한 구현하였습니다.`,
  contribution: contribution,
  report: `개발자로서 항상 궁금했던 내용들을 학습하고 개발해본 매우매우 뜻 깊은 경험이었습니다.<br/>
  이론에서 그치지 않고, 컴퓨터가 라우터를 통해 데이터를 교환하는 Protocol들을 학습하고, 이를 활용해서 직접 패킷을 분석하는 경험은 개발자로서 꼭 한번쯤은 해보고 싶었던 작업이었습니다.<br/>
  프론트엔드에서 뗄 수 없는 DNS에 대한 이해와, HTTP를 통해 데이터가 전달되는 이면의 과정의 학습과정은 정말 재미있었습니다.
  `,

  stacks: 'C',
  members: {
    frontend: '김지호',
  },
}
