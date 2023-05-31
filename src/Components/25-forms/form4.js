import React, { useState } from 'react'
import { Container, Form, FormGroup, Input, Label } from 'reactstrap'

const Form4 = () => {

    const [formData , setFormData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      telephone:""
    });
    
    const handleFormData = (e) => { 
      const { name , value} = e.target;
      setFormData({...formData , [name]: value})
     }

    console.log(formData);

  return (
   <Container className='mt-5'>
        <Form>
            <FormGroup>
              <Label>İsim</Label>
              <Input type="text"
              name='firstName' 
              placeholder='Adınızı Giriniz' 
              value={formData.firstName} 
              onChange={handleFormData}/>
            </FormGroup>
            <FormGroup>
              <Label>Soyisim</Label>
              <Input type="text" 
              name='lastName'
              placeholder='Soyadınızı Giriniz' 
              value={formData.lastName} 
              onChange={handleFormData}/>
            </FormGroup>
            <FormGroup>
              <Label>eposta</Label>
              <Input type="email" 
              name='email'
              placeholder='Epostanızı Giriniz' 
              value={formData.email} 
              onChange={handleFormData}/>
            </FormGroup>
            <FormGroup>
              <Label>Telefon</Label>
              <Input type="text" 
              name='telephone'
              placeholder='Telefonunuzu Giriniz' 
              value={formData.telephone} 
              onChange={handleFormData}/>
            </FormGroup>
        </Form>
    </Container>
  )
}

export default Form4