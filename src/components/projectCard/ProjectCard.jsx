import React from 'react'
import './ProjectCard.scss'
import { Link } from 'react-router-dom'

const ProjectCard = ({item}) => {
    return (
        <Link to="./gigs?cat=design">
        <div className='projectcard'>
            <img src={item.img} alt="" />
            <span className='desc'>{item.desc}</span>
            <span className='title'>{item.title}</span>
        </div>
        </Link>
      )
}

export default ProjectCard