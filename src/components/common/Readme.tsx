import Link from 'next/link'
import React, { forwardRef, ReactNode } from 'react'

import LucideIcon from '@lib/icons/LucideIcon'
import { cn } from '@lib/utils'
import { ContributionType, MembersType, ProjectDetailType } from '@public/data/project/deatils'

interface ReadmeProps {
  data: ProjectDetailType | undefined
  handleClose: () => void
  onConfirm?: () => void
}

const Readme = forwardRef<HTMLDivElement, ReadmeProps>(({ data, handleClose, onConfirm }, ref) => {
  if (data) {
    const { title, duration, url, github, background, contribution, report, stacks, members } = data
    return (
      <div
        ref={ref}
        className='scrollbar-hide fixed top-1/2 z-30 h-[90dvh] w-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-solid border-black'
      >
        <div className='sticky top-0 flex items-center justify-between rounded-t-xl bg-jhBlack01 px-5 py-3'>
          <span className='text-xl font-bold text-jhWhite01'>Readme.md</span>
          <LucideIcon name='X' onClick={handleClose} className='text-jhWhite01' size={26} />
        </div>

        <div className='flex flex-col items-start justify-start bg-jhWhite01 px-7 pb-3 pt-4'>
          <div className='flex items-end justify-start gap-6'>
            <span className='text-2xl font-bold'>{title}</span>
            <span className='text-sm'>{duration}</span>
          </div>

          <div className='flex items-center justify-start gap-6 py-4'>
            <Link href={url} target='_blank' className='flex items-center justify-center gap-2'>
              <LucideIcon name='Link' />
              <span className='text-jhBlue02'>배포 URL</span>
            </Link>
            <Link href={github} target='_blank' className='flex items-center justify-center gap-2'>
              <LucideIcon name='Github' />
              <span>깃허브</span>
            </Link>
          </div>

          <div className='mb-6 h-[1px] w-full bg-jhBlack01' />

          <DescriptionSection
            title='Background'
            description={background}
            icon={<LucideIcon size={30} name='CircleHelp' />}
            className='my-5'
          />

          <ContributionSection
            title='Contribution'
            data={contribution}
            icon={<LucideIcon size={30} name='Keyboard' />}
            className='my-5'
          />

          <DescriptionSection
            title='Report'
            description={report}
            icon={<LucideIcon size={30} name='Layers' />}
            className='my-5'
          />

          <DescriptionSection
            title='Technology Stacks'
            description={stacks}
            icon={<LucideIcon size={30} name='Layers' />}
            className='my-5'
          />

          <TeamMemberSection
            title='Team Members'
            data={members}
            icon={<LucideIcon size={30} name='Users' />}
            className='my-5'
          />
        </div>
      </div>
    )
  }
  return null
})
// displayName 설정
Readme.displayName = 'Readme'

export default Readme

interface DescriptionSectionProps {
  title: string
  description: string
  icon: React.JSX.Element
  className?: string
}

const DescriptionSection = ({ title, description, icon, className }: DescriptionSectionProps): ReactNode => {
  return (
    <div className={cn(className, 'flex flex-col items-start justify-start gap-3')}>
      <div className='flex items-center justify-start gap-2'>
        {icon}
        <span className='text-2xl font-bold'>{title}</span>
      </div>
      <span className='ml-4 text-pretty'>{description}</span>
    </div>
  )
}

interface ContributionSectionProps {
  title: string
  data: ContributionType[]
  icon: React.JSX.Element
  className?: string
}

const ContributionSection = ({ title, icon, data, className }: ContributionSectionProps): ReactNode => {
  return (
    <div className={cn(className, 'flex w-full flex-col items-start justify-start gap-3')}>
      <div className='flex items-center justify-start gap-2'>
        {icon}
        <span className='text-2xl font-bold'>{title}</span>
      </div>

      <div className='relative ml-2 flex w-full flex-col gap-4'>
        {data.map((contribute, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <p className='bg-jhGray01 w-full rounded-sm px-2 py-1 font-semibold'>{contribute.summary}</p>
            <ul className='list-inside list-disc'>
              {contribute.description.map((desc, idx) => (
                <li key={idx} className='py-1 pl-4'>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

interface TeamMemberSectionProps {
  title: string
  data: MembersType
  icon: React.JSX.Element
  className?: string
}

const TeamMemberSection = ({ title, icon, data, className }: TeamMemberSectionProps): ReactNode => {
  return (
    <div className={cn(className, 'flex w-full flex-col items-start justify-start gap-3')}>
      <div className='flex items-center justify-start gap-2'>
        {icon}
        <span className='text-2xl font-bold'>{title}</span>
      </div>

      <ul className='relative ml-2 flex w-full list-inside list-disc flex-col gap-2'>
        <li className='pl-4'>Frontend: {data.frontend}</li>
        <li className='pl-4'>Backend: {data.backend}</li>
        {data.AI && <li>AI: {data.AI}</li>}
      </ul>
    </div>
  )
}
