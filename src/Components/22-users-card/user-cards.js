import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'reactstrap';
import UserCard from './user-card';

const UserCards = () => {

  const [users , setUsers] = useState([]);
  const [loading , setLoading]=useState(true);

  useEffect(()=>{
    fetch("https://64760d0be607ba4797dd36a8.mockapi.io/api/v1/users")
    .then(resp => resp.json())
    .then(data =>{
      setUsers(data)
      setLoading(false); 
    });
  },[])

   

    console.log(users);


  return (
    <Container className="mt-5">
      {
        loading && (
        <div className='d-flex align-items-center justify-content-center'>
          <Spinner color="primary"/>&nbsp;&nbsp; Loading...
        </div>)
      }
      <Row className='g-4'>
      {users.map((user) =>(
        
        <Col sm={6} md={4} lg={3} key={user.id}>
          <UserCard {...user}/>
        </Col>

      ))}
      </Row>
   </Container>
  )
}

export default UserCards