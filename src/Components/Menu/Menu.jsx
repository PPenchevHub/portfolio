import React from 'react'
import './menu.scss'

function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && "active")} id='menu'>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#intro">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#aboutme">About me</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#contact">Contact</a>
            </li>
        </ul>


    </div>
  )
}

export default Menu