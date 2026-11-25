import { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BASE_URL, CONTACT_EMAIL } from '../../config';
import Lightbox from '../lightbox/Lightbox';
import './MobileCda.css';

import homeShot from '../../assets/mobilecda/home.webp';
import homeShotSmall from '../../assets/mobilecda/home-800.webp';
import topologyShot from '../../assets/mobilecda/topology.webp';
import topologyShotSmall from '../../assets/mobilecda/topology-800.webp';
import systemShot from '../../assets/mobilecda/system-detail.webp';
import systemShotSmall from '../../assets/mobilecda/system-detail-800.webp';
import connectionShot from '../../assets/mobilecda/connection.webp';
import connectionShotSmall from '../../assets/mobilecda/connection-800.webp';
import vehicleShot from '../../assets/mobilecda/vehicle-select.webp';
import vehicleShotSmall from '../../assets/mobilecda/vehicle-select-800.webp';
import settingsShot from '../../assets/mobilecda/settings.webp';
import settingsShotSmall from '../../assets/mobilecda/settings-800.webp';
import homeLightShot from '../../assets/mobilecda/home-light.webp';
import homeLightShotSmall from '../../assets/mobilecda/home-light-800.webp';
import systemLightShot from '../../assets/mobilecda/system-detail-light.webp';
import systemLightShotSmall from '../../assets/mobilecda/system-detail-light-800.webp';

const PAGE_PATH = '/mobilecda';
const TITLE = 'mobileCDA | Diagnostics and ECU Flashing App | Alfa Tuning';
const DESCRIPTION = 'mobileCDA reads the vehicle network, fault codes and ECU data on Alfa Romeo and other FCA vehicles, and flashes ECUs through a wiTECH VCI.';

// Screenshot sizes: full images are 1600x875, thumbnails 800x438.
const SHOT_WIDTH = 1600;
const SHOT_HEIGHT = 875;

const SCREENS = [
    {
        id: 'home',
        src: homeShot,
        thumb: homeShotSmall,
        alt: 'mobileCDA home screen with the selected Alfa Romeo Giulia and the Diagnostics, Flashing, Coding and Special functions tools',
        caption: 'Home: the selected vehicle and the tools available for it.'
    },
    {
        id: 'topology',
        src: topologyShot,
        thumb: topologyShotSmall,
        alt: 'Topology tab showing the BCM gateway, the can_c_fga bus at 500 kbit/s and the ECUs connected to it',
        caption: 'Topology: the gateway, each CAN bus and the ECUs behind it.'
    },
    {
        id: 'system-detail',
        src: systemShot,
        thumb: systemShotSmall,
        alt: 'Systems list next to the ECM detail page with Identify, Connect directly, ECU data and fault code actions',
        caption: 'Systems: protocol and CAN IDs for each ECU, with its data and fault codes on the right.'
    },
    {
        id: 'connection',
        src: connectionShot,
        thumb: connectionShotSmall,
        alt: 'Connection screen with a saved Bluetooth adapter, a saved wiTECH VCI and buttons to add new adapters',
        caption: 'Connection: saved adapters, Bluetooth scan, Wi-Fi adapters and wiTECH VCI.'
    },
    {
        id: 'vehicle-select',
        src: vehicleShot,
        thumb: vehicleShotSmall,
        alt: 'Vehicle selection with brands on the left and Alfa Romeo 4C, Giulia, Stelvio and Tonale on the right',
        caption: 'Vehicle selection by brand, model, model year or body code.'
    },
    {
        id: 'settings',
        src: settingsShot,
        thumb: settingsShotSmall,
        alt: 'Settings screen with language, units, theme, CAN bitrate and connection options',
        caption: 'Settings: language, units, theme, CAN bitrate and auto reconnect.'
    },
    {
        id: 'home-light',
        src: homeLightShot,
        thumb: homeLightShotSmall,
        alt: 'mobileCDA home screen in the light theme',
        caption: 'Light theme.'
    },
    {
        id: 'system-detail-light',
        src: systemLightShot,
        thumb: systemLightShotSmall,
        alt: 'Systems list and ECM detail page in the light theme',
        caption: 'Systems and ECU detail in the light theme.'
    }
];

const screenById = (id) => SCREENS.find((screen) => screen.id === id);

const FEATURES = [
    {
        id: 'topology',
        eyebrow: 'Vehicle network',
        title: 'See how the car is wired before you scan it',
        body: [
            'The Topology tab draws the gateway, every CAN bus with its OBD pins and bitrate, and the ECUs on each bus. A 2022 Giulia has 36 ECUs in the list.',
            'Scan the vehicle to mark which systems are actually fitted.'
        ],
        screen: 'topology'
    },
    {
        id: 'systems',
        eyebrow: 'Systems and fault codes',
        title: 'Read and clear fault codes, ECU by ECU',
        body: [
            'Each system shows its bus, diagnostic protocol and request and response CAN IDs. Open one to read and clear its fault codes, choose a diagnostic session, or connect to it directly on the bench.',
            'Once the ECU is identified, mobileCDA loads its parameters, actions and ECU info (part numbers, software versions and firmware) from the database.'
        ],
        screen: 'system-detail'
    },
    {
        id: 'adapters',
        eyebrow: 'Adapters',
        title: 'Bluetooth and Wi-Fi adapters, or a wiTECH VCI',
        body: [
            'Diagnostics work through ELM327-compatible adapters over Bluetooth or Wi-Fi, such as the vLinker FD. Flashing needs a wiTECH VCI (MicroPod) on the same network.',
            'Saved adapters stay in the list, and the app can reconnect to the last one when it starts or after a lost connection.'
        ],
        screen: 'connection'
    },
    {
        id: 'vehicles',
        eyebrow: 'Vehicles',
        title: 'Alfa Romeo first, with the rest of the FCA range',
        body: [
            'The vehicle list has 111 models from Alfa Romeo, Fiat, Jeep, Chrysler, Dodge, Ram, Lancia, Maserati, Iveco and Volkswagen. Search by model name or body code, such as GA for the Giulia.',
            'The selected vehicle decides which ECU list and topology the app shows.'
        ],
        screen: 'vehicle-select'
    }
];

function MobileCda() {
    const pageUrl = `${BASE_URL}${PAGE_PATH}`;
    const ogImage = `${BASE_URL}${homeShot}`;
    const [openIndex, setOpenIndex] = useState(null);

    const openScreen = useCallback((id) => setOpenIndex(SCREENS.findIndex((screen) => screen.id === id)), []);
    const closeScreen = useCallback(() => setOpenIndex(null), []);
    const showPrev = useCallback(() => setOpenIndex((i) => Math.max(0, i - 1)), []);
    const showNext = useCallback(() => setOpenIndex((i) => Math.min(SCREENS.length - 1, i + 1)), []);

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'mobileCDA',
        applicationCategory: 'UtilitiesApplication',
        description: DESCRIPTION,
        url: pageUrl,
        image: ogImage,
        screenshot: SCREENS.map((screen) => `${BASE_URL}${screen.src}`),
        publisher: {
            '@type': 'Organization',
            name: 'Alfa Tuning',
            url: `${BASE_URL}/`
        }
    };

    const openShot = openIndex === null ? null : SCREENS[openIndex];

    return (
        <div id="mobilecda">
            <Helmet>
                <title>{TITLE}</title>
                <meta name="description" content={DESCRIPTION} />
                <link rel="canonical" href={pageUrl} />

                <meta property="og:title" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:alt" content="mobileCDA home screen" />
                <meta property="og:site_name" content="Alfa Tuning" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={TITLE} />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta name="twitter:image" content={ogImage} />

                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <section className="mcda-hero" aria-labelledby="mcda-title">
                <Container>
                    <Row className="g-4 g-lg-5 align-items-center">
                        <Col lg={5}>
                            <p className="mcda-eyebrow">mobileCDA by Alfa Tuning</p>
                            <h1 id="mcda-title">Diagnostics and ECU flashing for Alfa Romeo and FCA vehicles</h1>
                            <p className="mcda-lead">
                                mobileCDA shows the car's network, reads and clears fault codes, reads ECU data,
                                and flashes ECUs through a wiTECH VCI. Firmware and calibrations are matched to
                                the part and software numbers the ECU reports.
                            </p>
                            <div className="mcda-actions">
                                <a href="#screens" className="mcda-cta mcda-cta-primary">See the screens</a>
                                <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('mobileCDA question')}`} className="mcda-cta mcda-cta-secondary">Ask a question</a>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <ShotButton screen={screenById('home')} onOpen={openScreen} eager />
                        </Col>
                    </Row>
                </Container>
            </section>

            {FEATURES.map((feature, index) => {
                const screen = screenById(feature.screen);
                return (
                    <section
                        key={feature.id}
                        id={feature.id}
                        className={`mcda-feature mcda-section ${index % 2 ? 'mcda-feature-alt' : ''}`}
                        aria-labelledby={`${feature.id}-heading`}
                    >
                        <Container>
                            <Row className={`g-4 g-lg-5 align-items-center ${index % 2 ? 'flex-lg-row-reverse' : ''}`}>
                                <Col lg={5}>
                                    <p className="mcda-eyebrow">{feature.eyebrow}</p>
                                    <h2 id={`${feature.id}-heading`}>{feature.title}</h2>
                                    {feature.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                </Col>
                                <Col lg={7}>
                                    <ShotButton screen={screen} onOpen={openScreen} />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                );
            })}

            <section id="flashing" className="mcda-section mcda-flashing" aria-labelledby="flashing-heading">
                <Container>
                    <Row className="g-4">
                        <Col lg={5}>
                            <p className="mcda-eyebrow">Flashing</p>
                            <h2 id="flashing-heading">ECU programming through a wiTECH VCI</h2>
                            <p>
                                The app sends the ECU's identification data to the Alfa Tuning server, which looks
                                up matching firmware and calibration files. The file is then written through the VCI.
                            </p>
                        </Col>
                        <Col lg={7}>
                            <ol className="mcda-steps">
                                <li><strong>Connect the VCI.</strong> Add the wiTECH VCI by its IP address on the same Wi-Fi network.</li>
                                <li><strong>Identify the ECU.</strong> mobileCDA reads the hardware, software and calibration numbers.</li>
                                <li><strong>Pick the file.</strong> The server returns the firmware and calibrations that fit that ECU.</li>
                                <li>
                                    <strong>Follow the prompts.</strong> When the VCI asks to switch the ignition off or on,
                                    the app shows a dialog. If the app is in the background, the prompt arrives as a notification.
                                </li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mcda-section" aria-labelledby="more-heading">
                <Container>
                    <h2 id="more-heading">Also in the app</h2>
                    <Row className="g-4 mcda-more">
                        <Col md={6} lg={3}>
                            <h3>Logs</h3>
                            <p>Adapter, server and app events for the current session. Copy or share them when you report a problem.</p>
                        </Col>
                        <Col md={6} lg={3}>
                            <h3>Phone and tablet layouts</h3>
                            <p>On a tablet, the system list and the ECU details sit side by side. On a phone, they open as separate pages.</p>
                        </Col>
                        <Col md={6} lg={3}>
                            <h3>Light and dark theme</h3>
                            <p>Follows the device setting, or pick one in Settings. Text scales with the system font size.</p>
                        </Col>
                        <Col md={6} lg={3}>
                            <h3>In development</h3>
                            <p>Coding and adaptations, and service functions and resets. Both are visible in the app and marked "Coming soon".</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="screens" className="mcda-section mcda-gallery-section" aria-labelledby="screens-heading">
                <Container>
                    <h2 id="screens-heading">Screens</h2>
                    <p className="mcda-muted">Captured on an 11-inch tablet. Select a screen to enlarge it.</p>
                    <ul className="mcda-gallery">
                        {SCREENS.map((screen) => (
                            <li key={screen.id}>
                                <ShotButton screen={screen} onOpen={openScreen} showCaption />
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            <section className="mcda-section mcda-needs" aria-labelledby="needs-heading">
                <Container>
                    <Row className="g-4">
                        <Col lg={6}>
                            <h2 id="needs-heading">What you need</h2>
                            <ul>
                                <li>An ELM327-compatible OBD adapter (Bluetooth or Wi-Fi) for diagnostics.</li>
                                <li>A wiTECH VCI (MicroPod) for flashing.</li>
                                <li>A mobileCDA account. You can sign in with Google.</li>
                                <li>An internet connection for ECU lookup and for downloading flash files.</li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <h2 id="data-heading">Your data</h2>
                            <p>
                                Fault codes and live values stay on your device. The app sends ECU identification
                                data to our server only to find matching files, and has no analytics or ad SDKs.
                            </p>
                            <p>
                                <Link to="/mobilecda/privacy-policy" className="mcda-link">Read the mobileCDA Privacy Policy</Link>
                            </p>
                            <p>
                                Questions or problems: <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('mobileCDA support')}`} className="mcda-link">{CONTACT_EMAIL}</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {openShot && (
                <Lightbox
                    image={{ src: openShot.src, alt: openShot.alt, caption: openShot.caption }}
                    onClose={closeScreen}
                    onPrev={openIndex > 0 ? showPrev : undefined}
                    onNext={openIndex < SCREENS.length - 1 ? showNext : undefined}
                />
            )}
        </div>
    );
}

function ShotButton({ screen, onOpen, showCaption = false, eager = false }) {
    return (
        <figure className="mcda-shot">
            <button type="button" className="mcda-shot-button" onClick={() => onOpen(screen.id)} aria-label={`Enlarge screenshot: ${screen.caption}`}>
                <img
                    src={showCaption ? screen.thumb : screen.src}
                    srcSet={`${screen.thumb} 800w, ${screen.src} 1600w`}
                    sizes={showCaption ? '(min-width: 992px) 33vw, (min-width: 576px) 50vw, 100vw' : '(min-width: 992px) 58vw, 100vw'}
                    alt={screen.alt}
                    width={SHOT_WIDTH}
                    height={SHOT_HEIGHT}
                    loading={eager ? 'eager' : 'lazy'}
                />
            </button>
            {showCaption && <figcaption>{screen.caption}</figcaption>}
        </figure>
    );
}

export default MobileCda;
