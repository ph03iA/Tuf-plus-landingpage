import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Clock, 
  Star, 
  Shield,
  CheckCircle,
  Zap,
  Trophy,
  Gift
} from 'lucide-react'

const CTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    { icon: <Zap size={20} />, text: 'Instant Access to All Content' },
    { icon: <Trophy size={20} />, text: '95% Success Rate Guarantee' },
    { icon: <Shield size={20} />, text: '30-Day Money Back Guarantee' },
    { icon: <Star size={20} />, text: 'Expert Mentor Support' }
  ]

  const stats = [
    { value: '2M+', label: 'Problems Solved' },
    { value: '50K+', label: 'Success Stories' },
    { value: '500+', label: 'Companies Hiring Our Students' },
    { value: '₹15L+', label: 'Average Package' }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-tuf-dark via-tuf-light to-tuf-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tuf-orange rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-max relative z-10">
        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-premium-gold via-premium-amber to-premium-orange text-black font-bold mb-8 glow-premium relative overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
            <Gift className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">🔥 LIMITED TIME OFFER - 50% OFF</span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-premium-red to-premium-orange rounded-full animate-ping"></div>
          </div>
        </motion.div>

        {/* Main CTA Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              Your Dream Job{' '}
              <span className="gradient-text-premium relative">
                Awaits
                <div className="absolute -inset-2 bg-gradient-to-r from-premium-gold/20 to-premium-orange/20 rounded-lg blur-xl"></div>
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't let another opportunity slip away. Join thousands of successful engineers 
              who transformed their careers with TakeUForward PLUS. Start your journey today 
              and land your dream job in the next 90 days.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 rounded-full bg-tuf-orange/20 flex items-center justify-center text-tuf-orange">
                    {benefit.icon}
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-premium-gold via-premium-amber to-premium-orange text-black px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center glow-premium transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-premium-orange to-premium-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Free Trial</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:text-white transition-all duration-300 relative z-10" />
                <div className="absolute inset-0 shimmer"></div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-premium border border-white/40 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Schedule Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center space-x-6 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Countdown & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Countdown Timer */}
            <div className="glass-premium rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/10 to-premium-orange/10"></div>
              <h3 className="text-3xl font-bold text-white mb-8 relative z-10">
                <Clock className="inline w-8 h-8 mr-3 text-premium-gold animate-pulse" />
                Offer Expires In
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Seconds' }
                ].map((time, index) => (
                  <motion.div
                    key={time.label}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-premium-gold via-premium-amber to-premium-orange rounded-2xl p-6 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="text-3xl font-black text-black relative z-10">{time.value.toString().padStart(2, '0')}</div>
                    <div className="text-premium-red font-bold text-sm relative z-10">{time.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Final Push */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-tuf-orange/20 to-orange-400/20 rounded-xl p-6 border border-tuf-orange/30"
            >
              <p className="text-white font-semibold mb-2">🔥 Last 24 Hours!</p>
              <p className="text-gray-300 text-sm">
                Join <strong className="text-tuf-orange">1,247 engineers</strong> who started their journey this week
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA 