import React from 'react'
import { Card, Row, Col, CardBody, CardTitle, Button } from "reactstrap";
const fbe = require("../assets/contactmanager.png");
const restcountries = require("../assets/restcountries.png");
const fbet = require("../assets/fbet.png");
const passwordreset = require("../assets/passwordreset.png")

const projects = [

  {
    id: 1,
    title: "Free Bulk email tool",
    date: "Oct 2022 - Present",
    description:
      "",
    image: fbet,
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "NodeMailer",
      "ReactStrap"
    ],
    category: "web app",
    frontend: "https://github.com/pramilasundaram/freebulkemail-frontend",
    backend: "https://github.com/pramilasundaram/freebulkemail-backend",
    webapp: "https://rococo-crepe-ff8163.netlify.app",
  },
  {
    id: 2,
    title: "Contact Manager",
    date: "Jun 2023 - Jul 2023",
    description:"The MERN Contact Manager is a full-stack web application designed to help users efficiently manage their contacts. This application allows users to store, edit, and delete their contacts while providing a user-friendly interface."
      ,
    image: fbe,
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Multer",
      "JWT",
    ],
    category: "web app",
    frontend: "https://github.com/pramilasundaram/contact_frontend",
    backend: "https://github.com/pramilasundaram/contact_backend",
    webapp: "https://gregarious-puffpuff-329d5f.netlify.app",
  },
  {
    id: 3,
    title: "where in the country?",
    date: "Apr 2023 - May 2023",
    description: "Developed a application that allows users to search for place in the word and their border countries",
    image: restcountries,
    tags: [
      "HTML",
      "CSS",
      "Javascript"
    ],
    category: "web app",
    frontend: "https://github.com/pramilasundaram/restcountries",
    webapp: "https://dynamic-strudel-3fbe8e.netlify.app/",
  },


  {
    id: 4,
    title: "Password Reset Flow",
    date: "Jun 2023 - Jul 2023",
    description:
      "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",

    image: passwordreset,
    tags: ["React j", "JavaScript", "Axios"],
    category: "android app",
    frontend: "https://github.com/pramilasundaram/password-reset",
    backend: "https://github.com/pramilasundaram/freebulkemail-frontend",
    webapp: "https://incandescent-crostata-72e546.netlify.app",
  },

  {
    id: 5,
    title: "Todo Web App",
    date: "Jun 2021",
    description:
      " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
    image:
      "https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
    tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
    category: "web app",
    frontend: "",
    webapp: "",
  },
  {
    id: 6,
    title: "Personal portfolio",
    date: "Personal portfolio",
    description:
      "",
    image:
      "https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "NodeMailer",
      "ReactStrap"
    ],
    category: "web app",
    frontend: "",
    webapp: "",
  },

];

export default function Project() {
  return (
    <div>
      <Card
        body
        className="text-center"        
        style={{
          width: "100%"
        }}
      >
        <h1 align="center" style={{margin:"30px 0"}} >PROJECTS</h1>
        <Row
          md="3"
          sm="1"
        >
          {projects.map((element, index) => {
            return <Col className="bg-light border">
              <Card
                style={{
                  width: '100%',
                  height:'100%'
                }}>
                <CardTitle tag="h4" style={{margin:"20px 0"}}>
                {element.title}
              </CardTitle>
                <CardBody>
                  <img
                    alt="Card cap"
                    src={element.image}
                    width="100%"

                  />                 

                  <Button color="primary"
                    size="lg"  style={{margin:"20px 0"}} onClick={() =>{}}>
                   view
                  </Button>

                </CardBody>
              </Card>
            </Col>
          })}
        </Row>
      </Card>
    </div>
  )
}
