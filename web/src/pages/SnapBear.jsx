import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './SnapBear.css'

const SnapBear = () => {
  const features = [
    {
      icon: null,
      title: 'Upload Your Samples',
      description: 'Upload samples of your writing. We use them to learn your style so the posts we create sound like you wrote them.'
    },
    {
      icon: null,
      title: 'AI-Powered Generation',
      description: 'Tell us what you want to post about, and we\'ll create content that fits your brand and the platform you\'re using.'
    },
    {
      icon: null,
      title: 'Multi-Platform Ready',
      description: 'We create posts for Instagram, LinkedIn, Twitter, and other platforms. Each one is written to work well on that specific platform.'
    },
    {
      icon: null,
      title: 'Instant Results',
      description: 'Get posts ready to publish in seconds. No more blank page syndrome or spending forever trying to come up with something.'
    },
    {
      icon: null,
      title: 'Brand Consistency',
      description: 'All your posts will sound like they came from the same person. We keep your voice consistent so your brand stays recognizable.'
    },
    {
      icon: null,
      title: 'Content Library',
      description: 'Save all the posts you create in one place. Build up a library so you always have content ready when you need it.'
    }
  ]

  const benefits = [
    'Save hours of content creation time',
    'Maintain consistent brand voice',
    'Generate multiple post variations instantly',
    'Never run out of content ideas',
    'Professional-quality posts every time'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="snapbear-page">
      {/* Hero Section */}
      <section className="snapbear-hero">
        <div className="snapbear-hero-background">
          <div className="snapbear-glow"></div>
        </div>
        <div className="snapbear-hero-container">
          <motion.div
            className="snapbear-hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="snapbear-badge"
              variants={itemVariants}
            >
              <span>AI-Powered Content Creation</span>
            </motion.div>
            <motion.h1
              className="snapbear-title"
              variants={itemVariants}
            >
              SnapBear
            </motion.h1>
            <motion.p
              className="snapbear-tagline"
              variants={itemVariants}
            >
              Create social media posts that sound like you, without spending hours writing them.
            </motion.p>
            <motion.p
              className="snapbear-description"
              variants={itemVariants}
            >
              SnapBear learns how you write and creates posts for Instagram, LinkedIn, Twitter, and other platforms. 
              It saves you time and keeps your voice consistent across all your content.
            </motion.p>
            <motion.div
              className="snapbear-cta"
              variants={itemVariants}
            >
              <motion.button
                className="snapbear-cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Coming Soon
                <span className="cta-arrow">→</span>
              </motion.button>
              <motion.button
                className="snapbear-cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="snapbear-features">
        <div className="snapbear-container">
          <motion.div
            className="snapbear-section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Features</span>
            <h2 className="section-title">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="section-description">
              Here's what SnapBear does and why it might be useful for you.
            </p>
          </motion.div>

          <motion.div
            className="snapbear-features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="snapbear-feature-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {feature.icon && <div className="feature-icon-large">{feature.icon}</div>}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="snapbear-benefits">
        <div className="snapbear-container">
          <div className="snapbear-benefits-content">
            <motion.div
              className="snapbear-benefits-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">Benefits</span>
              <h2 className="section-title">
                Why Use <span className="gradient-text">SnapBear</span>
              </h2>
              <p className="section-description">
                Here's what you get when you use SnapBear for your social media content.
              </p>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="benefit-check"></span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="snapbear-benefits-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Coming Soon
                <span className="cta-arrow">→</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="snapbear-benefits-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="snapbear-video-container">
                <video
                  className="snapbear-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster=""
                >
                  <source src="/assets/snapbear-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snapbear-cta-section">
        <div className="snapbear-container">
          <motion.div
            className="snapbear-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="snapbear-cta-title">
              Want to Try It Out?
            </h2>
            <p className="snapbear-cta-description">
              SnapBear is coming soon. Get in touch if you want to be notified when it's ready.
            </p>
            <motion.button
              className="snapbear-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Coming Soon
              <span className="cta-arrow">→</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SnapBear

