import React from 'react'
import About from '../about/About'
import Education from '../education/Education'
import Skill from '../skill/Skill'
import Project from '../projects/Project'
import Contact from '../Contact/Contact'
import Footer from "../footer/Footer"

export default function Home() {
  return (
    <div>
    <About/>
    <Skill/>
    <Education/>   
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  )
}
