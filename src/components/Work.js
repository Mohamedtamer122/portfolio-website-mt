import React from 'react'
import './Work.css'
import {Link} from 'react-scroll'
import weatherimage from '../assets/weatherwebsiteimage.jpg'
import bookmeimage from '../assets/bookmeimage.jpg'
import virtualkeyboard from '../assets/virtualkeyboard.jpg'
const Work = () => {

const weatherforecasturl="https://mohamedtamer122.github.io/weatherfullwebsite/"
const weatherforecastcode="https://github.com/Mohamedtamer122/weatherfullwebsite.git"

const bookemewebsiteurl="https://mohamedtamer122.github.io/Bookme-modifiedwebsite/"
const bookmewebsitecode="https://github.com/Mohamedtamer122/Bookme-modifiedwebsite.git"


const virtualkeyboardurl="https://mohamedtamer122.github.io/Virtual-Keyboard/"
const virtualkeyboardcode="https://github.com/Mohamedtamer122/Virtual-Keyboard.git"

  return (
    <div name="projects" className="workcontainer">
      <p className="sectiontitle">Projects</p>
    
      <div className="projectsboxescontainer">
        
       <div className='project'>
        <img className="innerimage" src={weatherimage} alt="/"/>
        <div className="innercontent">
       <p className='sectionprojecttitle'>Weather Forecast Website</p>

       <a href={weatherforecasturl}><button>View Project</button></a>
       <a href={weatherforecastcode}><button>View Code</button> </a>
       </div>
       </div>
       
       <div className='project'>
       <img className="innerimage" src={bookmeimage} alt="/"/>
       <div className="innercontent">
       <p className='sectionprojecttitle'>Booking Website</p>
       
       <a href={bookemewebsiteurl}><button>View Project</button></a>
       <a href={bookmewebsitecode}><button>View Code</button></a>
       </div>

       </div>

       <div className='project3'>
       <img className="innerimage" src={virtualkeyboard} alt="/"/>
       <div className="innercontent">
        <div className='backgroundd'>
      <p className='sectionprojecttitle add'><span className='spann'>Custom - Virtual - Keyboard</span></p>
      </div>
       <a href={virtualkeyboardurl}><button >View Project</button></a>
       <a href={virtualkeyboardcode}><button>View Code</button></a>
</div>
       </div>

       

      </div>









      </div>
  )
}

export default Work