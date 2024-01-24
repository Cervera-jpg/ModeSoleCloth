import React, { useState } from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const templateParams = {
      to_email: email,
    };
    emailjs
      .send(
        "service_muuk32d",
        "template_tm3sbr4",
        templateParams,
        "-hrqVZovj-wv4M5au"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Subscription successful!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Subscription failed. Please try again later.");
        }
      );
  };

  return (
    <div className="newsletter">
      <h1>Get Special Offers on Your Email</h1>
      <p>Subscribe to our newsletter to stay tuned</p>
      <div>
        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default Email;
