import React from 'react';
import {Card} from "reactstrap";
export default function About() {
  const image=require("../assets/pramila.jpg")
  return (
    <div className='container' >
    <h1 align="center">ABOUT</h1>
      <Card
        body
        className="text-center"       
      >
      <div className="container main_container d-flex justify-content-around flex-wrap">        
        <div className="left_container mt-5" style={{ width: 500}}>
            <h2>Meet Pramila Sundaram</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>I am a Full stack MERN
            developer with an amazing ability to develop websites that are both functional and
             aesthetically pleasing. I have a strong understanding of web standards and best practices,
              and I am passionate about creating websites that users will find easy to use and 
              visually appealing. I am also proficient in a variety of programming languages
               and tools. I am a team player who is always willing to lend a helping hand,
                and I am confident in my ability to contribute to any project.
                 I am looking for an opportunity to use my skills and experience to make a positive impact
                  on the web</p>
          </div>
          <div className="right_container mt-3">
            <img src={image} alt="..." style={{borderRadius:"50%",height:"400px",width:"300px"}} />
          </div>
        </div>
      </Card>        
      </div>
  )
}
