import { useState } from "react";
import "./experience.scss";
import {Mail, GitHub, LinkedIn} from "@material-ui/icons"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: <Mail/>,
      title: "System Administrator ",
      desc:
        "Maintaining the user database, troubleshooting the software and hardware, write automation scripts",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      skills: "Microsoft Azure , Python , Office 360, Powershell  ", 
      company: "SMP", 
      time: "Nov 2019 - Dec 2020"
      },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Backend",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      skills: "Postgresql, test ,something ",
      company: "",
      time: "Nov 2019 - Dec 2020"

    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Wordpress",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      skills: "test, test ,something ",
      company: "SMP",
      time: "Nov 2019 - Dec 2020"
      },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="experience" id="experience">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
   
        {data.map((d) => (
          
          <div className="container">
            
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                
                  <h2>{d.title}</h2>
                  <h4>{d.company}</h4>
                  <p>{d.time}</p>
                </div>
              </div>
              <div className="line">

              </div>
              <div className="right">
                    {d.desc}
                    <div className="skills">
                    <p>{d.skills}</p> 
                    </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
