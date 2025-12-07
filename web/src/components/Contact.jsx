import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Resend API endpoint
      // Note: In production, this should be a backend endpoint to keep API key secure
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY || 'YOUR_RESEND_API_KEY'}`
        },
        body: JSON.stringify({
          from: 'Iwaju Website <onboarding@resend.dev>', // Update with your verified domain
          to: ['iwajuofficial@gmail.com'],
          subject: 'New Contact Form Submission from Iwaju Website',
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          `,
          reply_to: formData.email
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }
      
      // Success
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Email sending failed:', err)
      setError('Failed to send message. Please try again or email us directly at iwajuofficial@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: null,
      label: 'Email',
      value: 'iwajuofficial@gmail.com',
      link: 'mailto:iwajuofficial@gmail.com'
    },
    {
      icon: null,
      label: 'Phone',
      value: '07070222958',
      link: 'tel:+2347070222958'
    },
    {
      icon: null,
      label: 'Address',
      value: 'Barracks Rd, Street 6, Akwa Ibom St. Uyo',
      link: null
    }
  ]


  return (
    <section className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Want to <span className="gradient-text">Work Together?</span>
          </h2>
          <p className="section-description">
            Have a question or want to see how we can help? Drop us a message and we'll get back to you.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link || '#'}
                  className="contact-info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {info.icon && <div className="info-icon">{info.icon}</div>}
                  <div className="info-content">
                    <div className="info-label">{info.label}</div>
                    <div className="info-value">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project..."
                rows="6"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="form-submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>

            {error && (
              <motion.div
                className="form-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}

            {submitted && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent to iwajuofficial@gmail.com. We'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

