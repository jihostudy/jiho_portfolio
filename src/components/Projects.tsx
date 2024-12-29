'use client'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'

import { PROJECTS, ProjectType } from '@lib/constants/projects'
import LucideIcon from '@lib/icons/LucideIcon'
import { cn } from '@lib/utils'

interface ProjectsProps {
  className?: string
}

const Projects = ({ className }: ProjectsProps): ReactNode => {
  const [checked, setChecked] = useState<boolean>(true)

  //Functions
  const toggleChecked = () => {
    setChecked(prev => !prev)
  }
  return (
    <section className={cn(className, 'flex flex-col items-center justify-start')}>
      <p className='font-montserrat text-lg font-bold lg:text-2xl'>Projects</p>
      <p className='my-2 text-sm font-semibold lg:text-base'>제가 만들어온 입실론들입니다.</p>
      <p className='text-sm font-semibold lg:text-base'>* 프로젝트를 클릭해서 상세 내용을 확인해주세요</p>

      <div className='my-2 mt-6 flex items-center justify-center gap-2'>
        <LucideIcon
          name={checked ? 'SquareCheckBig' : 'Square'}
          onClick={toggleChecked}
          className={cn(checked ? 'text-blue-900' : 'text-jhBlack01')}
        />
        <span className='font-bold'>Web Project Only</span>
      </div>

      <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            data={project}
            className='cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105'
          />
        ))}
      </ul>
    </section>
  )
}

export default Projects

interface ProjectCardProps {
  data: ProjectType
  className?: string
}
const ProjectCard = ({ data, className }: ProjectCardProps): ReactNode => {
  const { thumbnail, title, duration, description, stacks } = data
  return (
    <li className={cn('relative flex flex-col items-start justify-start', className)}>
      <Image alt='project-thumbnail' src={thumbnail} className='aspect-3/2 w-full' />

      <div className='flex flex-col items-start justify-start px-4 pb-4 pt-6'>
        <p className='font-bold'>{title}</p>
        <p className='py-1 text-sm'>{duration}</p>
        <p className='mb-1 text-sm'>{description}</p>
        <div className='mt-2 flex items-center justify-start gap-2'>
          {stacks.map((stack, index) => (
            <Image key={index} src={stack} alt='stack-icon' className='aspect-square w-4' />
          ))}
        </div>
      </div>
    </li>
  )
}
