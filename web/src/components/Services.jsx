import React from 'react'
import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const services = [
    {
      title: 'AI Integration & Automation',
      price: 'NGN 200,000',
      buttonText: 'Book Now',
      icon: null,
      gradient: 'gradient-1',
      description: 'We help people and small businesses deploy practical AI solutions that simplify work, enhance creativity, and increase output.'
    },
    {
      title: 'Iwaju Academy',
      price: 'NGN 100,000',
      buttonText: 'View Course',
      icon: null,
      gradient: 'gradient-2',
      link: '/iwaju-academy',
      description: 'We train young Africans in AI usage, automation systems, prompt engineering, workflow optimization, and modern productivity.'
    },
    {
      title: 'AI-Powered Product Development',
      price: 'Contact Us',
      buttonText: 'Learn More',
      icon: null,
      gradient: 'gradient-3',
      description: 'We design and build innovative digital tools that solve real problems fast, scalable, and human-centered.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">What We Do</span>
          <h2 className="section-title">
            Services We
            <span className="gradient-text"> Offer</span>
          </h2>
          <p className="section-description">
            Here's what we can help you with. Each service is designed to solve real problems and save you time.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card ${service.gradient}`}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon && <div className="service-icon">{service.icon}</div>}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                {service.description && (
                  <p className="service-description">{service.description}</p>
                )}
                <div className="service-price">{service.price}</div>
                <motion.button
                  className="service-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = service.link || '/contact'}
                >
                  {service.buttonText}
                </motion.button>
              </div>
              <div className="service-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

