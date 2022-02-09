import { useState } from "react"
import "./works.scss"

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

const data = [
  {
    id: 1,
    icon: "assets/code.png",
    title: "Web Development",
    desc: "Currently on Year 2 of React and JavaScript. I specialize in Frontend development, while using Node.js for my fullstack projects.",
    img: "assets/sample.png",
    src: "https://github.com/stars/jtroina8/lists/web-development",
},
{
    id: 2,
    icon: "assets/mobile.png",
    title: "Mobile Development",
    desc: "SwiftUI and React Native have been a second calling for me. The world of mobile development is a guilty pleasure!",
    img: "assets/mobiledev.jpeg",
    src: "https://github.com/stars/jtroina8/lists/mobile-development",
},
{
    id: 3,
    icon: "assets/camera.png",
    title: "Video Editing",
    desc: "I've been working with Adobe Premiere Pro for about 10 years, specializing in Sports and Gaming Videography.",
    img: "assets/videoedit.jpeg",
    src: "https://www.youtube.com/channel/UCCXrK_khQVkR_ouo0wwkRUw",
},
]

const handleClick = (way) => {
  way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
  setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
}

  return <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}
                </p>
                <a href={d.src}>
                <span>Projects</span>
                </a>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
  </div>;
}
