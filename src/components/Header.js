import React from 'react'
import './Header.css'
import headerbackgroundimage from '../assets/headerimage.jpg'

import {Link} from 'react-scroll'


const Header = () => {
  return (
    <div className="headercontainer">
      <img src={headerbackgroundimage} alt="/"/>
    <div className="thecontent">
<p className="myname">Mohamed Tamer</p>
<p className="myname2">"Front end Developer"</p>


  <div className="thenavbuttons">
    <Link to='projects' smooth={true} duration={700}><button>My Work</button></Link> 
    <Link to='resume' smooth={true} duration={700}><button>Resume</button></Link> 
    <Link to='contactcontainer' smooth={true} duration={700}><button>Contact me</button></Link> 
    
  </div>





    </div>





      
      
      </div>
  )
}

export default Header