export type Animation = {
  initial: object
  animate: object
  exit: object
  transition: object
  whileInView: object
  viewport: object
  variants: object
}
export type partialAnimation = Partial<Animation>

export type AnimationKey = keyof Animation

export const fadeIn = (
  offsetX?: number,
  offsetY?: number,
  duration: number = 1,
  delay: number = 0,
  once: boolean = false, // 자동 재실행 여부
): partialAnimation => {
  return {
    initial: {
      opacity: 0,
      ...(offsetX !== undefined ? { x: offsetX } : {}),
      ...(offsetY !== undefined ? { y: offsetY } : {}),
    },
    animate: { opacity: 1, ...(offsetX !== undefined ? { x: 0 } : {}), ...(offsetY !== undefined ? { y: 0 } : {}) },
    transition: { duration, delay },
    viewport: { once },
  }
}

export const fadeInView = (
  offsetX?: number,
  offsetY?: number,
  duration: number = 1,
  delay: number = 0,
  once: boolean = false,
): partialAnimation => {
  return {
    initial: {
      opacity: 0,
      ...(offsetX !== undefined ? { x: offsetX } : {}),
      ...(offsetY !== undefined ? { y: offsetY } : {}),
    },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration, delay },
    viewport: { once },
  }
}

export const fadeOut = (
  offsetX?: number,
  offsetY?: number,
  duration: number = 1,
  delay: number = 0,
): partialAnimation => {
  return {
    initial: { opacity: 1, x: 0, y: 0 },
    animate: {
      opacity: 0,
      ...(offsetX !== undefined ? { x: offsetX } : {}),
      ...(offsetY !== undefined ? { y: offsetY } : {}),
    },
    transition: { duration, delay },
  }
}
