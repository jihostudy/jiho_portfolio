import type { NextConfig } from 'next'

import bundleAnalyzer from '@next/bundle-analyzer'

// bundleAnalyzer 초기화
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', // 환경변수를 통해 활성화 여부 설정
  openAnalyzer: false, // 번들 분석기를 자동으로 열지 않음
})

const nextConfig: NextConfig = {}

// withBundleAnalyzer를 사용해 nextConfig 확장
export default withBundleAnalyzer(nextConfig)
