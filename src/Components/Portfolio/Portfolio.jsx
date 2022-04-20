import React, { useEffect, useState } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList';
import './portfolio.scss'
import {AllPortfolio, 
  JavaPortfolio, 
  ReactPortfolio,
   WordpressPortfolio} from "../../data"

function Portfolio() {
  const [selected, setSelected] = useState("all") 
  const [data, setData] = useState([])
  const list = [
    {
      id:"all",
      title: "All",
    }, 
    {
      id:"java",
      title: "Java",
    },
    {
      id:"React",
      title: "React",
    },
    {
      id:"Wordpress",
      title: "Wordpress",
    },

  ];
  useEffect(() =>{
    switch (selected) {
      case "all":
        setData(AllPortfolio);
        break;
        case "java":
          setData(JavaPortfolio);
        break;
        case "React":
          setData(ReactPortfolio);
        break;
        case "Wordpress":
          setData(WordpressPortfolio);
        break;
    
      default: setData(AllPortfolio);
        break;
    }
  },[selected])

  return (
    <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
            {list.map((item) => (
            <PortfolioList title={item.title} 
                          active={selected === item.id}
                          setSelected={setSelected}
                          id={item.id}/>
            ))}
        </ul>
        <div className="container">
              {data.map((d) =>(
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
              ))}

        </div>

    </div>
  )
}

export default Portfolio