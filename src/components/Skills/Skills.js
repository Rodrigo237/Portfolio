import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <div className='background_skills'>
        <h1>Skills</h1>
        <p className="skills_note">
          Technologies listed here have been applied to real-world projects with measurable results. 👨‍💻✨
        </p>
        <section className="skills_section">
        <div className="skill_item">
          <h3>📱 Native Android</h3>
          <p>Built 6+ apps using Android Studio with Java & Kotlin.I have been improving the use of that software to make native mobile applications, using as main language Java and more recently Kotlin, and I create at least 6 different apps.</p>
        </div>

        <div className="skill_item">
          <h3>🔄 Version Control</h3>
          <p>Implemented Git Flow across 8+ repos. Reduced merge conflicts by 50% and ensured 100% code review coverage.Implemented Git Flow methodology with structured pull requests (feature branches, code reviews, squash merging).Also  I maintained 100% code review coverage across 8+ collaborative repositories.</p>
        </div>

        <div className="skill_item">
          <h3>🌐 Web Development</h3>
          <p>Used frameworks like Vue and React to improve performance, visuals, and usability in multiple projects.  Created using several frameworks such as Vue, or React, specifically making improvements in visual design, and performance, or some other front end functionality.</p>
        </div>

        <div class="skill_item">
          <h3>🎨 Design UX/UI</h3>
          <p>Created mobile app designs from scratch based on client specs. Enhanced UX for 4+ apps. I improvement of user experience and make a more user friendly design</p>
        </div>
      </section>
      <section className='technologies_section'>
        <h2>Technologies</h2>
          <p>I have used several technologies for the development of different applications, but here I only show the most relevant ones I know how to use.</p>
          <div className='techno_grid'>
            <div className='techno_box'>
              <a href="https://www.facebook.com/rodri.moreno.7/" class="techno-icon"><i class="fab fa-android"></i></a>
              <h3>Android</h3>
            </div>
            <div className='techno_box'>
              <a href="https://www.facebook.com/rodri.moreno.7/" class="techno-icon"><i class="fab fa-github"></i></a>
              <h3>Github</h3>
            </div>
            <div className='techno_box'>
              <a href="https://www.facebook.com/rodri.moreno.7/" class="techno-icon"><i class="fas fa-database"></i></a>
              <h3>MySQL</h3>
            </div>
            <div className='techno_box'>
              <a href="https://www.facebook.com/rodri.moreno.7/" class="techno-icon"><i class="fab fa-react"></i></a>
              <h3>React</h3>
            </div>
          </div>
      </section>
    </div>

  )
}
export default Skills;