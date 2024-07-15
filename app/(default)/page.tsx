export const metadata = {
  title: 'AI Uni Advisor',
  description: 'Welcome to BetterBilly, your ultimate learning companion. Our app helps you stay organized with assignments and schedules, access study resources, track your academic progress, and collaborate with classmates effortlessly. Use BetterBilly on any device to enhance your learning experience and achieve your educational goals. Join us today and transform the way you learn.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Newsletter />
    </>
  )
}
