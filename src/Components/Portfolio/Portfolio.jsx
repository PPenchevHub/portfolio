import React, { useEffect, useState } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList';
import './portfolio.scss'
import { AllPortfolio, JavaPortfolio, ReactPortfolio, WordpressPortfolio } from "../../data"
import Popup from './Popup';
import AnimationIntro from '../AnimationIntro/AnimationIntro';

function Portfolio() {
  const [selected, setSelected] = useState("all") 
  const [data, setData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const [letterClass, setLetterClass] = useState('text-animate');
  const aboutMeArray = ['P', 'o', 'r', 't', 'f','o','l', 'i','o']

  const list = [
    // {
    //   id:"all",
    //   title: "All",
    //   key: "1",
    // }, 
    {
      id:"backend",
      title: "Backend",
      key: "2",
    },
    {
      id:"frontend",
      title: "Frontend",
      key: "3",
    },
    {
      id:"wordpress",
      title: "Wordpress",
      key: "4",
    },
  ];

  useEffect(() =>{
    switch (selected) {
     // case "all":
       // setData(JavaPortfolio.concat(ReactPortfolio, WordpressPortfolio));
        //break;
      case "backend":
        setData(JavaPortfolio);
        break;
      case "frontend":
        setData(ReactPortfolio);
        break;
      case "wordpress":
        setData(WordpressPortfolio);
        break;
      default:
        setData(AllPortfolio);
        break;
    }
  },[selected])

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  function handleItemClick(item) {
    setSelectedItem(item);
  }

  function handleClosePopup() {
    setSelectedItem(null);
  }

  return (
    <div className='portfolio'>
     <h1>  <AnimationIntro
              letterClass={letterClass}
              strArray={aboutMeArray}
              idx={15}
            /></h1>      <ul>
        {list.map((item) => (
          <PortfolioList 
            key={item.id}
            title={item.title} 
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) =>(
          <div key={d.title} className="item" onClick={() => handleItemClick(d)}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      {selectedItem && (
        <Popup selectedItem={selectedItem} handleClosePopup={handleClosePopup} />
      )}
    </div>
  )
}

export default Portfolio
