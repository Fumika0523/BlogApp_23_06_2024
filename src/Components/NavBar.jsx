import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { PiNotePencilBold } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Button } from 'react-bootstrap';
import ThemeToggle from "../ThemeToggle";
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';


function NavBar() {
  const location = useLocation();
  console.log(location)
  const includedPaths = ["/", "/addblog", "/allblogs"]

  const shouldRenderHeader = includedPaths.includes(location.pathname)
  console.log(shouldRenderHeader)

  const {darkMode} =useContext(ThemeContext)

  return (
    <Navbar expand="lg" className="navbarpx-4 sticky-top" >
      <Container fluid className='border border-4' >
        <Navbar.Brand className='fw-bold' style={{ color: darkMode ? "yellow" : "black"}}>Travel Blog✈️🌏</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-na" >
          <Nav className="ms-auto ">
            {/* Home */}
            <Nav.Link as={Link} to="/" className={`d-flex align-items-center gap-1 `} style={{ color: darkMode ? "yellow" : "black"}}><FaHome className='fs-5' />Home</Nav.Link>
            {/* Add */}
            <Nav.Link as={Link} to="/addblog" className={`d-flex align-items-center gap-1 `} style={{ color: darkMode ? "yellow" : "black"}}><PiNotePencilBold className='fs-5' style={{ color: darkMode ? "yellow" : "black"}}/>Post </Nav.Link>
            {/* All Blog */}
            <Nav.Link as={Link} to="/allblogs" className={`d-flex align-items-center gap-1 `} style={{ color: darkMode ? "yellow" : "black"}}><FaHeart className='fs-5' style={{ color: darkMode ? "yellow" : "black"}} />All Blogs</Nav.Link>
            {/* Contact */}
            <Nav.Link as={Link} to="/contactus" style={{ color: darkMode ? "yellow" : "black"}} className={`d-flex align-items-center gap-1 `}><IoIosSend className='fs-4' style={{ color: darkMode ? "yellow" : "black"}} />Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        
           <ThemeToggle />
      </Container>
    </Navbar>
  );
}

export default NavBar;