import React from 'react'
import './Resume.css'
import originalresume from '../assets/resumeoriginal.JPG'
import { useState } from 'react'



const Resume = () => {
  const [showresume,SetShowresume]=useState(false)
const [showcontainer,SetShowcontainer]=useState(false)

const handleclick=()=>{
SetShowresume(!showresume)
SetShowcontainer(!showcontainer)


}




  return (
    <div name="resume" className={showcontainer? "resumecontainer":"notresumecontainer"}>
      <p className="resumetitle">Resume</p>
      <button className="resumebutton" onClick={handleclick}>View Resume</button>
     <div className="contentofresume">
     <img className={showresume ? "imgactive":"imgnotactive"} src={originalresume} alt="/" />
     </div>

      </div>
  )
}

export default Resume