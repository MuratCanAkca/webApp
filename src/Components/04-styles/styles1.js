import React from 'react'
import "./styles1.css"

const Style1 = () => {

    /* burada hem inline hemde internal var hemde external var en cok external kullanacagız*/ 
    const stil = {
        color:"red",
        backgroundColor: "Green",
        fontSize:"100px"
    }

  return (
    <div style={{
        border:"1px solid red",
        padding:"1rem",
        borderRadius:"1rem",
        textAlign:"center"
    }}>
        <h1 style={stil}>React fundamentals</h1>
        <p className='p'>
            hbladhjsblkajhbsdlakjsbdlajkbdlaskjbdnlksbjskajhblajbksjkjlj nsdasjaskjd akjdaksj daşs ajks aşjdşja sşdja 
        </p>
    </div>
  )
}

export default Style1