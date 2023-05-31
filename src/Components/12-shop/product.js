import React from 'react'
import {BiShoppingBag} from "react-icons/bi"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const Product = (props) => {

    const {image, title , desc ,price} = props;




  return (
    <Card className='h-100'>
    <img
      alt={title}
      src={require(`./products/${image}`)}
    />
    <CardBody /* className='text-center' */>
      <CardTitle tag="h5">
        {title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {desc}
      </CardSubtitle>
      <CardText className='fs-3 text-info'>
        ${price}
      </CardText>
      <Button color="warning">
       <BiShoppingBag/>Add to Cart
      </Button>
    </CardBody>
  </Card>
  )
}

export default Product