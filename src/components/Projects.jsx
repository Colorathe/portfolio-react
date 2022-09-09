import React from 'react'
import ProjectItems from './ProjectItems'
import SectionTitle from './SectionTitle'
import projects from '../data/projects'


const Projects = () => {
  return (
    <div className='py-12'>
        <SectionTitle id='projects'>Recent Projects</SectionTitle>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {projects.map(project => (
                <ProjectItems 
                    key={project.title} 
                    imgUrl={project.imgUrl}
                    title={project.title}
                    tech={project.tech}
                    workUrl={project.workUrl}
                    />
            ))}
        </div>
    </div>
  )
}

export default Projects