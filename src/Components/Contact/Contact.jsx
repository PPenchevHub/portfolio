import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and messageText here if needed

    emailjs
      .send(
        "service_s70jlwq",
        "template_29z3spd",
        { to_email: email, message: messageText },
        "4zzqV3APBQx5QFROY"
      )
      .then(
        (response) => {
          console.log("Email sent:", response);
          setMessage("Thanks, I'll reply ASAP :)");
        },
        (error) => {
          console.error("Error sending email:", error);
          setMessage(
            "Oops! Something went wrong. Please try again later."
          );
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>{message}</span>}
        </form>
      </div>
    </div>
  );
}
