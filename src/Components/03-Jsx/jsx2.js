import React from 'react'

const Jsx2 = () => {

    const user ={
        name: "Ali Gel",
        email:"ali@gmail.com",
        occupation: "Develepor"

    }

  return (

        <>
        <div>Name : {user.name}</div>
        <div>Email : {user.email}</div>
        <div>Occupation : {user.occupation}</div>
        </>
  
    )
}

export default Jsx2