import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code, ChevronDown } from 'lucide-react'
import { useSmoothScroll } from '../hooks/useScrollAnimation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => typeof window !== 'undefined' ? window.scrollY > 50 : false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollToElement } = useSmoothScroll()
  const lastScrollTime = useRef(0)

  const navLinks = [
    { name: 'Home', href: 'hero', id: 'hero' },
    { name: 'Features', href: 'features', id: 'features' },
    { name: 'Syllabus', href: 'syllabus', id: 'syllabus' },
    { name: 'Plans', href: 'plans', id: 'plans' },
    { name: 'Reviews', href: 'reviews', id: 'reviews' },
  ]

  const handleScroll = useCallback(() => {
    const now = Date.now()
    
    if (now - lastScrollTime.current < 150) {
      return
    }
    lastScrollTime.current = now

    const scrollPosition = window.scrollY
    setIsScrolled(scrollPosition > 50)

    const sections = navLinks.map(link => {
      const element = document.getElementById(link.id)
      if (!element) return null
      return {
        id: link.id,
        top: element.offsetTop,
        height: element.offsetHeight
      }
    }).filter(Boolean)

    let currentSectionId = 'hero'
    const threshold = 200 

    for (const section of sections) {
      if (scrollPosition >= section.top - threshold) {
        currentSectionId = section.id
      }
    }

    setActiveSection(current => current !== currentSectionId ? currentSectionId : current)
  }, []) // No dependencies - stable function

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleNavClick = (sectionId) => {
    scrollToElement(sectionId, 80)
    setIsOpen(false)
    setActiveSection(sectionId)
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  }

  const linkVariants = {
    hover: { 
      scale: 1.02, 
      transition: { duration: 0.15 }
    },
    tap: { scale: 0.98 }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-gradient-to-r from-black/40 via-black/30 to-black/40 shadow-2xl shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer min-w-0"
            onClick={() => handleNavClick('hero')}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-premium-gold via-premium-amber to-premium-orange rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
              <Code className="w-6 h-6 sm:w-7 sm:h-7 text-black relative z-10 drop-shadow-sm" />
            </div>
            <div className="flex flex-col xs:flex-row xs:items-center space-y-1 xs:space-y-0 xs:space-x-2 min-w-0">
              <span className="text-lg xs:text-xl sm:text-2xl font-black gradient-text-premium drop-shadow-sm truncate">TUF</span>
              <span className="bg-gradient-to-r from-premium-gold to-premium-orange px-2 py-0.5 xs:px-3 xs:py-1 text-xs xs:text-sm rounded-full text-black font-bold shadow-lg truncate">PLUS</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleNavClick(link.id)}
                className={`relative font-semibold transition-all duration-300 px-4 py-2 rounded-xl ${
                  activeSection === link.id
                    ? 'text-premium-gold bg-premium-gold/10 shadow-lg'
                    : 'text-white hover:text-premium-gold hover:bg-white/5'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {link.name}
                {/* Enhanced active indicator */}
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-premium-gold to-premium-orange rounded-full transition-all duration-300 ${
                  activeSection === link.id ? 'w-8 opacity-100' : 'w-0 opacity-0'
                }`} />
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-md bg-white/5 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-premium-gold via-premium-amber to-premium-orange text-black px-6 py-2.5 rounded-full font-bold shadow-2xl hover:shadow-premium-gold/20 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 shimmer"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden backdrop-blur-md bg-white/10 rounded-xl p-2.5 text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 backdrop-blur-xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 space-y-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    variants={mobileItemVariants}
                    onClick={() => handleNavClick(link.id)}
                    className={`block w-full text-left font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                      activeSection === link.id
                        ? 'text-premium-gold bg-premium-gold/10 shadow-lg'
                        : 'text-white hover:text-premium-gold hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.div variants={mobileItemVariants} className="pt-4 space-y-3">
                  <button className="w-full backdrop-blur-md bg-white/5 text-white py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 shadow-lg">
                    Login
                  </button>
                  <button className="w-full bg-gradient-to-r from-premium-gold via-premium-amber to-premium-orange text-black py-3 rounded-xl font-bold shadow-xl transition-all duration-300 relative overflow-hidden group">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 shimmer"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar 