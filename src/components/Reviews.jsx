import React from 'react'
import { motion } from 'framer-motion'
import { Star, Trophy, Award, Users, TrendingUp, Zap } from 'lucide-react'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'

const Reviews = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ 
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  })
  
  const [reviewsRef, reviewsVisible] = useScrollAnimation({ 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const [statsRef, statsVisible] = useScrollAnimation({ 
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  })

  const [parallaxRef, parallaxOffset] = useParallax(0.4)

  const reviews = [
    {
      id: 1,
      name: 'Ankit Verma',
      company: 'Google',
      position: 'Software Engineer',
      image: '/api/placeholder/80/80',
      rating: 5,
      review: 'TUF Plus completely transformed my coding interview preparation. The company-specific tracks and premium questions helped me crack Google in just 3 months. The mentoring sessions were incredibly valuable!',
      achievement: 'Cracked Google SDE-2',
      delay: 0
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Amazon',
      position: 'SDE-1',
      image: '/api/placeholder/80/80',
      rating: 5,
      review: 'The systematic approach and progress tracking features are game-changers. I went from struggling with basic problems to solving complex system design questions. Best investment for my career!',
      achievement: 'Amazon SDE-1 Offer',
      delay: 0.1
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      company: 'Microsoft',
      position: 'Software Engineer II',
      image: '/api/placeholder/80/80',
      rating: 5,
      review: 'The mock interviews and behavioral prep sessions gave me the confidence I needed. The platform covers everything from data structures to system design. Highly recommend for serious candidates!',
      achievement: 'Microsoft SDE-2',
      delay: 0.2
    },
    {
      id: 4,
      name: 'Sneha Patel',
      company: 'Meta',
      position: 'Frontend Engineer',
      image: '/api/placeholder/80/80',
      rating: 5,
      review: 'What sets TUF Plus apart is the quality of explanations and the community support. The premium questions are exactly what you face in real interviews. Got multiple offers!',
      achievement: 'Meta E4 Offer',
      delay: 0.3
    },
    {
      id: 5,
      name: 'Arjun Singh',
      company: 'Apple',
      position: 'iOS Developer',
      image: '/api/placeholder/80/80',
      rating: 5,
      review: 'The learning path is perfectly structured and the progress analytics helped me identify my weak areas. The one-on-one mentoring sessions were worth every penny. Dream job achieved!',
      achievement: 'Apple iOS Engineer',
      delay: 0.4
    },
    {
      id: 6,
      name: 'Kavya Reddy',
      company: 'Netflix',
      position: 'Backend Engineer',
      image: '/api/placeholder/80/80',
      rating: 5,
      review: 'TUF Plus is comprehensive and efficient. The system design masterclass and salary negotiation guide helped me get a 40% salary hike. The platform pays for itself!',
      achievement: 'Netflix Backend Engineer',
      delay: 0.5
    }
  ]

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Success Stories',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Trophy,
      value: '95%',
      label: 'Interview Success Rate',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Average Salary Increase',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      value: '3 Months',
      label: 'Average Prep Time',
      color: 'from-orange-500 to-orange-600'
    }
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
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const statsVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  return (
    <section id="reviews" className="section-padding bg-gradient-to-br from-black via-tuf-dark to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0" ref={parallaxRef}>
        <motion.div 
          className="absolute top-20 right-20 w-80 h-80 bg-premium-gold/5 rounded-full blur-3xl"
          style={{ y: parallaxOffset }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-96 h-96 bg-premium-orange/5 rounded-full blur-3xl"
          style={{ y: parallaxOffset * -0.6 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-premium-gold/3 to-transparent rounded-full blur-3xl"
          style={{ y: parallaxOffset * 0.2 }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-premium-gold rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-premium-orange/40 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-premium-gold rounded-full animate-pulse"></div>
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
            <span className="bg-gradient-to-r from-premium-gold to-premium-orange px-6 py-2 rounded-full text-black font-bold text-sm uppercase tracking-wider mb-6 inline-block shimmer">
              Success Stories
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-black gradient-text-premium mb-6"
          >
            Dreams Turned Into
            <br />
            <span className="text-white">Reality</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of developers who transformed their careers with TUF Plus and landed their dream jobs at top tech companies
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          ref={reviewsRef}
          variants={containerVariants}
          initial="hidden"
          animate={reviewsVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover="hover"
              className="group floating-element"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                variants={cardHoverVariants}
                className="glass-premium p-6 pt-8 rounded-3xl border border-premium-gold/20 hover:border-premium-gold/40 transition-all duration-500 relative overflow-visible hover-lift min-h-[400px] flex flex-col"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/5 to-premium-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-3xl"></div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={reviewsVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.6, delay: review.delay + 0.2 }}
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-2 shadow-lg z-20 max-w-[200px]"
                >
                  <Trophy className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{review.achievement}</span>
                </motion.div>

                {/* User Info */}
                <div className="relative z-10 mb-4 flex-shrink-0">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-gold to-premium-orange flex items-center justify-center text-black font-bold text-xl shadow-lg flex-shrink-0"
                    >
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-premium-gold transition-colors duration-300 truncate">
                        {review.name}
                      </h3>
                      <p className="text-premium-gold font-semibold truncate">{review.position}</p>
                      <p className="text-gray-400 text-sm truncate">{review.company}</p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="relative z-10 flex items-center space-x-1 mb-4 flex-shrink-0">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={reviewsVisible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                      transition={{ duration: 0.4, delay: review.delay + 0.4 + (i * 0.1) }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <Star className="w-5 h-5 text-premium-gold fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text - Flexible height */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={reviewsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: review.delay + 0.6 }}
                  className="relative z-10 text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-1"
                >
                  "{review.review}"
                </motion.p>

                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={reviewsVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: review.delay + 0.8 }}
                  className="absolute bottom-6 right-6 text-premium-gold/20 group-hover:text-premium-gold/40 transition-colors duration-300 z-10"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L24 4.172c-4.117 0.851-7.173 4.031-7.173 8.851v6.848c1.143-.915 2.533-1.391 4.173-1.391v2.52H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609L10 4.172C5.883 5.023 2.827 8.203 2.827 13.023v6.848c1.143-.915 2.533-1.391 4.173-1.391v2.52H0z"/>
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="glass-premium rounded-3xl p-8 md:p-12 premium-border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/3 to-premium-orange/3"></div>
          <div className="absolute inset-0 shimmer opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12 relative z-20"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Our Impact in <span className="gradient-text-premium drop-shadow-lg">Numbers</span>
              </h3>
              <p className="text-gray-200 text-lg drop-shadow-md">
                Real results from real people who invested in their future
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statsVariants}
                  initial="hidden"
                  animate={statsVisible ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={statsVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    className="text-3xl md:text-4xl font-black gradient-text-premium mb-2 drop-shadow-lg relative z-20"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-gray-200 font-semibold group-hover:text-white transition-colors duration-300 drop-shadow-md relative z-20">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews 