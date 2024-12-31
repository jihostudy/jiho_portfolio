export type ContributionType = {
  summary: string
  description: string[]
}
export type MembersType = {
  frontend: string
  backend?: string
  AI?: string
}

export type ProjectDetailType = {
  title: string
  duration: string
  url: string
  github: string
  background: string
  contribution: Array<ContributionType>
  report: string
  stacks: string
  members: MembersType
}
