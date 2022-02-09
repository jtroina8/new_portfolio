import "./testimonials.scss"

export default function Testimonials() {

const data = [
  {
    id: 1,
    name: "Kenneth Okereke",
    title: "Product Designer at Prudential",
    img: "assets/kenny.jpeg",
    icon: "assets/LIlogo.png",
    desc: "Joey is the type of person you want on your team. He's positive, smart, and always contributes when he can. His creative ideas and problem solving skills were always very helpful.",
    src: "https://www.linkedin.com/in/kenneth-okereke-8a0b1991/",
  },
  {
    id: 2,
    name: "Billy Vabrinskas",
    title: "Senior iOS Engineer at Uber",
    img: "assets/billy.jpeg",
    icon: "assets/LIlogo.png",
    desc: "I've personally seen the dedication Joey puts into his work. When he puts his mind to it, he always seems to surpass expectations. We've spent hours talking about code ideas, ways to approach algorithm questions, and whiteboarding. He's always willing to learn and listen.",
    featured: true,
    src: "https://www.linkedin.com/in/william-vabrinskas-31b307a8/",
  },
  {
    id: 3,
    name: "Joseph Frasier",
    title: "Lead Instructor at DigitalCrafts",
    img: "assets/joFra.jpeg",
    icon: "assets/LIlogo.png",
    desc: "As Joey's mentor, I have been able to see the hard work he puts in. His growth in such a short amount of time has been impressive, and his potential is endless. A company will be lucky to have him.",
    src: "https://www.linkedin.com/in/%F0%9F%94%A5-joseph-frasier-52243129/",
  },
]

  return <div className="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div className="container">
      {data.map((d) => (
      <div className={d.featured ? "card featured" : "card"}>
        <div className="top">
          <img src="assets/right-arrow.png" className="left" alt="" />
          <img src={d.img} alt="" className="user" />
          <a href={d.src}><img src={d.icon} alt="" className="right" /></a>
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
  </div>;
} 
