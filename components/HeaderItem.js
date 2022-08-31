import React from 'react'


const HeaderItem = ({title,Icon}) => {
  return (
<>
<div className='group items-center  cursor-pointer flex flex-col w-12 sm:w-20 hover:text-cyan-500'>
    <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
    <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
</>
  )
}

export default HeaderItem