import React from 'react'
import "./projects.css"

const Projects = () => {
  return (
    <div className='container_projects'>
      <h1 className='title_Projects'>Projects</h1>
      <p className='description_projects'>You’ll find a selection of projects where I’ve built scalable mobile apps (Android/Kotlin) and responsive web solutions </p>
      <div className='project_flex'>
        <a href='https://github.com/Rodrigo237/Obesidad_Project' className='project_card' style={{backgroundImage: `url("./images/obesity_children.jpg")`}}>
          <h3 className='title_card'>Obesity Children</h3>
        </a>
        <a href='https://github.com/Rodrigo237/Manual-para-Prevension-de-Obesidad-Infantil' className='project_card' style={{backgroundImage: `url("./images/teach_parents.jpg")`}}>
          <h3 className='title_card'>Teaching parents about obesity</h3>
        </a>
        <a href='https://github.com/Rodrigo237/ProyectoCoyoEclipse/tree/master' className='project_card' style={{backgroundImage: `url("./images/stadistics_degenerative.jpg")`}}>
          <h3 className='title_card'>Coyoacan Projects</h3>
        </a>
        <a href='https://github.com/Rodrigo237/AppPsicologia' className='project_card' style={{backgroundImage: `url("./images/demencia.jpg")`}}>
          <h3 className='title_card'>Psychological Analysis</h3>
        </a>
        <a href='' className='project_card' style={{backgroundImage: `url("./images/sell_producto.jpg")`}}>
          <h3 className='title_card'>Beverage distribution</h3>
        </a>
        <a href='' className='project_card' style={{backgroundImage: `url("./images/cycling.jpeg")`}}>
          <h3 className='title_card'>Safe Cycling</h3>
        </a>
        <a href='https://www.burstcreative.com/' className='project_card' style={{backgroundImage: `url("./images/Burst+Creative-01.png")`}}>
          <h3 className='title_card'>Burst App Web</h3>
        </a>
        <a href='https://github.com/Rodrigo237/MoviesProyects' className='project_card' style={{backgroundImage: `url("./images/catalog.jpg")`}}>
          <h3 className='title_card'>Movie Catalog</h3>
        </a>
      </div>
    </div>
  )
}
export default Projects;