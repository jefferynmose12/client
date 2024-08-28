import React from 'react'
import Header from './HeaderComponents/Header'
import Intro from './Intro'
import Projects from './project-components/Projects'
import About from './about/About'
import Footer from './footer/Footer'

const LandingPage = () => {
    
  return (
    <div className='mx-auto'>
        <Header  />
        <Intro />
        <About />
        <Projects />
        {/* <Contributions /> */}
        <Footer />
    </div>
  )
}

export default LandingPage;