import React, { useState } from 'react'
import { Container, Form, FormGroup, Input, Label } from 'reactstrap'

const Form2 = () => {

    const [firstName , setFirstname] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [telephone , setTelephone] = useState("");

    console.log(email);

  return (
   <Container className='mt-5'>
        <Form>
            <FormGroup>
              <Label>İsim</Label>
              <Input type="text" 
              placeholder='Adınızı Giriniz' 
              value={firstName} 
              onChange={(e)=> setFirstname(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label>Soyisim</Label>
              <Input type="text" 
              placeholder='Soyadınızı Giriniz' 
              value={lastName} 
              onChange={(e)=> setLastName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label>eposta</Label>
              <Input type="email" 
              placeholder='Epostanızı Giriniz' 
              value={email} 
              onChange={(e)=> setEmail(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label>Telefon</Label>
              <Input type="text" 
              placeholder='Telefonunuzu Giriniz' 
              value={telephone} 
              onChange={(e)=> setTelephone(e.target.value)}/>
            </FormGroup>
        </Form>
    </Container>
  )
}

export default Form2