import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import './NavigationBar.css';


//Navbar.Collapse: Lets you collapse the navigation bar inside the  element
//Navbar = expands: lg 
//Stick = top: Navigation bar sticks to the top
const NavigationBar = () => {
    return(
        <Navbar expand="lg" sticky="top" className="custom-navbar"> 
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;