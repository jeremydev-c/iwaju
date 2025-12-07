import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './IwajuAcademy.css'

const IwajuAcademy = () => {
  return (
    <div className="academy-page">
      <section className="academy-hero">
        <div className="academy-hero-background">
          <div className="academy-glow"></div>
        </div>
        <div className="academy-container">
          <motion.div
            className="academy-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="academy-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>Custom AI Solutions Without Coding</span>
            </motion.div>
            <motion.h1
              className="academy-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Iwaju Academy
            </motion.h1>
            <motion.div
              className="academy-price"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="price-label">Price</span>
              <span className="price-amount">NGN 100,000</span>
            </motion.div>
            <motion.div
              className="academy-status"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="status-badge ended">Ended</span>
              <span className="status-location">Location 1</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="academy-content">
        <div className="academy-container">
          <motion.div
            className="academy-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Service Description</h2>
            <div className="description-text">
              <p>
                This course teaches you how to build custom AI solutions without writing code. We'll show you how to use tools like ChatGPT, Midjourney, and other AI platforms to solve real business problems.
              </p>
              <p>
                You'll learn by doing. We'll walk you through setting up AI workflows, automating tasks, and creating solutions that actually work for your business. By the end, you'll know how to build AI tools that save time and money.
              </p>
              <p>
                This course is for business owners, managers, and anyone who wants to use AI but doesn't know where to start. No technical background needed.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="academy-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">Contact Details</h2>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"></div>
                <div className="contact-info">
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Akwa Ibom, Nigeria</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"></div>
                <div className="contact-info">
                  <div className="contact-label">Email</div>
                  <a href="mailto:iwajuofficial@gmail.com" className="contact-value">
                    iwajuofficial@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="academy-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="academy-contact-button"
            >
              <motion.span
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us About This Course
                <span className="cta-arrow">→</span>
              </motion.span>
            </Link>
            <Link to="/services" className="academy-back-link">
              ← Back to Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default IwajuAcademy

