import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Layers, 
  Zap, 
  ChevronRight, 
  CheckCircle,
  Clock,
  Trophy,
  BookOpen
} from 'lucide-react'

const Syllabus = () => {
  const [activeTrack, setActiveTrack] = useState(0)

  const tracks = [
    {
      id: 0,
      title: 'DSA Mastery',
      icon: <Code size={24} />,
      color: 'from-blue-500 to-blue-600',
      description: 'Complete Data Structures & Algorithms curriculum',
      duration: '12 weeks',
      problems: '450+',
      topics: [
        'Arrays & Strings',
        'Linked Lists',
        'Stacks & Queues',
        'Trees & Graphs',
        'Dynamic Programming',
        'Greedy Algorithms',
        'Backtracking',
        'Advanced Topics'
      ]
    },
    {
      id: 1,
      title: 'System Design',
      icon: <Layers size={24} />,
      color: 'from-green-500 to-green-600',
      description: 'Scalable system architecture and design patterns',
      duration: '8 weeks',
      problems: '150+',
      topics: [
        'Scalability Principles',
        'Database Design',
        'Caching Strategies',
        'Load Balancing',
        'Microservices',
        'Message Queues',
        'Real-world Systems',
        'Case Studies'
      ]
    },
    {
      id: 2,
      title: 'Database & SQL',
      icon: <Database size={24} />,
      color: 'from-purple-500 to-purple-600',
      description: 'Database concepts and SQL optimization',
      duration: '6 weeks',
      problems: '200+',
      topics: [
        'SQL Fundamentals',
        'Complex Queries',
        'Database Design',
        'Indexing & Optimization',
        'NoSQL Databases',
        'ACID Properties',
        'Transactions',
        'Performance Tuning'
      ]
    },
    {
      id: 3,
      title: 'Behavioral',
      icon: <Trophy size={24} />,
      color: 'from-orange-500 to-orange-600',
      description: 'Communication and leadership skills',
      duration: '4 weeks',
      problems: '100+',
      topics: [
        'STAR Method',
        'Leadership Stories',
        'Conflict Resolution',
        'Team Collaboration',
        'Project Management',
        'Cultural Fit',
        'Salary Negotiation',
        'Follow-up Strategies'
      ]
    }
  ]

  const companies = [
    'Google', 'Amazon', 'Microsoft', 'Apple', 'Meta',
    'Netflix', 'Tesla', 'Uber', 'Airbnb', 'Spotify'
  ]

  return (
    <section id="syllabus" className="section-padding bg-tuf-dark">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 leading-tight">
            Comprehensive{' '}
            <span className="gradient-text-premium relative">
              Learning Tracks
              <div className="absolute -inset-2 bg-gradient-to-r from-premium-gold/20 to-premium-orange/20 rounded-lg blur-xl"></div>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Curated syllabus covering every aspect of technical interviews. 
            From fundamentals to advanced topics, we've got you covered.
          </p>
        </motion.div>

        {/* Track Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {tracks.map((track, index) => (
            <motion.button
              key={track.id}
              onClick={() => setActiveTrack(track.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-2xl transition-all duration-500 ${
                activeTrack === track.id
                  ? 'glass-premium border-2 border-premium-gold glow-premium'
                  : 'glass border border-white/20 hover:border-premium-gold/50 hover:scale-105'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center text-white mb-4 mx-auto shadow-lg hover:scale-110 transition-transform duration-300`}>
                {track.icon}
              </div>
              <h3 className="text-white font-bold text-lg">{track.title}</h3>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={activeTrack}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-premium rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Track Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tracks[activeTrack].color} flex items-center justify-center text-white mr-6 shadow-xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                  <div className="relative z-10">{tracks[activeTrack].icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{tracks[activeTrack].title}</h3>
                  <p className="text-gray-300 sm:text-lg">{tracks[activeTrack].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-premium-gold" />
                  <span className="text-white font-bold text-base sm:text-lg">{tracks[activeTrack].duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-premium-gold" />
                  <span className="text-white font-bold text-base sm:text-lg">{tracks[activeTrack].problems} Problems</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-premium-gold via-premium-amber to-premium-orange text-black px-8 py-4 rounded-xl font-bold flex items-center glow-premium hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Learning</span>
                <ChevronRight className="ml-3 w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-premium-orange to-premium-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 shimmer"></div>
              </motion.button>
            </div>

            {/* Topics List */}
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-8">What You'll Learn</h4>
              <div className="space-y-3">
                {tracks[activeTrack].topics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <CheckCircle className="w-6 h-6 text-premium-gold flex-shrink-0" />
                    <span className="text-gray-300 font-semibold text-lg">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Prep for Top Companies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/10 rounded-full text-gray-300 font-medium hover:bg-tuf-orange/20 hover:text-white transition-all duration-300"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Syllabus 