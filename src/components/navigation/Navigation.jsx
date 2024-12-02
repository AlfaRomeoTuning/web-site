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
                <Navbar
                    className='navbar-top'
                    bg="dark" data-bs-theme="dark">
                    <Container id='conatiner-navbar'>
                        <Navbar.Brand href="#" className='navbar-link home-link'>
                            <Link to="/">Alfa Tuning</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Nav >
                                <Nav.Link className='navbar-link'>
                                    <Link to="/product">
                                        Remote Flasher Device
                                    </Link>
                                </Nav.Link>

                                {/* <Nav.Link className='navbar-link'>
                                    <Link to="/software">
                                        Software
                                    </Link>
                                </Nav.Link> */}
                                <NavDropdown title="Contact Us" id="basic-nav-dropdown" >
                                    <p className='navbar-contact-us'>Have questions about our Alfa Romeo flashing device or interested in a custom solution for your vehicle? We're here to help!<br />
                                        <strong>Email us:</strong> <a href="mailto:artem@alfatuning.app">artem@alfatuning.app</a><br />
                                        <strong>Instagram:</strong> <a href="https://www.instagram.com/alfatuning.app">alfatuning.app</a><br />
                                        Please allow up to 24 hours for a response. We’ll get back to you as soon as possible!</p>
                                </NavDropdown>
                                

                                <Nav.Link className='navbar-link'>
                                    <Link to="/rnd">
                                        R&D
                                    </Link>
                                </Nav.Link>

                                <Nav.Link className='navbar-link'>
                                    <Link to="/partners">
                                        Partners
                                    </Link>
                                </Nav.Link>
                                
                                <Nav.Link className='navbar-link'>
                                    <Link to="/">

                                    </Link>
                                </Nav.Link>

                                {/* <Nav.Link className='navbar-link'>
                                    <Link onClick={() => window.location = ''}>
                                        Contact Us
                                    </Link>
                                </Nav.Link> */}

                                {/* <Nav.Link className='navbar-link'>
                                    <Link to="/manuals">
                                        Manuals
                                    </Link>
                                </Nav.Link> */}
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