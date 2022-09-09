import React from 'react'

const ProjectItems = ({imgUrl, title, tech}) => {
  return (
    <div>
        <img src='' alt={title} 
            className='w-full h-36 md:h-48 object-cover'
        />
        <div className='text-gray-600 dark:text-gray-300 p-5 w-full'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
        </div>
    </div>
  )
}

export default ProjectItems