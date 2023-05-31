import React, { useState } from 'react'
import { Button, Container, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import * as Yup from "yup"
import {useFormik} from "formik"

const Form6 = () => {

  const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    telephone:""
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Adinizi giriniz").min(2,"Geçerli bir ad giriniz"),
    lastName: Yup.string().required("Soyadinizi giriniz").min(2,"Geçerli bir soyad giriniz"),
    email: Yup.string().email("Geçerli bir email giriniz").required("Eposta adresini giriniz"),
    telephone: Yup.string().required("Telefon numarası giriniz").
    matches(/\(\d{3}\) \d{3} \d{2} \d{2}$/,"Geçerli bir numara giriniz (xxx) xxx xx xx formatinda giriniz")
  })

  const onSubmit = (values) => {
    alert("basarili")
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
   

  return (
   <Container className='mt-5'>
        <Form noValidate onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Label>İsim</Label>
              <Input type="text"
              placeholder='Adinizi Giriniz' 
              {...formik.getFieldProps("firstName")}
              invalid={formik.errors.firstName && formik.touched.firstName}
              valid={!formik.errors.firstName}/>
              <FormFeedback>{formik.errors.firstName}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Soyisim</Label>
              <Input type="text" 
              placeholder='Soyadinizi Giriniz' 
              {...formik.getFieldProps("lastName")}
              invalid={formik.errors.lastName && formik.touched.lastName}
              valid={!formik.errors.lastName}/>
              <FormFeedback>{formik.errors.lastName}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>eposta</Label>
              <Input type="email" 
              placeholder='Epostanizi Giriniz' 
              {...formik.getFieldProps("email")}
              invalid={formik.errors.email && formik.touched.email}
              valid={!formik.errors.emailName}/>
              <FormFeedback>{formik.errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Telefon</Label>
              <Input type="text" 
              name='telephone'
              placeholder='Telefonunuzu Giriniz' 
              value={formik.values.telephone} 
              onChange={formik.handleChange("telephone")}
              onBlur={formik.handleBlur("telephone")}
              invalid={formik.errors.telephone && formik.touched.telephone}
              valid={!formik.errors.telephone}/>
              <FormFeedback>{formik.errors.telephone}</FormFeedback>
            </FormGroup>
            <Button color='info' type='submit' disabled={!(formik.isValid && formik.dirty)}>Kaydet</Button>
        </Form>
    </Container>
  )
}

export default Form6