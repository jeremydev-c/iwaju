import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}></div>
          ))}
        </div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content hero-content-centered"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-badge"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <span>Forward. Always.</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={itemVariants}
          >
            Accelerating Africa's
            <span className="gradient-text"> AI Future</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            We build intelligent systems that enhance productivity, unlock creativity, and empower the next generation of African innovators.
          </motion.p>

          <motion.div
            className="hero-cta"
            variants={itemVariants}
          >
            <motion.button
              className="cta-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(124, 77, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/services'}
            >
              See What We Offer
              <span className="cta-arrow">→</span>
            </motion.button>
            <motion.button
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Talk to Us
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  )
}

export default Hero

