import React from 'react'

const Icon = ({Icon,name}) => {
  return (
    <div className='flex flex-col cursor-pointer items-center group w-12 sm:w20 hover:text-white' >
        <Icon  className='h-6 mb-1  hover:animate-bounce hover:text-green-500'/>
        <p className='tracking-widest opacity-0 group-hover:opacity-100'>{name}</p>
    </div>
  )
}

export default Icon