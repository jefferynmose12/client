import React, { useState } from 'react'
import Contributions from './contributions-components/Contributions'
import Header from './HeaderComponents/Header'
import Intro from './Intro'
import Projects from './project-components/Projects'
import About from './about/About'
import Footer from './footer/Footer'

const LandingPage = () => {
    const [mode, setMode] = useState(false);
  return (
    <div className='mx-auto'>
        <Header mode={mode} />
        <Intro mode={mode} setMode={setMode} />
        <About mode={mode} />
        <Projects mode={mode} />
        <Contributions mode={mode} />
        <Footer />
    </div>
  )
}

export default LandingPage;