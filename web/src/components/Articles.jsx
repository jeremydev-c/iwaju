import React from 'react'
import { motion } from 'framer-motion'
import './Articles.css'

const Articles = () => {
  const articles = [
    {
      title: "Introducing Iwaju's Plug-and-Play AI: Effortless Content Automation for Entrepreneurs",
      author: "iwajuofficial"
    },
    {
      title: "Transforming Workflows: ChatGPT and Midjourney Integration",
      author: "iwajuofficial"
    }
  ]

  return (
    <section className="articles">
      <div className="articles-container">
        <motion.div
          className="articles-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">From Our Blog</span>
          <h2 className="section-title">
            Latest <span className="gradient-text">Posts</span>
          </h2>
          <p className="section-description">
            We write about AI tools, business tips, and things we've learned along the way.
          </p>
        </motion.div>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="article-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <h3 className="article-title">{article.title}</h3>
              <div className="article-footer">
                <div className="article-author">
                  <span className="author-name">{article.author}</span>
                </div>
              </div>
              <div className="article-glow"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles

