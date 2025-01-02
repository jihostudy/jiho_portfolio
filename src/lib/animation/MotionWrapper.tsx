'use client'

import { motion, MotionProps } from 'motion/react'
import React from 'react'

import { AnimationKey, partialAnimation } from './animation'

interface CustomMotionProps<Tag extends keyof React.JSX.IntrinsicElements> extends MotionProps {
  tag?: Tag
  children: React.ReactNode
  className?: string
  animation: partialAnimation
}

export const Motion = <Tag extends keyof React.JSX.IntrinsicElements>({
  tag,
  children,
  className,
  animation,
  ...props
}: CustomMotionProps<Tag>) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const Comp = tag ? (motion as any)[tag] : motion.div

  const animationKeys: AnimationKey[] = [
    'initial',
    'animate',
    'exit',
    'transition',
    'whileInView',
    'viewport',
    'variants',
  ]
  const animationProps = animationKeys.reduce((acc, key) => {
    if (animation && animation[key]) (acc as Record<string, any>)[key] = animation[key]

    return acc
  }, {} as Partial<MotionProps>)

  return (
    <Comp className={className} {...props} {...animationProps}>
      {children}
    </Comp>
  )
}
