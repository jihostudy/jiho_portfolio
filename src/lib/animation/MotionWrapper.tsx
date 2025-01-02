import { motion, MotionProps } from 'motion/react'
import React, { forwardRef } from 'react'

import { AnimationKey, partialAnimation } from './animation'

interface CustomMotionProps<Tag extends keyof React.JSX.IntrinsicElements> extends MotionProps {
  tag?: Tag
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
  animation: partialAnimation
}

export const Motion = forwardRef(
  <Tag extends keyof React.JSX.IntrinsicElements>(
    { tag, children, className, animation, ...props }: CustomMotionProps<Tag>,
    ref: React.Ref<HTMLElement>,
  ) => {
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
      <Comp ref={ref} className={className} {...props} {...animationProps}>
        {children}
      </Comp>
    )
  },
)

// Display name 설정 (React DevTools에서 보기 좋게 하기 위함)
Motion.displayName = 'Motion'
