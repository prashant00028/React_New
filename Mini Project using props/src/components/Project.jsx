import React from 'react'
import { Bookmark } from 'lucide-react'

const Project = (props) => {
  return (
    <div>
      <div className="card">
        <div className='content'>
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={12} color='grey'/></button>
        </div>

        <div className="center">
          <h4>{props.company} <span>5 days ago</span></h4>
          <h3>{props.post}</h3>
          <div className='tag'>
            <p>Part-Time</p>
            <p>Senior Level</p>
          </div>
        </div>
        </div>

        <div className="bottom">
          <h4>{props.payhours}</h4>
          <button>Apply now</button>
        </div>

        <div className='location'>
          <p>{props.location}</p>
        </div>

      </div>
    </div>
  )
}

export default Project
