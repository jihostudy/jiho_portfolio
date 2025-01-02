'use client'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'

import useReadmeModal from '@lib/hooks/useReadmeModal'
import LucideIcon from '@lib/icons/LucideIcon'
import { cn } from '@lib/utils'
import { PROJECTS, ProjectType } from '@public/data/project/projects'

interface ProjectsProps {
  className?: string
}

const Projects = ({ className }: ProjectsProps): ReactNode => {
  const [checked, setChecked] = useState<boolean>(true)

  const { isOpen, handleOpen, Modal } = useReadmeModal()
  //Functions
  const toggleChecked = () => {
    setChecked(prev => !prev)
  }

  const ProjectList = PROJECTS.map((project, index) => {
    if (project.isWebProject || !checked)
      return (
        <ProjectCard
          key={index}
          data={project}
          onClick={() => handleOpen(project.modalDetails)}
          className='w-full cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105'
        />
      )
  })

  return (
    <section id={'Projects'} className={cn(className, 'flex flex-col items-center justify-start')}>
      <p className='font-montserrat text-lg font-bold lg:text-2xl'>Projects</p>
      <p className='my-2 text-sm font-semibold lg:text-base'>제가 만들어온 입실론들입니다.</p>
      <p className='text-sm font-semibold lg:text-base'>* 프로젝트를 클릭해서 상세 내용을 확인해주세요</p>

      <div onClick={toggleChecked} className='my-2 mt-6 flex cursor-pointer items-center justify-center gap-2'>
        <LucideIcon
          name={checked ? 'SquareCheckBig' : 'Square'}
          className={cn(checked ? 'text-blue-900' : 'text-jhBlack01')}
        />
        <span className='font-bold'>Web Project Only</span>
      </div>

      <ul className='relative grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>{ProjectList}</ul>
      <Modal />
    </section>
  )
}

export default Projects

interface ProjectCardProps {
  data: ProjectType
  onClick: () => void
  className?: string
}
const ProjectCard = ({ data, onClick, className }: ProjectCardProps): ReactNode => {
  const { thumbnail, title, duration, description, stacks } = data

  return (
    <li onClick={onClick} className={cn('relative flex flex-col items-start justify-start', className)}>
      <Image
        alt='project-thumbnail'
        src={thumbnail}
        placeholder='blur'
        className='aspect-3/2 w-full object-cover object-top'
      />
      {/* <div
        // alt='project-thumbnail'
        // src={thumbnail}
        // placeholder='blur'
        className='aspect-3/2 w-full object-cover object-top'
      /> */}

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
