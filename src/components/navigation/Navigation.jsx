import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link, Outlet } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Footer from '../footer/Footer';
import { EmailIcon, InstagramIcon } from '../icons/SocialIcons';
import { CONTACT_EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../config';
import './Navigation.css'

function Navigation() {
    return (
        <>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <div className="App" id="navbar">
                <Navbar
                    className='navbar-top'
                    bg="dark" data-bs-theme="dark">
                    <Container id='conatiner-navbar'>
                        <Navbar.Brand className='navbar-link home-link'>
                            <Link to="/"><img style={{ width: "30px", marginRight: "8px", paddingBottom: "4px" }} alt="logo" src={require("./../../assets/logo.png")}></img>Alfa Tuning</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Nav>
                                <Link to="/device" className='navbar-link default-dom-link'>
                                    Remote Flasher Device
                                </Link>
                                <NavDropdown title="Contact Us" id="basic-nav-dropdown" >
                                    <p className='navbar-contact-us'>Have questions about our Alfa Romeo flashing device or interested in a custom solution for your vehicle? We're here to help!<br />
                                        <span className="navbar-contact-row"><EmailIcon className="contact-icon" /> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></span>
                                        <span className="navbar-contact-row"><InstagramIcon className="contact-icon" /> <a href={INSTAGRAM_URL}>{INSTAGRAM_HANDLE}</a></span>
                                        Please allow up to 24 hours for a response. We’ll get back to you as soon as possible!</p>
                                </NavDropdown>


                                <Link to="/rnd" className='navbar-link default-dom-link'>
                                    R&D
                                </Link>

                                <Link to="/partners" className='navbar-link default-dom-link'>
                                    Partners
                                </Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Navigation;