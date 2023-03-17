import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import NavBarCSS from './NavBarCSS.css'

const NavBar = () => {
  const navDiv ={
    marginBottom:'50px',
    borderLeft: '2px solid rgba(0,0,0,0.2)',
    borderRight: '2px solid rgba(0,0,0,0.2)',
    border: '2px solid rgba(0,0,0,0.2)',
    padding : '4px',
    borderRadius : '4px'

  }
    return (
        <div style={navDiv}>
            <Navbar bg="light" expand="lg">

        <Navbar.Brand ><Link to='/' className='btnClass'>Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/studentlogin" className='btnClass'>Student Login</Link></Nav.Link>
            <Nav.Link ><Link to="/studentregistration" className='btnClass'>Student Registration</Link></Nav.Link>
            <Nav.Link ><Link to="/postteacherreview" className='btnClass'>Post Teacher Reviews</Link></Nav.Link>
            <Nav.Link ><Link to="/listteacherreviews" className='btnClass'>Teacher's Reviews</Link></Nav.Link>
            <Nav.Link ><Link to="/studentList" className='btnClass'>Student's List </Link></Nav.Link>
            <Nav.Link ><Link to="/addteacher" className='btnClass'>Add Teacher </Link></Nav.Link>
            <Nav.Link ><Link to="/teacherlist" className='btnClass'>Teacher's List </Link></Nav.Link>
            <Nav.Link ><Link to="/newreviews" className='btnClass'>New reviews </Link></Nav.Link>
            
        
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
        </div>
    );
};

export default NavBar;