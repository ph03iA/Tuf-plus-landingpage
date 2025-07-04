import React, { useRef, useMemo, useState, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, BookOpen, Trophy } from 'lucide-react'
import * as THREE from 'three'

// Optimized particle system with multiple layers
const ParticleField = React.memo(({ count, color, size, speed, spread }) => {
  const ref = useRef()
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Even distribution across the space instead of spherical concentration
      positions[i * 3] = (Math.random() - 0.5) * spread * 2     // x: -spread to +spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 2 // y: -spread to +spread  
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread     // z: -spread/2 to +spread/2
    }
    return positions
  }, [count, spread])
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * speed * 2
      ref.current.rotation.y -= delta * speed * 1.5
      ref.current.rotation.z += delta * speed * 0.8
    }
  })
  
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  )
})



const InteractiveBackground = React.memo(() => {
  const { mouse } = useThree()
  const ref = useRef()
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const particleCounts = isMobile 
    ? { primary: 800, secondary: 600, tertiary: 400, accent: 200 }
    : { primary: 1500, secondary: 1200, tertiary: 900, accent: 600 }
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.y * 0.2, 0.05)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 0.2, 0.05)
    }
  })
  
  return (
    <group ref={ref}>
      <ParticleField count={particleCounts.primary} color="#FFD700" size={0.004} speed={0.3} spread={2.5} />
      <ParticleField count={particleCounts.secondary} color="#FF8C00" size={0.006} speed={0.25} spread={2} />
      <ParticleField count={particleCounts.tertiary} color="#FF6B35" size={0.008} speed={0.2} spread={1.5} />
      <ParticleField count={particleCounts.accent} color="#FFA500" size={0.01} speed={0.15} spread={1} />
      <ParticleField count={particleCounts.accent} color="#FFD700" size={0.012} speed={0.1} spread={0.8} />
    </group>
  )
})

const Hero = React.memo(() => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = useCallback((e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1
    })
  }, [])
  
  const stats = useMemo(() => [
    { icon: <Users size={20} />, value: '50,000+', label: 'Students' },
    { icon: <BookOpen size={20} />, value: '1,000+', label: 'Problems' },
    { icon: <Trophy size={20} />, value: '95%', label: 'Success Rate' },
    { icon: <Star size={20} />, value: '4.9/5', label: 'Rating' },
  ], [])

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-5 sm:pt-13"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-premium-gold/5 via-premium-orange/10 to-premium-red/5 animate-pulse"></div>
      
      <div className="absolute inset-0 z-5" style={{ filter: 'blur(1px)' }}>
        <Canvas 
          camera={{ position: [0, 0, 1], fov: 75 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          style={{ background: 'transparent' }}
        >
          <InteractiveBackground />
          <ambientLight intensity={0.2} />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-tuf-dark/60 via-tuf-dark/50 to-tuf-dark/70 z-10"></div>
      
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-premium-gold/10 to-premium-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-premium-amber/10 to-premium-red/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex flex-wrap items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-premium premium-border mb-4 sm:mb-8 relative overflow-hidden text-xs sm:text-sm mt-8 sm:mt-12"
          >
            <div className="absolute inset-0 shimmer"></div>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-premium-gold mr-2 sm:mr-3 animate-pulse" />
            <span className="font-semibold text-white relative z-10 whitespace-nowrap">✨ ONE STOP Interview Prep Platform</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-premium-gold to-premium-amber rounded-full animate-ping"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-8 leading-tight break-words"
          >
            Master Your{' '}
            <span className="gradient-text-premium relative">
              Coding
              <div className="absolute -inset-2 bg-gradient-to-r from-premium-gold/20 to-premium-orange/20 rounded-lg blur-xl"></div>
            </span>{' '}
            Interviews
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to crack your dream job. No context switching, 
            curated content, company-specific prep - all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="group relative bg-gradient-to-r from-premium-gold via-premium-amber to-premium-orange text-black px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center glow-premium transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-premium-orange to-premium-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Your Journey</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:text-white transition-all duration-300 relative z-10" />
              <div className="absolute inset-0 shimmer"></div>
            </button>
            <button className="glass-premium border border-white/40 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">View Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="glass-premium rounded-xl p-6 text-center hover:scale-110 transition-all duration-300 floating-element relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="flex justify-center text-premium-gold mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-premium-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default Hero 