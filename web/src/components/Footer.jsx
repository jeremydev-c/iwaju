import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'SnapBear', href: '/snapbear' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'Accessibility Statement', href: '#' }
    ]
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-logo-container">
              <img 
                src="/assets/iwaju-logo.jpeg" 
                alt="Iwaju Logo" 
                className="footer-logo-image"
              />
              <h3 className="footer-logo">Iwaju</h3>
            </div>
            <p className="footer-tagline">
              We help businesses use AI tools to get work done faster and better.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="footer-newsletter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-column-title">Stay Updated</h4>
            <p className="newsletter-description">
              Get updates about new services, tips, and what we're working on.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <motion.button
                type="submit"
                className="newsletter-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} by Iwaju. All rights reserved.
          </p>
          <p className="footer-powered">
            Built with care in Akwa Ibom, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

