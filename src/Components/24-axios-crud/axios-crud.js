import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Spinner } from 'reactstrap';
import UserCard from './user-card';
import axios from "axios";
import { createUser, deleteUser, getUsers, updateUser } from './api';

const AxiosCrud = () => {

  const [users , setUsers] = useState([]);
  const [loading , setLoading]=useState(true);


  const handleUsers = async() => {
    const resp = await getUsers();
    setUsers(resp.data);
    setLoading(false);

  };

  const handleCreateUsers =async () => {
    const payload = {
      firstName:"Murat Can",
      lastName:"Akca",
      avatar:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/266.jpg",
      email:"muratcanakca@hotmail.com"
      }
    const resp = await createUser(payload);
    setUsers([resp.data , ...users]);
    console.log(resp.data);
   }


   const handleUpdateUsers =async () => {
    const payload = {
      firstName:"Rana",
      lastName:"Orhan",
      avatar:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/133.jpg",
      email:"emınerana@hotmail.com",
      id:33
      }
    const resp = await updateUser(payload);

    const arr = users.filter(user=> user.id !== resp.data.id);

    setUsers([resp.data , ...arr]);
    console.log(resp.data);
   }
   
   const handleDeleteUsers = async (id) => {

    const resp = await deleteUser(id);

    const arr = users.filter(user=> user.id !== resp.data.id);

    setUsers([...arr]);
   }
  

  useEffect(()=>{
    handleUsers();
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

        <Button color="success" onClick={handleCreateUsers}>Create</Button>
        <Button color="warning" onClick={handleUpdateUsers}>Update</Button>
        <Button color = "danger">Delete</Button>

      <Row className='g-4'>
      {users.map((user) =>(
        
        <Col sm={6} md={4} lg={3} key={user.id}>
          <UserCard {...user} handleDeleteUsers={handleDeleteUsers}/>
        </Col>

      ))}
      </Row>
   </Container>
  )
}

export default AxiosCrud;