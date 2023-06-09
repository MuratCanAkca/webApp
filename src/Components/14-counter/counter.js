import React, { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

const Counter = () => {
    const [counter , setCounter] = useState(0);
  return (
    <ButtonGroup>
    <Button color="danger"  onClick={()=>setCounter(prev=>prev-1)}>
      -
    </Button>
    <Button color="secondary" disabled>
      {counter}
    </Button>
    <Button color="success" onClick={()=>setCounter(prev=>prev+1)}>
      +
    </Button>
    <Button color="info" onClick={()=>setCounter(0)}>
      Reset
    </Button>
  </ButtonGroup>
  )
}

export default Counter