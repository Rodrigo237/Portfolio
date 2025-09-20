import React from 'react'
import "./footer.css"
export const Footer = () => {
  return (
    <footer>
      <div className='copyright'>
          © 2025 <span>Rodrigo Moreno Barrientos</span> 
      </div>
      <div className='footer-links'>
          <div className='links'>
              <h3>Information</h3>
              <ul>
                <li><a href='https://www.instagram.com/rod232709/'>Instagram</a></li>
                <li><a href='https://www.linkedin.com/in/rodrigo-moreno-barrientos-a245bb183/'>GitHub</a></li>
                <li><a href='https://github.com/Rodrigo237'>LinkedIn</a></li>
              </ul>
          </div>

          <div className='links'>
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:rodri@example.com?subject=Collaboration%20Inquiry&body=Hi%20Rodrigo,%0I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20idea!" class="email-button">Message</a></li>                
                <li><a href="./assets/Resume_Rodrigo_Moreno.pdf" download class="download-btn">CV</a></li>
              </ul>
          </div>
      </div>
    </footer>
  )
}
