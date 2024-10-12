import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
  return (
    <div>
      <h1 className='bg-gray-700 text-white text-center mx-8 py-14 text-3xl'>USER : {id}</h1>
    </div>
  )
}

export default User
