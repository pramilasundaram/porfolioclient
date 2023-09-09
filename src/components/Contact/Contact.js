import React, {useRef  } from 'react'
import "./Contact.css"
import { Button, Card, CardBody, CardFooter} from 'reactstrap'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

 
export default function Contact() {

  const form = useRef(); 
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ujk58mi', 'template_z0ge1bi', form.current, 'RTKpR9V02KOIfpM08')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='container' >
    <h1 align="center">CONTACT</h1>
      <Card
        body
        className="text-center"       
      >      
        <CardBody>
        <form ref={form} onSubmit={sendEmail}>
        <label className='title'>Name</label>
        <input className='box' type="text" name="user_name" />
        <label className='title' >Email</label>
        <input className='box' type="email" name="user_email" />
        <label className='title' >Message</label>
        <textarea className='box' name="message" />
        <input type="submit" value="Send" className='button_send'/>
      </form>
        </CardBody>
        <CardFooter>
        <Button color="success" style={{margin:"0 20px 0 20px"}} onClick={() =>
          window.open('https://github.com/pramilasundaram/', "_blank")} size='lg'  >Github</Button>
        <Button color="warning" style={{margin:"0 20px 0 20px"}} onClick={() =>
          window.open('https://www.linkedin.com/in/pramila-sundaram-0a85146b/', "_blank")} size='lg'  >linkedin</Button>
        
        </CardFooter>
      </Card>      
    </div>
  )

}
