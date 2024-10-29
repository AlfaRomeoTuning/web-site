import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link, Outlet } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Navigation.css'

function Navigation() {
    return (
        <>
            <div className="App" id="navbar">
                <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
                    <Container  >
                        <Navbar.Brand href="#" className='navbar-link home-link'>
                            <Link to="/">Alfa Tuning</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Nav >
                                <Nav.Link className='navbar-link'>
                                    <Link to="/product">
                                        OBD Tool
                                    </Link>
                                </Nav.Link>
                                <Nav.Link className='navbar-link'>
                                    <Link to="/software">
                                        Software
                                    </Link>
                                </Nav.Link>
                                <Nav.Link className='navbar-link'>
                                    <Link to="/rnd">
                                        R&D
                                    </Link>
                                </Nav.Link>
                                <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Telegram
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Email</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Alfa Romeo
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className='navbar-link'>
                                    <Link to="/manuals">
                                        Manuals
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;