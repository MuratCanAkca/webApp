import React from 'react'
import product from "./product.json";
import { Col, Container, Row } from 'reactstrap';
import Product from './product';

const ProductList = () => {
  return (
    <Container className='my-3'>
        <Row className='g-4' xs="1" sm="2" md="3" lg="2" xxl="6">

            {
                product.map(product=> 
                <Col key={product.id}>
                    <Product {...product}
                    //clean cod olarak yukarıdakı gıbı yapılır
                        /* image={product.image}
                        title={product.title}
                        desc={product.desc}
                        price={product.price} */
                    />
                </Col>)
            }

        
            

        </Row>
    </Container>
  )
}

export default ProductList