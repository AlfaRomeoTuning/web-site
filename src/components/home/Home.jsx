import { Helmet } from 'react-helmet'
import './Home.css'
import { BASE_URL, CONTACT_EMAIL } from '../../config';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import alfaFlasher00Image from '../../assets/AlfaFlasher00.png';
import giuliaGTAmFrontBumperImage from '../../assets/rnd/GiuliaGTAmFrontBumper.png';

function Home() {
    const pageUrl = `${BASE_URL}/`;
    const homeOgImage = `${BASE_URL}${alfaFlasher00Image}`;
    const pageTitle = 'Alfa Tuning | Giulia & Stelvio Tuning and Automotive Engineering';
    const pageDescription = 'Explore Alfa Romeo Giulia and Stelvio engine tuning, transmission updates, ABS customisation, and module services, plus remote flashing and GTA/GTAm R&D.';
    const services = [
        {
            title: 'Engine Tuning',
            description: 'ECU calibration for your engine, hardware, and driving goals. Explore 2.0-litre and Quadrifoglio software options.',
            to: '/device#engine-tuning',
            action: 'Explore Engine Tuning'
        },
        {
            title: 'Transmission Customization',
            description: 'Discuss 8HP50 and 8HP75 software options, shift behavior, and coordination with your engine calibration.',
            to: '/device#transmission-customization',
            action: 'Explore Transmission Options'
        },
        {
            title: 'ABS Customisation',
            description: 'A software-only approach to preventive engine torque reduction, with ABS braking, traction control, and ESC remaining operational.',
            to: '/device#abs-customisation',
            action: 'Explore ABS Customisation'
        },
        {
            title: 'Module Reset & BCM Cleaning',
            description: 'Prepare a BCM for adaptation to another vehicle. Review the required VIN, PROXI, and PIN-based key-transfer steps after cleaning.',
            to: '/device#module-reset',
            action: 'Review Module Reset'
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Alfa Tuning",
        "url": `${BASE_URL}/`,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${BASE_URL}/rnd?search={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Alfa Tuning",
        "url": `${BASE_URL}/`,
        "logo": `${BASE_URL}/logo.png`,
        "sameAs": [
            "https://www.facebook.com/WorksByGw",
            "https://www.instagram.com/aerodynamic_carbon/"
        ]
    };

    return (<div id="home">
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={homeOgImage} />
            <meta property="og:image:alt" content="Alfa Romeo remote flashing device by Alfa Tuning" />
            <meta property="og:site_name" content="Alfa Tuning" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={homeOgImage} />

            <link rel="canonical" href={pageUrl} />

            {/* Hreflang for international SEO */}
            <link rel="alternate" hrefLang="x-default" href={pageUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(organizationData)}
            </script>
        </Helmet>
        <section className='home-hero'>
            <Container>
                <div className="home-hero-copy">
                    <p className='home-eyebrow'>Alfa Romeo software &amp; engineering</p>
                    <h1>Software tuning for Alfa Romeo Giulia and Stelvio</h1>
                    <p className='home-lead'>
                        Engine tuning, transmission software, and ABS customisation.
                        Send us your car's details and what you want to change, and we will
                        tell you which updates fit it.
                    </p>
                    <div className='home-actions'>
                        <a href="#tuning-services" className='home-cta home-cta-primary'>Explore Tuning Services</a>
                        <a href={`mailto:${CONTACT_EMAIL}`} className='home-cta home-cta-secondary'>Discuss Your Vehicle</a>
                    </div>
                    <p className="home-platforms">Giulia / Stelvio <span aria-hidden="true"> &middot; </span> Owners &amp; workshops</p>
                </div>
            </Container>
        </section>

        <section className='home-services home-section' id="tuning-services" aria-labelledby="home-services-heading">
            <Container>
                <Row className="g-4">
                    <Col lg={4}>
                        <p className="home-eyebrow">Software services</p>
                        <h2 id="home-services-heading">Choose what you want to change.</h2>
                        <p>Power delivery, shifting, or module configuration: each starts with a different question.</p>
                        <p className="home-service-note">Feature availability depends on your vehicle, hardware, and current software. Confirm the scope before any update.</p>
                    </Col>
                    <Col lg={8}>
                        <div className="home-service-list">
                            {services.map((service, index) => (
                                <article className="home-service-row" key={service.to}>
                                    <span className="home-service-number" aria-hidden="true">0{index + 1}</span>
                                    <div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <Link to={service.to} className="home-inline-link">{service.action}<span aria-hidden="true"> &rarr;</span></Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="home-device home-section" aria-labelledby="home-device-heading">
            <Container>
                <Row className="g-4 align-items-center">
                    <Col md={6}>
                        <img src={alfaFlasher00Image} alt="Exploded view of the Alfa Tuning Remote Flashing Device" width="3840" height="2160" loading="lazy" className="img-fluid" />
                    </Col>
                    <Col md={6}>
                        <p className="home-eyebrow">Remote flashing device</p>
                        <h2 id="home-device-heading">Update your car's software over Wi-Fi</h2>
                        <p>The device plugs into your car and connects to the internet through your phone's Wi-Fi hotspot, so the agreed software can be flashed remotely. Confirm compatibility first, then follow the Android or iOS setup guide.</p>
                        <ol className="home-steps">
                            <li><strong>Define the update.</strong> Share your vehicle details, existing software, and goals.</li>
                            <li><strong>Set up the connection.</strong> Follow the guide and check that the Wi-Fi signal near the car is stable.</li>
                            <li><strong>Agree on the checks.</strong> Decide with Alfa Tuning what to check before and after the update.</li>
                        </ol>
                        <Link to="/device#setup-guide" className="home-inline-link">Explore the Remote Flasher &amp; Setup Guide<span aria-hidden="true"> &rarr;</span></Link>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="home-engineering home-section" aria-labelledby="home-engineering-heading">
            <Container>
                <Row className="g-4 align-items-center">
                    <Col md={5}>
                        <p className="home-eyebrow">Beyond software</p>
                        <h2 id="home-engineering-heading">GTA and GTAm parts, scanned in 3D</h2>
                        <p>Browse Giulia GTA and GTAm 3D scans and models. Each part has several views and shows whether the files can be downloaded or are shared on request.</p>
                        <Link to="/rnd" className="home-inline-link">Explore the R&amp;D Catalog<span aria-hidden="true"> &rarr;</span></Link>
                    </Col>
                    <Col md={7}>
                        <figure className="home-engineering-figure">
                            <img src={giuliaGTAmFrontBumperImage} alt="3D model of the Giulia GTAm front bumper" width="1920" height="805" loading="lazy" className="img-fluid" />
                            <figcaption>From the catalog: Giulia GTAm front bumper</figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="home-contact home-section" aria-labelledby="home-contact-heading">
            <Container>
                <Row className="g-4">
                    <Col md={7}>
                        <p className="home-eyebrow">Start with your vehicle</p>
                        <h2 id="home-contact-heading">Tell us about your car and what you want to change</h2>
                        <p>Include your model, year, engine, existing modifications, and the service you are interested in. We will check compatibility and suggest the next steps.</p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="home-cta home-cta-primary">Email Alfa Tuning</a>
                    </Col>
                    <Col md={5} className="home-partner-support">
                        <h3>Looking for specialist support?</h3>
                        <p>The partner list covers Alfa Romeo workshops, parts suppliers, and engineering services.</p>
                        <Link to="/partners" className="home-inline-link">Find a Partner<span aria-hidden="true"> &rarr;</span></Link>
                    </Col>
                </Row>
            </Container>
        </section>

    </div>)
}

export default Home