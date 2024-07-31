import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useLocation } from "react-router-dom"


function NavBar() {
  const location = useLocation();
  console.log(location)
  const includedPaths = ["/","/addblog","/allblogs"] 

  const shouldRenderHeader = includedPaths.includes(location.pathname)
  console.log(shouldRenderHeader)

  return (
    <Navbar expand="lg" className="navbar navbar-light bg-light">
      <Container fluid >
        <Navbar.Brand >Traveling Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-na">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/addblog">Add Blog</Nav.Link>
            <Nav.Link as={Link} to="/allblogs">All Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;