import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { PiNotePencilBold } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Button } from 'react-bootstrap';


function NavBar({ mode, toggleMode }) {
  const location = useLocation();
  console.log(location)
  const includedPaths = ["/", "/addblog", "/allblogs"]

  const shouldRenderHeader = includedPaths.includes(location.pathname)
  console.log(shouldRenderHeader)

let textMode = mode =="light" ? "black" : "white"
let backgroundColor = mode == "light" ? "#fefdf6" : "#031937"
  return (
    <Navbar expand="lg" className="navbarpx-4 sticky-top" style={{backgroundColor:`${backgroundColor}`}}>
      <Container fluid className='border border-4' >
        <Navbar.Brand className={`text-${textMode}`}>Travel Blog✈️🌏</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-na" >
          <Nav className="ms-auto ">
            {/* Home */}
            <Nav.Link as={Link} to="/" className={`d-flex align-items-center gap-1 text-${textMode}`}><FaHome className='fs-5' />Home</Nav.Link>
            {/* Add */}
            <Nav.Link as={Link} to="/addblog" className={`d-flex align-items-center gap-1 text-${textMode}`}><PiNotePencilBold className='fs-5' />Post </Nav.Link>
            {/* All Blog */}
            <Nav.Link as={Link} to="/allblogs" className={`d-flex align-items-center gap-1 text-${textMode}`}><FaHeart className='fs-5' />All Blogs</Nav.Link>
            {/* Contact */}
            <Nav.Link as={Link} to="/contactus" className={`d-flex align-items-center gap-1 text-${textMode}`}><IoIosSend className='fs-4' />Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <label className="form-check-label " for="flexSwitchCheckDefault"  onClick={toggleMode}
        style={{cursor:"pointer"}}>{mode === "light" ? < MdDarkMode className='fs-3' />: < CiLight className='fs-3 text-warning'/>}</label>

      </Container>
    </Navbar>
  );
}

export default NavBar;