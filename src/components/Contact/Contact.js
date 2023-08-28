import React, { useState } from 'react'
import "./Contact.css"
import { ToastContainer, toast } from "react-toastify";
import { Button, Card, CardBody, Form, FormGroup, Input, Label } from 'reactstrap'
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handlechange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (name === "") {
      toast.error("Name is required")
    } else if (email === "") {
      toast.error("email is required")
    } else if (subject === "") {
      toast.error("subject is required")
    } else if (message === "") {
      toast.error("message is required")
    }
    else {
      const response=await fetch('https://www-portfoliobackend.onrender.com/sendemail',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(form)
      })
      const data=await response.json()
      console.log(data)
      setForm({...form,
        name:"",
        email:"",
        subject:"",
        message:""})
    }
  }

  return (
    <div className='container' >
    <h1 align="center">CONTACT</h1>
      <Card
        body
        className="text-center"       
      >      
        <CardBody>
          <Form onSubmit={handlesubmit}>
            <FormGroup floating>
              <Input
                id="name"
                name="name"
                placeholder="Enter fullname"
                type="text"
                value={form.name}
                onChange={handlechange}
              />
              <Label for="exampleEmail">
                Full Name
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={handlechange}
              />
              <Label for="exampleEmail">
                Email
              </Label>
            </FormGroup>
            {' '}
            <FormGroup floating>
              <Input
                id="subject"
                name="subject"
                placeholder="subject"
                type="subject"
                value={form.subject}
                onChange={handlechange}
              />
              <Label for="subject">
                Subject
              </Label>
            </FormGroup>
            {' '}
            <FormGroup floating>
              <Input
                id="message"
                name="message"
                placeholder="message"
                type="text"
                value={form.message}
                onChange={handlechange}
              />
              <Label for="message">
                Message
              </Label>
            </FormGroup>
            {' '}
            <Button color="primary" size='lg' >
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
      <ToastContainer position="top-center" />
    </div>
  )

}
