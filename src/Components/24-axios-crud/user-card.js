import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const UserCard = (props) => {

    const {id ,firstName , lastNAme , avatar , email , handleDeleteUsers} = props;

    const deleteUser = () => { 
      const resp = window.confirm("Are you sure want to delete")
      if(!resp) return;

      handleDeleteUsers(id);
    }


  return (
    <Card  className='h-10'>
    <img
      alt={`${firstName} ${lastNAme}`}
      src={avatar}
    />
    <CardBody>
      <CardTitle tag="h5">
      {`${firstName} ${lastNAme}`}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       {email}
      </CardSubtitle>
    
      <Button color='danger' onClick={deleteUser}>
        Delete
      </Button>
    </CardBody>
  </Card>
  )
}

export default UserCard