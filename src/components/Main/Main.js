import React from 'react'
import "./Main.css"
const Main = () => {

  return (
    <div className='background_main'>
      <div className='container_main'>
        <div className='photoWrapper_main'>
            <img src="./images/profile_photo.jpg"  className='profilePhoto_main'></img>
        </div>
      </div>
      <p className='intro_main'>My name is</p>
      <h1 className='name_main'>Rodrigo Moreno</h1>
      <h2 className='profession_main'>Web and Mobile Developer</h2>
      <p className='description_main'>I'm <strong>Software Engineer</strong> specialized in building exceptional digital experiences. Currently,
      I'm focused on websites and mobile applications</p>
      <div className='social-icons'>
        <a href="https://www.facebook.com/rodri.moreno.7/" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/rod232709/" class="social-icon"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/rodrigo-moreno-barrientos-a245bb183/" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/Rodrigo237" class="social-icon"><i class="fab fa-github"></i></a>
      </div>
    </div>
  )
}
export default Main;
