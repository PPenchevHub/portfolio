import {React, useState, useEffect} from 'react'
import "./about.scss"
import AnimationIntro from "../AnimationIntro/AnimationIntro";


function About() {
const [letterClass, setLetterClass] = useState('text-animate');

useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


  return (
    <div className="section">
        <div className="box left">
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
        <div className=" box right">
        <h3 className='title'>My Skills</h3>
            <div className="skillContainer">
                    
                    <ul>
                        <h3 className='prof'>Frontend</h3>
                        <li>Html</li>
                        <li>CSS</li>
                        <li>Sass</li>
                        <li>javascript</li>         
                        <li>React</li>
                    </ul>
                    <ul>
                        <h3 className='prof'>Backend</h3>
                        <li>Linux</li>
                        <li>Java</li>
                        <li>Nodejs</li>
                        <li>Postgreqsl</li>
                        <li>MySql</li>
                    </ul>
                    <ul>
                        <h3 className='prof'>Others</h3>
                        <li>Wordpress</li>
                        <li>Woocommerce</li>
                        <li>Divi</li>
                    </ul>
            </div>
        </div>
    </div>
    )
}

export default About