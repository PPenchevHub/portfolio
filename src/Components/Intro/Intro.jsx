import React, { useEffect, useState } from 'react'
import AnimationIntro  from '../AnimationIntro/AnimationIntro'
import './intro.scss'

function Intro() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['P', 'l', 'a', 'm', 'e', 'n', ',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    ',',
  ]
  const jobArray2 = [
    'f',
    'r',
    'e',
    'e',
    'l',
    'a',
    'n',
    'c',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  

  return (
    <div className='intro' id='intro'>
    
      <div className="right">
        <div className="wrapper">

           <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>  
            <span> </span>
            <AnimationIntro
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            
            <br />
            <AnimationIntro
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimationIntro
              letterClass={letterClass}
              strArray={jobArray2}
              idx={32}
            />
          </h1>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>

      </div>
      <div className="left">
        <div className="imgContainer">
            <img src='./assets/Headshot.png' alt='pic of me'></img>
        </div>
      </div>
    </div>
  )
}

export default Intro