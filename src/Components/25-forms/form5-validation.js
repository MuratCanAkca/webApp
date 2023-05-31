import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

const Form5 = () => {

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


    const handleSubmit = (e) => {  
      e.preventDefault();
      if(!formData.firstName || formData.firstName.length<2){
        alert("Lütfen adinizi giriniz");
        return;
      }
      if(!formData.lastName || formData.lastName.length<2){
        alert("Lütfen soyadinizi giriniz");
        return;
      }
      if(!formData.email){
        alert("Lütfen emailinizii giriniz");
        return;
      }
      if(!formData.telephone){
        alert("Lütfen telefonunuzu giriniz");
        return;
      }
      alert("Bundan sonra Api call islemleri yapilir");
     }

  return (
   <Container className='mt-5'>
        <Form onSubmit={handleSubmit}>
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
            <Button color='info' type='submit'>Kaydet</Button>
        </Form>
    </Container>
  )
}

export default Form5