import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import {cards, projects} from '../../data'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map((card)=>(
        <CatCard key={card.id} item={card}/>
      ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <span>Stick to your budget</span>
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <span>Get quality work done quickly</span>
            </div>
            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <span>Pay when you&apos;re happy</span>
            </div>
            <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <span>Count on 24/7 support</span>
            </div>
            <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>


      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>SkillServe <span>business</span></h1>
            <h1>A business solution designed for <span>teams</span></h1>
            <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <span>Connect to freelancers with proven business experience</span>
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <span>Get matched with the perfect talent by a customer success manager</span>
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              <span>Manage teamwork and boost productivity with one powerful workspace</span>
            </div>
            <button>Explore SkillServe Business</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt=""></img>
          </div>
        </div>
      </div>

      <Slide slidesToShow={5} arrowsScroll={5}>
      {projects.map((project)=>(
        <ProjectCard key={project.id} item={project}/>
      ))}
      </Slide>
    </div>
  )
}

export default Home