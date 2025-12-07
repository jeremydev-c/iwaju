import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Articles from '../components/Articles'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="page">
      <Hero />
      <Services />
      <About />
      <Articles />
      <Contact />
    </div>
  )
}

export default Home

