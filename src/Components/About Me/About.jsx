import {React, useState, useEffect, useCallback} from 'react'
import "./stars.scss"
import "./about2.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faJava, faReact, faSass, faWordpress, faLinux, faPython} from '@fortawesome/free-brands-svg-icons';
import {skills} from "../../data";
import AnimationIntro  from '../AnimationIntro/AnimationIntro'

import { loadFull } from "tsparticles";
import WordCloud from './WordCloud';


function About() {
const [letterClass, setLetterClass] = useState('text-animate');
const aboutMeArray = ['A', 'b', 'o', 'u', 't',' ','m', 'e']
const skillsArray = ['Java', 'Python', 'React', 'Wordpress', 'Linux']



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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit
               esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</p>
                
          
                 </div>
        <div className="box-right">

        <WordCloud/>

               <div className="skills-icons">
                  </div>
        

      </div>
      
      <a href="#portfolio">
          <img src="assets/arrow.png" alt="" />
        </a>

   
    </div>
    )
}

export default About