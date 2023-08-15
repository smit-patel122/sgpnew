import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your axios logic here to send the message to the backend if needed
    // For this cleaned version, I've removed the backend-related code
    setReply('Your message sent successfully');
  };

  return (
    <>
      <div className="reg_head">
        <div className="common-heading">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="container11">
        <div className="contact-top">
          <div className='cnt-img'>
            <img src="360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg" alt="" />
          </div>
          <div className='cnt-con'>
            <p className="about-info-top">
              Google Developer Group Jalandhar is inspired by GTUG/GDG Family. We
              started our journey in Feb 2011. We try to engage student developers,
              fresh graduates, and professionals through our hack events & meetups.
              The motive is to create a local ecosystem of programmers & hackers in
              and around Jalandhar. Technology awareness is the main goal for the
              first few years of the group.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt" />
              <div className="topic">Address</div>
              <div className="text-one">Surkhet, NP12</div>
              <div className="text-two">Birendranagar 06</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt" />
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope" />
              <div className="topic">Email</div>
              <div className="text-one">xyz@gmail.com</div>
              <div className="text-two">abc@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <form action="#" encType="multipart/form-data" className="form">
              <div className="input-box message-box">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder='Enter your Message'
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div className="button">
                <input type="button" onClick={handleSubmit} defaultValue="Send Now" />
              </div>
              <div style={{ color: "green", marginTop: "10px" }}>
                {reply}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
