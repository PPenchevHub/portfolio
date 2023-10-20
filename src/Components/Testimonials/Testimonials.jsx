import "./testimonials.scss";
import "../About Me/stars.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mark Griznyk",
      title: "Caro-shop",    
      img:"assets/man.png",
      desc:
        "Working with Plamen is a huge pleasure, because of his skill to explain complex technical problems and solutions even to non-technical people. ",
    },
    {
      id: 2,
      name: "Sabine Schuttelmeyer ",
      title: "Schnittker Möllmann Partners",
      img: "assets/user.png",
      desc:
        "Plamen has exceeded our expectations in terms of his technical expertise, professionalism, and willingness to go above and beyond. I would highly recommend him to any organization looking for a skilled IT professional.",
      featured: true,
    },
    {
      id: 3,
      name: "Dorota Kot",
      title: "Kollek-tief",
      img: "assets/woman.png",
      desc:
      "Plamen is  an excellent communicator and collaborator. They have been an asset to our team, contributing , sharing knowledge, and always willing to lend a helping hand",
    },
    
  ];
  return (
    <div className="testimonials route bg-image background" id="testimonials">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
