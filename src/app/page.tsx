'use client'

import dynamic from 'next/dynamic'

// Dynamically import IndexPage with SSR disabled
const IndexPage = dynamic(
  () => import('@/components/pages/index-page').then(mod => ({ default: mod.IndexPage })),
  { ssr: false }
)

export default function Home() {
  return <IndexPage />
} 