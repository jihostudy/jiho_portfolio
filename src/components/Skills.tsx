import React, { ReactNode } from 'react'

import { cn } from '@lib/utils'
import { BackendSkills, DevSkills, FrontendSkills, LanguageSkills, TeamworkSkills } from '@public/data/skills'

interface SkillsProps {
  className?: string
}

const Skills = ({ className }: SkillsProps): ReactNode => {
  return (
    <section id={'Skills'} className={cn(className, 'flex flex-col items-center justify-start')}>
      <p className='font-montserrat text-lg font-bold lg:text-2xl'>Skills</p>
      <p className='my-2 text-sm font-semibold lg:text-base'>제가 사용해온 입실론들입니다.</p>

      <ul className='flex w-full flex-col items-start justify-start gap-8 rounded-xl bg-jhBazy01 px-4 py-10'>
        <li className='grid w-full grid-cols-1 items-center gap-2 lg:grid-cols-[2fr,8fr] lg:gap-4'>
          <span className='text-lg font-bold lg:justify-self-center'>Language</span>
          <div className='flex flex-wrap items-center justify-start gap-4 text-xs font-semibold lg:text-base'>
            {LanguageSkills.map(skill => (
              <span
                key={skill.name}
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
                className='rounded-lg px-4 py-[6px]'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </li>

        <li className='grid w-full grid-cols-1 items-center gap-2 lg:grid-cols-[2fr,8fr] lg:gap-4'>
          <span className='text-lg font-bold lg:justify-self-center'>Frontend</span>
          <div className='flex flex-wrap items-center justify-start gap-4 text-xs font-semibold lg:text-base'>
            {FrontendSkills.map(skill => (
              <span
                key={skill.name}
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
                className='rounded-lg px-4 py-[6px]'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </li>

        <li className='grid w-full grid-cols-1 items-center gap-2 lg:grid-cols-[2fr,8fr] lg:gap-4'>
          <span className='text-lg font-bold lg:justify-self-center'>Backend</span>
          <div className='flex flex-wrap items-center justify-start gap-4 text-xs font-semibold lg:text-base'>
            {BackendSkills.map(skill => (
              <span
                key={skill.name}
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
                className='rounded-lg px-4 py-[6px]'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </li>

        <li className='grid w-full grid-cols-1 items-center gap-2 lg:grid-cols-[2fr,8fr] lg:gap-4'>
          <span className='text-lg font-bold lg:justify-self-center'>Dev</span>
          <div className='flex flex-wrap items-center justify-start gap-4 text-xs font-semibold lg:text-base'>
            {DevSkills.map(skill => (
              <span
                key={skill.name}
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
                className='rounded-lg px-4 py-[6px]'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </li>

        <li className='grid w-full grid-cols-1 items-center gap-2 lg:grid-cols-[2fr,8fr] lg:gap-4'>
          <span className='text-lg font-bold lg:justify-self-center'>Teamwork</span>
          <div className='flex flex-wrap items-center justify-start gap-4 text-xs font-semibold lg:text-base'>
            {TeamworkSkills.map(skill => (
              <span
                key={skill.name}
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
                className='rounded-lg px-4 py-[6px]'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Skills
