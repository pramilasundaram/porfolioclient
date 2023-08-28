import React from 'react'
import {Card,Row,Col,CardBody,CardTitle,Button} from "reactstrap";
const fbe=require("../assets/contactmanager.png");
const restcountries=require("../assets/restcountries.png");
const fbet=require("../assets/fbet.png");
const passwordreset=require("../assets/passwordreset.png")

const projects = [
  {
    id: 9,
    title: "Contact Manager",
    date: "Jun 2023 - Jul 2023",
    description:
      "Contact Manager is a web application designed to streamline contact management and enhance productivity in the workplace. It provides a user-friendly interface for Users to keep in contact with others daily work activities and empowers Users to log their tasks efficiently.",
    image:
      fbe,
    tags: [
      "Docker",
      "AWS",
      "DuckDNS",
      "Eslint",
      "Husky",
      "CI/CD",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/pramilasundaram/contact_frontend,https://github.com/pramilasundaram/contact_backend",
    webapp: "https://gregarious-puffpuff-329d5f.netlify.app",
  },
  {
    id: 0,
    title: "where in the country?",
    date: "Apr 2023 - May 2023",
    description: "Developed a application that allows users to search for place in the word and their border countries", 
    image:restcountries,
      tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "web app",
    github: "https://github.com/pramilasundaram/restcountries",
    webapp: "https://dynamic-strudel-3fbe8e.netlify.app/",   
  },

  {
    id: 1,
    title: "Free Bulk email tool",
    date: "Oct 2022 - Present",
    description:
      "",
    image:fbet,
     tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "NodeMailer",
    ],
    category: "web app",
    github: "https://github.com/pramilasundaram/freebulkemail-frontend,https://github.com/pramilasundaram/freebulkemail-backend",
    webapp: "https://rococo-crepe-ff8163.netlify.app",
  },

  {
    id: 10,
    title: "Password Reset Flow",
    date: "Jun 2023 - Jul 2023",
    description:
      "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",

image: passwordreset,
      tags: ["React Native", "JavaScript", "Axios"],
    category: "android app",
    github: "https://github.com/pramilasundaram/password-reset,https://github.com/pramilasundaram/freebulkemail-frontend",
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
    github: "",
    webapp: "",
  },
  {
    id: 6,
    title: "amazon clone (ongoing)",
    date: "Jun 2021",
    description:
      "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
    image:
      "https://camo.githubusercontent.com/cd07010cbeb90cb1b43a5d6162784326aef02210ef7d41a0f9ae043b3e392378/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
    tags: ["React Js", "API", "Axios", "Node JS"],
    category: "web app",
    github: "",
    webapp: "",
  },

];

export default function Project() {
  return (
    <div>
      <Card
      body
      className="text-center"
      color='light'
      outline
      style={{
        width: "100%"
      }}
    >
        <h1 align="center">PROJECTS</h1>
        <Row
          md="3"
          sm="1"          
        >
          {projects.map((element, index) => {
            return <Col className="bg-light border">
              <Card
                style={{
                  width: '100%'  
                }}>
                <CardBody>
                <img
                    alt="Card cap"
                    src={element.image}
                    width="100%"
                    
                  />
                  <CardTitle tag="h5">
                    {element.title}
                  </CardTitle>
           
                  <Button color="primary"
                  size="lg" onClick={() =>
                    window.open(element.webapp, "_blank")}>
               Demo
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
