import React, { ReactNode } from 'react'

import { cn } from '@lib/utils'
import { BackendSkills, FrontendSkills, LanguageSkills, TeamworkSkills } from '@lib/constants/skills'

interface SkillsProps {
  className?: string
}

const Skills = ({ className }: SkillsProps): ReactNode => {
  return (
    <section className={cn(className, 'flex flex-col items-center justify-start')}>
      <p className='font-montserrat text-lg font-bold lg:text-2xl'>Skills</p>
      <p className='my-2 font-semibold'>제가 사용해온 입실론들입니다.</p>

      <ul className='bg-jhBazy01 flex w-full flex-col items-start justify-start gap-8 rounded-xl px-3 py-4'>
        <li className='grid w-full grid-cols-[2fr,8fr] items-center'>
          <span className='justify-self-center text-lg font-bold'>Language</span>
          <div className='flex flex-wrap items-center justify-start gap-4 font-semibold'>
            {LanguageSkills.map(skill => (
              <span
                key={skill.name}
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
                className='rounded-lg px-4 py-2'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </li>

        <li className='grid w-full grid-cols-[2fr,8fr] items-center'>
          <span className='justify-self-center text-lg font-bold'>Frontend</span>
          <div className='flex flex-wrap items-center justify-start gap-4 font-semibold'>
            {FrontendSkills.map(skill => (
              <span
                key={skill.name}
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
                className='rounded-lg px-4 py-2'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </li>

        <li className='grid w-full grid-cols-[2fr,8fr] items-center'>
          <span className='justify-self-center text-lg font-bold'>Backend</span>
          <div className='flex flex-wrap items-center justify-start gap-4 font-semibold'>
            {BackendSkills.map(skill => (
              <span
                key={skill.name}
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
                className='rounded-lg px-4 py-2'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </li>

        <li className='grid w-full grid-cols-[2fr,8fr] items-center'>
          <span className='justify-self-center text-lg font-bold'>Teamwork</span>
          <div className='flex flex-wrap items-center justify-start gap-4 font-semibold'>
            {TeamworkSkills.map(skill => (
              <span
                key={skill.name}
                style={{
                  backgroundColor: skill.bgColor,
                  color: skill.textColor,
                }}
                className='rounded-lg px-4 py-2'
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
