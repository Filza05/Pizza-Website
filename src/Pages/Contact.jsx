import React from 'react'
import "../Styles/Contact.css"
import bannerImage from "../Assets/pizzaLeft.jpg"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${bannerImage})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name...' type="text"></input>
                <label htmlFor='email'>Full Name</label>
                <input name='email' placeholder='Enter Your Email...' type="email"></input>
                <label htmlFor='message'>Message</label>
                <textarea rows="6" placeholder="Enter Message" name='message' required></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact