import React from 'react'

const Jsx4 = () => {
    const age = 21;
  return (
    <div>
        { age >= 18 && <h1>The content for 18 or older</h1> }
         
    </div>
  );
}

export default Jsx4;