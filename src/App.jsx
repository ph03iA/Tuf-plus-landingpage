import React, { Suspense, lazy } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Features = lazy(() => import('./components/Features'))
const Syllabus = lazy(() => import('./components/Syllabus'))
const Plans = lazy(() => import('./components/Plans'))
const Reviews = lazy(() => import('./components/Reviews'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-premium-gold/20 border-t-premium-gold rounded-full animate-spin"></div>
      <div className="absolute top-2 left-2 w-12 h-12 border-4 border-premium-amber/20 border-t-premium-amber rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
    </div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-tuf-dark text-white">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Features />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Syllabus />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Plans />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Reviews />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <CTA />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      
      <Analytics />
    </div>
  )
}

export default App 