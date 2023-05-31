import React, { useState } from 'react'
import { Container, Form, FormGroup, Input, Label } from 'reactstrap'

const Form3 = () => {

    const [formData , setFormData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      telephone:""
    });
    

    console.log(formData);

  return (
   <Container className='mt-5'>
        <Form>
            <FormGroup>
              <Label>İsim</Label>
              <Input type="text" 
              placeholder='Adınızı Giriniz' 
              value={formData.firstName} 
              onChange={(e)=> setFormData({...formData , firstName: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label>Soyisim</Label>
              <Input type="text" 
              placeholder='Soyadınızı Giriniz' 
              value={formData.lastName} 
              onChange={(e)=> setFormData({...formData , lastName: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label>eposta</Label>
              <Input type="email" 
              placeholder='Epostanızı Giriniz' 
              value={formData.email} 
              onChange={(e)=> setFormData({...formData , email: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label>Telefon</Label>
              <Input type="text" 
              placeholder='Telefonunuzu Giriniz' 
              value={formData.telephone} 
              onChange={(e)=> setFormData({...formData , telephone: e.target.value})}/>
            </FormGroup>
        </Form>
    </Container>
  )
}

export default Form3