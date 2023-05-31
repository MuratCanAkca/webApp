import React from 'react'

const Jsx3 = () => {

    const isAdmin = true;

  return (
    <>
        {isAdmin ? (
        <>
            <h2>Admın Menu</h2>
            <ul>
              <li>Create User</li>
              <li>Update User</li>
              <li>Delete User</li>
             </ul>
        </>
        ):( 
        <>
            <h2>User Menu</h2>
            <ul>
                <li>Create User</li>
                <li>Update User</li>
               <li>Delete User</li>
            </ul>
        </>
        
        )}
    </>
  )
}

export default Jsx3