import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link, Outlet } from "react-router-dom";
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
                    <Container id='container-navbar'>
                        <Navbar.Brand className='navbar-link home-link'>
                            <Link to="/" className='brand-link'>
                                <img
                                    className="brand-logo"
                                    alt="Alfa Tuning logo"
                                    src={require("./../../assets/logo.png")}
                                    width="30"
                                    height="30"
                                ></img>
                                <span>Alfa Tuning</span>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Nav className="main-nav">
                                <Link to="/" className='navbar-link default-dom-link'>
                                    Home
                                </Link>
                                <Link to="/device" className='navbar-link default-dom-link'>
                                    Remote Flasher Device
                                </Link>
                                <Link to="/rnd" className='navbar-link default-dom-link'>
                                    R&D Lab
                                </Link>
                                <Link to="/partners" className='navbar-link default-dom-link'>
                                    Partners
                                </Link>
                                <a href={`mailto:${CONTACT_EMAIL}`} className='navbar-contact-pill'>
                                    <EmailIcon className="contact-icon" />
                                    Contact
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="navbar-support-strip" aria-label="Direct support channels">
                    <span>Support:</span>
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    <span aria-hidden="true">|</span>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className="contact-icon" /> @{INSTAGRAM_HANDLE}
                    </a>
                </div>
            </div>
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Navigation;