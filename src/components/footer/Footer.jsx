import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../../config';
import { EmailIcon, InstagramIcon } from '../icons/SocialIcons';
import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="visually-hidden">
                Site footer
            </h2>
            <div className="footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo-link">
                        <img
                            className="footer-logo"
                            width="32"
                            height="32"
                            alt="Alfa Tuning logo"
                            src={require('./../../assets/logo.png')}
                        />
                        <span>Alfa Tuning</span>
                    </Link>
                    <p className="footer-tagline">
                        Remote flashing &amp; custom parts for Alfa Romeo.
                    </p>
                </div>

                <nav className="footer-nav" aria-label="Footer">
                    <h3 className="footer-col-title">Explore</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/device">Remote Flasher Device</Link></li>
                        <li><Link to="/rnd">R&amp;D</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                    </ul>
                </nav>

                <div className="footer-contact">
                    <h3 className="footer-col-title">Contact</h3>
                    <ul>
                        <li>
                            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">
                                <EmailIcon className="contact-icon" />
                                <span>{CONTACT_EMAIL}</span>
                            </a>
                        </li>
                        <li>
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
                                <InstagramIcon className="contact-icon" />
                                <span>@{INSTAGRAM_HANDLE}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {year} Alfa Tuning. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
