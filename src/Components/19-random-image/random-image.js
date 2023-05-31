import React, { useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'

const RandomImage = () => {
  
 const [randomNum , setRandomNum]=useState(1);

 const handleRandomNum = () => { 
    //const rand = Math.floor(Math.random()* 10+1);
    const rand = Math.floor(Math.random()* 4+1);
    setRandomNum(rand);
  }

  //iki farklı halini yaptık buna dıkkat et
  
  console.log(randomNum);
  let image = `image${randomNum}.jpeg`
/*
  let image = "image1.jpeg"
  if(randomNum>=8){
    image="image2.jpeg"
  }
  else if(randomNum>=4){
    image="image3.jpeg"
  }
  */

  return (
    <Container className='mt-5'>
        <Card>
            <img alt="Sample" src={require(`../../assets/img/${image}`)}/>
            <CardBody>
                <Button onClick={handleRandomNum}> Change</Button>
            </CardBody>
        </Card>
    </Container>
  )
}

export default RandomImage