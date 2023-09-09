import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import {Card} from "reactstrap"
import { FaGraduationCap} from "react-icons/fa";
export default function Education() {
  return (
    <div className='container' >
    <h1 align="center">EDUCATION AND WORK</h1>
      <Card
        body
        className="text-center"       
      > 
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2023 feb-july"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Web Development</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
    MERN Stack
    GUVI,chennai.  
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color:'#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="2019"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<MdWork/>}
    >
      <h3 className="vertical-timeline-element-title">Assistant Professor</h3>
      <h4 className="vertical-timeline-element-subtitle">Dept of Information Technology</h4>
      <p>
      Sri Manakula Vinayagar Engineering College,puducherry.
      </p>
    </VerticalTimelineElement>
    
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2013-2015"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title">M.Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">Computer Science and Engineering</h4>
    <p>
    National Institute of Technology,Hamirpur.
    80.30 %, First Class with distinction,
   
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2008-2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">Information Technology</h4>
    <p>
    Nandha Engineering College,Erode.
      86.60 %,First Class with distinction
      
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</Card>
    </div>
  )
}
