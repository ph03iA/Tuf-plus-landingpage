import React from 'react'
import { motion } from 'framer-motion'
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Crown,
  ArrowRight,
  Users,
  Infinity,
  Shield,
  Sparkles
} from 'lucide-react'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation'

const Plans = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ 
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  })
  
  const [plansRef, plansVisible] = useScrollAnimation({ 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const [testimonialRef, testimonialVisible] = useScrollAnimation({ 
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  })

  const [parallaxRef, parallaxOffset] = useParallax(0.3)

  const plans = [
    {
      name: 'Sprint Plan',
      emoji: '🏃',
      originalPrice: '₹8999',
      regularPrice: '₹6599',
      price: '₹4289.35',
      discount: '27% OFF',
      period: '12 Months',
      coupon: 'PAYDAY',
      description: 'Perfect for beginners starting their coding journey.',
      features: [
        'All features',
        'Only DSA, Core & Aptitude',
        'AI Doubt Support',
        'Biweekly Sessions',
        'Code Review'
      ],
      buttonText: 'Buy Now @ ₹4289.35',
      popular: false,
      icon: Shield,
      color: 'from-blue-600 to-blue-700',
      borderColor: 'border-blue-600/30',
      delay: 0
    },
    {
      name: 'Pinnacle Plan',
      emoji: '🚀',
      originalPrice: '₹11999',
      regularPrice: '₹9120',
      price: '₹5928',
      discount: '24% OFF',
      period: 'Lifetime',
      coupon: 'PAYDAY',
      description: 'Go all in — with expert support & lifetime access.',
      features: [
        'All features',
        'DSA, Core, Design & Aptitude',
        'AI Doubt Support',
        'Biweekly Sessions',
        'Code Review'
      ],
      buttonText: 'Buy Now @ ₹5928',
      popular: true,
      icon: Zap,
      color: 'from-premium-gold to-premium-orange',
      borderColor: 'border-premium-gold/50',
      delay: 0.1,
      lifetime: true
    },
    {
      name: 'Enterprise Plan',
      emoji: '🎯',
      price: 'Contact Us',
      period: 'Custom',
      description: 'Perfect for a group of people (minimum 30) who are looking for an extra discount.',
      features: [
        'All features of Pinnacle',
        'Performance Dashboard',
        'Centralized Billing & Licensing',
        'Custom Curriculum',
        'Exclusive Webinars & Industry Events',
        'Batch Enrollment & Role Access'
      ],
      buttonText: 'Contact Us',
      popular: false,
      icon: Crown,
      color: 'from-purple-600 to-purple-700',
      borderColor: 'border-purple-600/30',
      delay: 0.2,
      enterprise: true
    }
  ]

  const testimonials = [
    {
      name: 'Arjun Sharma',
      company: 'Google SDE-2',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: 'TUF Plus completely transformed my interview prep. Got offers from 3 FAANG companies!',
      delay: 0
    },
    {
      name: 'Priya Patel',
      company: 'Amazon SDE-1',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: 'The company-specific tracks and mock interviews were game-changers for my preparation.',
      delay: 0.1
    },
    {
      name: 'Rohit Kumar',
      company: 'Microsoft SDE-2',
      image: '/api/placeholder/60/60',
      rating: 5,
      text: 'Best investment I made for my career. The mentoring sessions were incredibly valuable.',
      delay: 0.2
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
      y: -15,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const testimonialVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  return (
    <section id="plans" className="section-padding bg-gradient-to-br from-gray-900 via-tuf-dark to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-20 w-96 h-96 bg-premium-gold/5 rounded-full blur-3xl"
          style={{ y: parallaxOffset }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-premium-orange/5 rounded-full blur-3xl"
          style={{ y: parallaxOffset * -0.5 }}
        />
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-premium-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-premium-orange rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-premium-gold/30 rounded-full animate-bounce"></div>
      </div>

      <div className="container-max relative z-10" ref={parallaxRef}>
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
              Choose Your Plan
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text-premium mb-6"
          >
            Invest in Your
            <br />
            <span className="text-white">Dream Career</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Choose the perfect plan for your interview preparation journey. All plans include 30-day money-back guarantee.
          </motion.p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          ref={plansRef}
          variants={containerVariants}
          initial="hidden"
          animate={plansVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover="hover"
              className="relative group cursor-pointer h-full flex flex-col"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-6 -translate-y-1/2 z-20 transition-transform duration-300 group-hover:-translate-y-4">
                  <div className="bg-gradient-to-r from-premium-gold to-premium-orange text-black px-4 py-1.5 text-sm sm:text-base rounded-full font-bold shadow-lg flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              <motion.div
                variants={cardHoverVariants}
                className={`glass-premium p-8 rounded-3xl ${plan.borderColor} border-2 transition-all duration-500 relative overflow-hidden group-hover:border-premium-gold/60 ${
                  plan.popular ? 'glow-premium' : 'hover-lift'
                } h-full flex flex-col`}
              >
                {/* Background Effects - Reduced opacity for better text visibility */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color}/3 opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-30"></div>
                {/* Enhanced text background for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Plan Header */}
                <div className="relative z-10 text-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-2">{plan.emoji}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-premium-gold transition-colors duration-300 relative z-20 drop-shadow-lg">
                      {plan.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing Section */}
                  <div className="text-center mb-6">
                    <p className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{plan.price}</p>
                    {!plan.enterprise && (
                      <p className="text-gray-400">
                        <span className="line-through">{plan.originalPrice}</span> for {plan.period}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="relative z-20 mb-8 flex-1">
                  <h4 className="text-lg font-bold text-white mb-4 text-left drop-shadow-lg">What's included</h4>
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-base sm:text-lg text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group/btn mt-auto ${
                    plan.popular
                      ? 'bg-gradient-to-r from-premium-gold via-premium-amber to-premium-orange text-black glow-premium'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-premium-gold/50'
                  }`}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                  {plan.popular && (
                    <div className="absolute inset-0 shimmer"></div>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 50 }}
          animate={testimonialVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">Loved by Coders Worldwide</h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See what our successful students have to say about their journey with TUF Plus.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={testimonialVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={testimonialVariants}
                initial="hidden"
                animate={testimonialVisible ? "visible" : "hidden"}
                transition={{ delay: testimonial.delay + 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-premium p-6 rounded-2xl border border-premium-gold/20 hover:border-premium-gold/40 transition-all duration-300 floating-element"
              >
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={testimonialVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: testimonial.delay + 0.6 + (i * 0.1) }}
                    >
                      <Star className="w-5 h-5 text-premium-gold fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-premium-gold to-premium-orange flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-white font-bold text-base sm:text-lg">{testimonial.name}</p>
                    <p className="text-premium-gold text-sm sm:text-base">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Plans 