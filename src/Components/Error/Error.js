import React from 'react'
import pageNotFound from '../../Images/pagenotfound.png'
import './Error.css'

const Error = () => {
  return (
    <div>
      <img src={pageNotFound} alt="404" className='page-not-found'></img>
    </div>
  )
}

export default Error