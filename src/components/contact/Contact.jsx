import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {

  const [message, setMessage] = useState(false)
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('gmail', 'template_re7koij', form.current, 'user_S6AqgtUNvZOU6pOAXOkNN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

//   const handleSubmit = (e) => {
//   e.preventDefault()
//   setMessage(true)
// }

  return <div className="contact" id="contact">
    <div className="left">
      <img src="assets/shake.jpeg" alt="" />
    </div>
    <div className="right">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email"/>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
        {message && <span>Thanks! Follow up on <a href="https://www.linkedin.com/in/josephtroina/">LinkedIn</a> too! :)</span>}
      </form>
    </div>
  </div>;
} 
