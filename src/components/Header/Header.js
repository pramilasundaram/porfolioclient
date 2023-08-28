import React, { useState } from 'react';
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,Button
} from 'reactstrap';

export default function Header(args) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  return (
    
    <Navbar {...args} className='navbar-expand-lg' color="dark">
      <NavbarBrand href="/" style={{color:"white",fontSize:"24px", padding:"0px 20px"}}>PRAMILA SUNDARAM</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/about" style={{color:"white",fontSize:"24px", padding:"0px 20px"}}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/education" style={{color:"white",fontSize:"24px", padding:"0px 20px"}}>Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/skill" style={{color:"white",fontSize:"24px", padding:"0px 20px"}}>Skill</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/project" style={{color:"white",fontSize:"24px", padding:"0px 20px"}}>Projects</NavLink>
          </NavItem>    
          <NavItem>
            <NavLink href="/contact" style={{color:"white",fontSize:"24px", padding:"0px 20px"}}>Contact</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
        <Button onClick={() =>
           window.open('https://drive.google.com/file/d/1pfLVKwb_kKGNpqXvAMF5vt7GAV8MNQvC/view?usp=sharing', "_blank")} size='lg' color="primary"> Resume </Button>
        </NavbarText>
      </Collapse>
    </Navbar>

  )
}
