import React from 'react'
import Navbar from './Navbar'
import Section from './Section'
import Headroom from 'react-headroom'

const Home = () => {
  return (
    <div>
      <Headroom>
      <Navbar/>
      </Headroom>
      <Section/>
    </div>
  )
}

export default Home