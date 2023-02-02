import React from 'react'
import nasa from '../assets/nasa.png'


const NavBar = () => {
  const api = "{ APIs }"
  return (
    <div className='navbar'>
      <div className='nasa_logo'>
        <img className='nasa_img' src={nasa} alt="" />
        <h2>{api}</h2>
      </div>
        <span className='coderanchel'>@CoderAnchel</span>
    </div>
  )
}

export default NavBar
