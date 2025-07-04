import React from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Target, 
  Clock, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Layers,
  Brain,
  Award
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Features = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ 
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  })
  
  const [featuresRef, featuresVisible] = useScrollAnimation({ 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const features = [
    {
      icon: BookOpen,
      title: 'Curated Syllabus',
      description: 'Handpicked content from industry experts covering all essential topics for coding interviews',
      color: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      icon: Target,
      title: 'Company-Specific Prep',
      description: 'Targeted preparation for FAANG and top tech companies with their specific interview patterns',
      color: 'from-green-500 to-green-600',
      delay: 0.1
    },
    {
      icon: Clock,
      title: 'Time Efficient',
      description: 'Optimized learning paths that save 70% of your preparation time with focused content',
      color: 'from-purple-500 to-purple-600',
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: 'Smart Learning',
      description: 'AI-powered recommendations and progress tracking to maximize your learning outcomes',
      color: 'from-orange-500 to-orange-600',
      delay: 0.3
    },
    {
      icon: Award,
      title: 'Premium Questions',
      description: 'Access to exclusive premium questions and detailed solutions from top performers',
      color: 'from-red-500 to-red-600',
      delay: 0.4
    },
    {
      icon: CheckCircle,
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and milestone tracking to monitor your preparation journey',
      color: 'from-indigo-500 to-indigo-600',
      delay: 0.5
    }
  ]

  const benefits = [
    'No Context Switching - Everything in One Place',
    'Expert-Curated Content',
    'Real Interview Questions',
    'Company-Specific Focus',
    'Time-Optimized Learning',
    'Community Support'
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  }

  const cardHoverVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      rotateX: 8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.4
      }
    }
  }

  const iconVariants = {
    hover: {
      scale: 1.15,
      rotate: 10,
      y: -2,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-tuf-dark via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-premium-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-premium-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-premium-gold/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        {/* Title Section */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <span className="bg-gradient-to-r from-premium-gold to-premium-orange px-6 py-2 rounded-full text-black font-bold text-sm uppercase tracking-wider mb-6 inline-block">
              Why Choose TUF Plus
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text-premium mb-6"
          >
            Premium Features for
            <br />
            <span className="text-white">Interview Success</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your coding interview preparation with our comprehensive platform designed by industry experts
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={featuresRef}
          variants={containerVariants}
          initial="hidden"
          animate={featuresVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                variants={cardHoverVariants}
                className="glass-premium p-8 rounded-3xl border-2 border-premium-gold/20 hover:border-premium-gold/50 transition-all duration-500 relative overflow-hidden hover-lift h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/10 via-premium-amber/5 to-premium-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-3xl"></div>
                
                <div className="absolute top-4 right-4 w-2 h-2 bg-premium-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-premium-orange/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div
                  variants={iconVariants}
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 relative z-10 shadow-2xl group-hover:shadow-3xl transition-all duration-500 flex-shrink-0`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl"></div>
                  <feature.icon className="w-10 h-10 text-white relative z-10" />
                  
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10`}></div>
                </motion.div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={featuresVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: feature.delay + 0.2 }}
                    className="text-2xl font-bold text-white mb-4 group-hover:text-premium-gold transition-colors duration-300 flex-shrink-0"
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={featuresVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: feature.delay + 0.4 }}
                    className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-1"
                  >
                    {feature.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={featuresVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: feature.delay + 0.6 }}
                    className="mt-6 flex items-center space-x-2 text-premium-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-sm font-semibold">Learn More</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-6 right-6 text-premium-gold/30 group-hover:text-premium-gold/60 transition-colors duration-300"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-premium-gold via-transparent to-premium-orange opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={featuresVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-premium-gold via-premium-amber to-premium-orange text-black px-10 py-4 rounded-full font-bold text-lg glow-premium transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 shimmer"></div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-premium-orange to-premium-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={featuresVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-gray-400 mt-4"
          >
            Join 50,000+ developers who chose TUF Plus
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 