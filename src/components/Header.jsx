
import React from 'react'
import { Link } from 'react-router-dom'
import Particles from './Particles'
import {ReactTyped} from 'react-typed'
import './header.css'
import MapContainerr from './MapContainer'
import Navbar from './Navbar'
const Header = () => {
  
  return (
    <>
   
    <section id='home' className='header-wrapper'>
      
      <Particles />
      <div className='main-info'>
        <h1 className='h1-header'> The Land Of Gold</h1>
        <ReactTyped
          className='typed-text'
          strings={[
            'Magic Vilages',
            'River Nile Source',
            'Nubian Life',
            'Temples',
            'Ancient Egyptian Growth',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
          />
        <Link  to="landscapes"  className='btn-main-offer' spy={true} smooth={true} offset={50} duration={500}>Discover Now</Link>
        <MapContainerr/>
      </div>
    </section>
          </>
  )
}

export default Header