import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div name="contactcontainer" className="contactcontainer">
       <p className="contacttitle">Contact me</p>
       
      <form action="https://formsubmit.co/lifeofmotammo@gmail.com" method="POST">
    <input className='a' type="text" name="Name" placeholder='Name' required></input>
    <input className='a' type="email" name="email" placeholder='Email' required></input>
 <textarea className='a a2' name="message" placeholder='Message' required></textarea>
 <button className='b'  name="submit" type="submit">Submit</button>
      </form>
      </div>
      
  )
}

export default Contact