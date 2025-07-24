import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetail = () => {
    const {id} = useParams();
  return (
    <div className='p-5'>
        <h1 className='text-center display-1'>EventDetail</h1>
    </div>
  )
}

export default EventDetail