import React from 'react'
import "./welcome.scss"

const Welcome = (props) => {
   const {firstName , lastName}=props;
  return (
    <h1 className='welcome'>Welcome {firstName} {lastName}</h1>
    
  )
}

export default Welcome