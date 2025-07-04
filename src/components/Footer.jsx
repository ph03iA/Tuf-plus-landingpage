import React from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Github,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    Platform: [
      { name: 'DSA Problems', href: '#' },
      { name: 'System Design', href: '#' },
      { name: 'Mock Interviews', href: '#' },
      { name: 'Contests', href: '#' },
      { name: 'Courses', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Investors', href: '#' }
    ],
    Resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Status', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Refund Policy', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter size={24} />, href: '#', color: 'hover:text-premium-gold' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, href: '#', color: 'hover:text-premium-gold' },
    { name: 'YouTube', icon: <Youtube size={24} />, href: '#', color: 'hover:text-premium-gold' },
    { name: 'Instagram', icon: <Instagram size={24} />, href: '#', color: 'hover:text-premium-gold' },
    { name: 'GitHub', icon: <Github size={24} />, href: '#', color: 'hover:text-premium-gold' }
  ]

  const achievements = [
    '🏆 #1 Interview Prep Platform',
    '🚀 50,000+ Success Stories',
    '⭐ 4.9/5 User Rating',
    '🎯 95% Success Rate'
  ]

  return (
    <footer className="bg-gradient-to-b from-tuf-dark to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-max relative z-10">
        {/* Achievements Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 border-b border-premium-gold/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-white font-bold text-base sm:text-lg floating-element"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {achievement}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-premium-gold via-premium-amber to-premium-orange rounded-xl flex items-center justify-center shadow-xl">
                  <span className="text-black font-black text-lg">TU</span>
                </div>
                <span className="text-white font-black text-2xl sm:text-3xl">TakeUForward</span>
                <span className="bg-gradient-to-r from-premium-gold to-premium-orange px-3 py-1 text-sm rounded-full text-black font-bold">PLUS</span>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-base sm:text-lg">
                Empowering engineers worldwide with the best interview preparation platform. 
                Join thousands who've transformed their careers with us.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 text-gray-300 text-base sm:text-lg">
                  <Mail size={20} className="text-premium-gold" />
                  <span>support@takeuforward.org</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 text-base sm:text-lg">
                  <Phone size={20} className="text-premium-gold" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 text-base sm:text-lg">
                  <MapPin size={20} className="text-premium-gold" />
                  <span>Bangalore, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full glass-premium flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-bold text-lg sm:text-xl mb-6">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-premium-gold transition-all duration-300 text-base sm:text-lg font-semibold hover:scale-105 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-10 border-t border-premium-gold/30 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-3 text-gray-300 mb-6 md:mb-0 text-base sm:text-lg font-semibold">
            <span>© 2024 TakeUForward. Made with</span>
            <Heart size={20} className="text-premium-gold fill-current animate-pulse" />
            <span>in India</span>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3 text-gray-300 text-base sm:text-lg font-semibold">
              <div className="w-3 h-3 rounded-full bg-premium-gold animate-pulse"></div>
              <span>Trusted by 100K+ developers</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-premium-gold to-premium-orange flex items-center justify-center text-black hover:shadow-lg transition-all duration-300 glow-premium"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 