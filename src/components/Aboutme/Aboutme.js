import React from 'react'
import './Aboutme.css'

const Aboutme = () => {

  return (
    <div className='background_aboutme'>
      <div className='container_aboutme'>
      <img src="../images/profile_photo.jpg" className='arrowPhoto'></img>
      <div className='textContent'>
          <h1 className='title'>I'm a Software Developer, living in Vancouver, Canada</h1>
      <p className='description_aboutme'>
          Over the past 4 years, I've worked in various areas, including front-end development, marketing, and app UI/UX. These days, I focus on mobile and web development.
      </p>  
      </div>
    </div>
    <div className='school-list'>
      <div className='school'>
        <span>BACHELOR OF COMPUTER ENGINEERING | UNAM, Mexico City</span>
      </div>
      <div className='school'>
        <span>DIGITAL MARKETING CERTIFICATE | Tamwood Careers, Vancouver, Canada</span>
      </div>
      <div className='school'>
        <span>DIGITAL MARKETING CERTIFICATE | Tamwood Careers, Vancouver, Canada</span>
      </div>
    </div>
    <div className='school_description'>
        <p>
          I’m a software developer from Mexico City, Im passionate about development of applications, specific for android mobile, I was focusing in that over 4 years. Also I had many experiences in another field in  the development field like web development or web design. My most recent role at Burst Creative in Vancouver allowed me to work on scalable, cloud-integrated applications using React, where I led efforts in API integration and technical documentation. Before that, as a Android Developer at Acepte Solutions, I was responsible for full-cycle mobile development, including the successful deployment of multiple apps to both the App Store and Google Play.
          In my free time, I’m usually doing workout, playing video games, or hanging out with my friends, I like to keep active and try to use my time in the best way possible. In addiction, I like to discover new things for that reason I enjoy trip to discover new places 
        </p>
        <img src="../images/Vancouver.jpg" className='descriptionPhoto'></img>
      </div>
    
  </div> 
  )
}
export default Aboutme;