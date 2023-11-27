import {React, useState, useEffect } from 'react'
//import "./stars.scss"
import "./about2.scss"
import AnimationIntro  from '../AnimationIntro/AnimationIntro'

import WordCloud from './WordCloud';


function About() {
const [letterClass, setLetterClass] = useState('text-animate');
const aboutMeArray = ['A', 'b', 'o', 'u', 't',' ','m', 'e']


useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="section route bg-image background" id='aboutme'>
       <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
          
        
                  
        <div className="box-left">
            <h1>  <AnimationIntro
              letterClass={letterClass}
              strArray={aboutMeArray}
              idx={15}
            /></h1>
            <p>Hey there! I'm a friendly software developer from Bulgaria specializing 
               in web applications and beautiful websites. I love tackling challenging 
               problems and constantly learning new languages and technologies.
               Crafting innovative solutions and creating user-friendly experiences is 
               my passion. I thrive in collaborative environments and believe in the power
               of effective communication.
               Let's connect and create amazing software together!
            </p>
            <a href="#contact"> <button className="btn-download">Hire me </button></a>
           <a href="./assets/PlamenPenchev.pdf"><button className="btn-download">Resume</button></a>
                 </div>
        <div className="box-right">

        <WordCloud/>

               <div className="skills-icons">
                  </div>
        

      </div>
      
      <a href="#portfolio" className='arrow'>
          <img src="assets/arrow.png" alt="" />
        </a>

   
    </div>
    )
}

export default About