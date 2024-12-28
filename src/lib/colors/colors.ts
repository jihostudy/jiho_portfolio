import config from '../../../tailwind.config'

// tailwindcss colors (값)
export const colorSet = {
  jhWhite01: config.theme.extend.colors.jhWhite01,
  jhBlack01: config.theme.extend.colors.jhBlack01,
  jhBazy01: config.theme.extend.colors.jhBazy01,
  jhPurple01: config.theme.extend.colors.jhPurple01,
  jhBlue01: config.theme.extend.colors.jhBlue01,
}

export type ColorType = keyof typeof colorSet
