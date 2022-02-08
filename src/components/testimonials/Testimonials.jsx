import "./testimonials.scss"

export default function Testimonials() {

const data = [
  {
    id: 1,
    name: "Billy Vabrenskas",
    title: "Senior Developer",
    img: "assets/man.png",
    icon: "assets/GHlogo.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Kenny Okafreky",
    title: "Senior Developer",
    img: "assets/man.png",
    icon: "assets/GHlogo.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    featured: true,
  },
  {
    id: 3,
    name: "Michael Tro",
    title: "Senior Developer",
    img: "assets/man.png",
    icon: "assets/GHlogo.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
          <img src={d.icon} alt="" className="right" />
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
