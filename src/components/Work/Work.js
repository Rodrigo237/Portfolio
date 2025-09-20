import React from 'react'
import "./Work.css"

const Work = () => {
  return (
    <div className='background_work'>
        <section className='experience_section'>
            <h2>Work Experience</h2>

            <div className='experience_flex'>
                <div className='experience_card'>
                    <h3>Burst Creative · Vancouver, Canada</h3>
                    <span class="date">Sep 24 – Apr 25</span>
                    <p class="role">Web Developer</p>
                    <ul>
                      <li>Implemented responsive design</li>
                      <li>Utilized WordPress & CSS</li>
                      <li>Web development & design</li>
                      <li>Server management</li>
                    </ul>
                </div>
                <div class="experience_card">
                          <h3>Acepte Solutions · Monterrey, Nuevo León</h3>
                          <span class="date">Sep 22 – Jan 24</span>
                          <p class="role">Mid-level Android Developer</p>
                          <ul>
                            <li>Created development documentation</li>
                            <li>Staff training & team management</li>
                            <li>New feature development</li>
                            <li>Bug fixing & Git version control</li>
                          </ul>
                  </div>

                  <div class="experience_card">
                        <h3>Mexican Health Society · Mexico City</h3>
                        <span class="date">Oct 19 – Aug 22</span>
                        <p class="role">Junior Android Developer</p>
                        <ul>
                          <li>Created a health and fitness app that tracked user activity, provided personalized workout plans, and offered nutrition advice. Utilized sensors to track steps, heart rate, and sleep patterns</li>
                          <li>Handling of different problems is mainly done in Java with the help of statistical market research analysis</li>
                          <li>Handling of a versioning tool to be able to work in parallel with external workgroups</li>
                          <li>Use of object-oriented languages within the development environment</li>
                        </ul>
                  </div>

                  <div class="experience_card">
                        <h3>Faculty of Psychology · Vancouver, BC</h3>
                        <span class="date">Jan 19 – Jul 19</span>
                        <p class="role">Junior Android Developer</p>
                        <ul>
                          <li>Design and development of mobile applications</li>
                          <li>Integrated REST APIs</li>
                          <li>Database Creation and Management</li>
                          <li>Quickly adapted to new technologies and project requirements</li>
                          <li>Collaborated effectively with cross-functional teams to deliver high-quality products</li>
                        </ul>
                  </div>

            </div>
            
        </section>
    </div>
  )
}
export default Work;