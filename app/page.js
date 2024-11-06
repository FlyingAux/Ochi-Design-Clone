import React from 'react'
import Navbar from './Components/navbar'
import Landing from './Components/Landing'
import Marquee from './Components/marquee'
import About from './Components/About'

const page = () => {
  return (
    <>
    <Navbar/>
    <Landing/>
    <Marquee/>
    <About/>
    </>
  )
}

export default page