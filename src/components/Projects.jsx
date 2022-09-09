import React from 'react'
import ProjectItems from './ProjectItems'
import SectionTitle from './SectionTitle'
import projects from '../data/projects'


const Projects = () => {
  return (
    <div className='py-12'>
        <SectionTitle id='proyects'>Recent Projects</SectionTitle>

        <div>
            {projects.map(project => (
                <ProjectItems 
                    key={project.title} 
                    imgUrl={project.imgUrl}
                    title={project.title}
                    tech={project.tech}
                    />
            ))}
        </div>
    </div>
  )
}

export default Projects