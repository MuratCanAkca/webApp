import React, { useEffect, useState } from 'react'
import { Button, Container } from 'reactstrap'

const UseEffect = () => {
  
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title=`${counter}`;
    },[counter])/*DİKKAT calısır cunku useState var*/
  
    return (
    <Container className='text-center mt-5'>
        <h2>{counter} kere tıkladınız</h2>
        <Button onClick={() => setCounter((prev)=>prev+1)}>Click Me</Button>
    </Container>
  )
}

export default UseEffect