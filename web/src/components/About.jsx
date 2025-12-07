import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Who We Are</span>
            <h2 className="section-title">
              About <span className="gradient-text">Iwaju</span>
            </h2>
            <p className="about-description">
              Iwaju is a next-generation African AI and automation company built to accelerate human potential. 
              We create intelligent systems that enhance productivity, unlock creativity, and empower the next generation of innovators.
            </p>
            <p className="about-description">
              Our work sits at the intersection of AI integration, automation systems, product innovation, youth empowerment, 
              and community-driven execution. We're building the foundation for Africa's AI future—one tool, one product, 
              and one young innovator at a time.
            </p>
            <p className="about-description">
              Our mission is to make world-class AI and automation accessible to every African student, creator, 
              entrepreneur, and community. We want young Africans to build faster, learn smarter, and live more empowered 
              lives through intelligent digital systems.
            </p>
            <motion.a
              href="#"
              className="about-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <span className="cta-arrow">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

