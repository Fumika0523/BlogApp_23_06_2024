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
import { BsFillPostcardFill } from "react-icons/bs";


function NavBar() {
  const location = useLocation();
  console.log(location)
  const includedPaths = ["/", "/addblog", "/allblogs"]

  const shouldRenderHeader = includedPaths.includes(location.pathname)
  console.log(shouldRenderHeader)

  const {darkMode} =useContext(ThemeContext)

  return (
    <Navbar  expand="lg" className="navbar shadow-sm sticky-top" style={{ backgroundColor: darkMode ? "rgb(2, 22, 49)" : "rgb(252, 252, 250)"}} >
      <Container fluid className=' border-4' >
        <Navbar.Brand className='fw-bold' style={{ color: darkMode ? "rgb(244, 215, 73)" : "black"}}>Travel Blog✈️🌏</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-5'/>
        <Navbar.Collapse id="basic-navbar-na" >
          <Nav className="ms-auto me-5 d-flex align-items-start justify-content-start">
            {/* Home */}
            <Nav.Link as={Link} to="/" className={`d-flex align-items-center gap-1 navLink `} style={{ color: darkMode ? "rgb(243, 243, 170)" : "black"}}><FaHome className='fs-4' />Home</Nav.Link>

            {/* All Blog */}
            <Nav.Link as={Link} to="/allblogs" className={`d-flex align-items-center gap-1 navLink `} style={{ color: darkMode ? "rgb(243, 243, 170)" : "black"}}><FaHeart className='fs-5'  />All Blogs</Nav.Link>

              {/* Add */}
              <Nav.Link as={Link} to="/addblog" className={`d-flex align-items-center gap-1 navLink`} style={{ color: darkMode ? "rgb(243, 243, 170)" : "black"}}><BsFillPostcardFill className='fs-4' />Post </Nav.Link>

            {/* Contact */}
            <Nav.Link as={Link} to="/contactus" style={{ color: darkMode ? "rgb(243, 243, 170)" : "black"}} className={`gap-1 d-flex align-items-center navLink `}><IoIosSend className='fs-4'  />Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

          <div className='position-absolute' style={{right:"3px",top:"7px"}} >
          <ThemeToggle />
          </div>
          
      </Container>
    </Navbar>
  );
}

export default NavBar;