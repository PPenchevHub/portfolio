import {React, useState, useEffect} from 'react'
import "./about2.scss"
import AnimationIntro from "../AnimationIntro/AnimationIntro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faJava, faReact, faCss3, faSass, faWordpress, faLinux, faPython} from '@fortawesome/free-brands-svg-icons';

function About() {
const [letterClass, setLetterClass] = useState('text-animate');

useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


  return (
    <div className="section">
        <div className="box-left">
            <div className="aboutMe">
                <h1>
                    <AnimationIntro
                        letterClass={letterClass}
                        strArray={['W','h','o',' ','I',' ','a','m']}
                        idx={15}
                    />

                </h1>
                <p className='desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </p>
                    <button className='download-btn'>Download CV </button>
            </div>
        </div>
        <div className="box-right">
            <div className="skillContainer">
                      
                            <span><i>
                            <FontAwesomeIcon icon={faPython} />
                            </i>
                            </span>
                            <span><i>
                            <FontAwesomeIcon icon={faJava} />
                            </i>
                            </span> 
                            <span><i>
                            <FontAwesomeIcon icon={faReact} />
                            </i>
                            </span>    <span><i>
                            <FontAwesomeIcon icon={faSass} />
                            </i>
                            </span>    <span><i>
                            <FontAwesomeIcon icon={faWordpress} />
                            </i>
                            </span> 
                            <span><i>
                            <FontAwesomeIcon icon={faLinux} />
                            </i>
                            </span>
                            <span><i>
                            <FontAwesomeIcon icon={faLinux} />
                            </i>
                            </span>
                            <span><i>
                            <FontAwesomeIcon icon={faLinux} />
                            </i>
                            </span>
                            <span><i>
                            <FontAwesomeIcon icon={faLinux} />
                            </i>
                            </span>
                    
                                         
            </div>
        </div>
    </div>
    )
}

export default About