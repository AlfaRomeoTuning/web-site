import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Product.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet';
import { BASE_URL, CONTACT_EMAIL } from '../../config';
import { Link, useLocation } from 'react-router-dom';

// Provides the "open image in lightbox" handler to nested instruction steps
// without prop-drilling through every step.
const LightboxContext = React.createContext(() => {});

function Product() {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView();
        }
    }, [hash]);

    const [fullView, setFullView] = React.useState(true);
    const [activeTab, setActiveTab] = React.useState('android');
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = useCallback((src, alt) => setLightboxImage({ src, alt }), []);
    const closeLightbox = useCallback(() => setLightboxImage(null), []);
    //const uA = navigator.userAgent || navigator.vendor || window.opera;
    //const isIOS = (/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document);

    const features = [
        {
            title: "Boost Performance",
            description: "Explore engine tuning for Alfa Romeo Giulia and Stelvio, from 2.0-litre ECU calibration to Quadrifoglio software options. Availability depends on your engine, hardware, and current software.",
            href: "#engine-tuning",
            linkText: "Explore Giulia and Stelvio engine tuning"
        },
        {
            title: "Transmission Customization",
            description: "Explore transmission software options for your Giulia or Stelvio, including 8HP50 and 8HP75 compatibility, shift behavior, and selected Launch Control or GTAm-related updates.",
            href: "#transmission-customization",
            linkText: "Explore Giulia and Stelvio transmission customization"
        },
        {
            title: "ABS Customisation",
            description: "Address ABS-requested preventive engine torque reduction with a software-only tune for Giulia and Stelvio, across all engines and driving modes. ABS braking, traction control, and ESC remain operational.",
            href: "#abs-customisation",
            linkText: "Explore Giulia and Stelvio ABS customisation"
        },
        {
            title: "Shift Paddles Fix",
            description: "Software upgrade of Transmission Control Module (TCM) to fix non-working shift paddles in Race mode."
        },
        {
            title: "Race Mode Fix",
            description: "Software upgrade of Drivetrain Control Module (DTCM) to activate race mode."
        },
        {
            title: "EVAP Fix",
            description: "Software upgrade of Engine Control Module (ECM) to disable faulty EVAP system."
        },
        {
            title: "Component Compatibility",
            description: "Configure modules to work seamlessly with retrofitted ETM and other enhancements."
        },
        {
            title: "Module Reset",
            id: "module-reset",
            description: "Clear stored VIN data as part of module preparation, including BCM (Body Computer Module) cleaning to a virgin state for adaptation to another vehicle. After BCM cleaning, the customer must write the new VIN code, write the vehicle's PROXI configuration, and transfer the secret keys from RFHUB to BCM using the vehicle's PIN. Confirm module compatibility before installation; cleaning alone does not complete vehicle configuration."
        },
        {
            title: "Flexible Customization",
            description: "Any additional updates and software upgrades tailored to your unique driving style."
        }
    ];

    const flasherImageModule = require("../../assets/AlfaFlasher00.png");
    const flasherImage = typeof flasherImageModule === 'string' ? flasherImageModule : flasherImageModule.default;
    const absoluteImage = BASE_URL + flasherImage;
    const pageUrl = `${BASE_URL}/device`;
    const pageDescription = "Explore Alfa Romeo Giulia and Stelvio engine tuning, transmission and ABS customisation, with software-only updates and remote flashing setup guidance.";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Alfa Romeo Remote Flashing Device",
        "description": pageDescription,
        "image": absoluteImage,
        "brand": {
            "@type": "Brand",
            "name": "Alfa Tuning"
        },
        "sku": "AT-FLASHER-01",
        "mpn": "AT-FLASHER-01"
    };

    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which Alfa Romeo models are supported?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The remote flashing workflow is designed for Alfa Romeo models including Giulia and Stelvio. Contact Alfa Tuning for your exact engine and module compatibility."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need a stable internet connection for flashing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Use a strong and stable Wi-Fi connection before and during flashing to ensure reliable communication with the device."
                }
            },
            {
                "@type": "Question",
                "name": "Can this device enable custom tuning features?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Alfa Tuning supports custom software updates such as performance remapping, transmission customization, and selected module fixes based on your vehicle setup."
                }
            }
        ]
    };

    return (
        <LightboxContext.Provider value={openLightbox}>
        <div id="product-page">
            <Helmet>
                <title>Product Alfa Tuning | Remote Flashing Device</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={pageUrl} />

                {/* Hreflang for international SEO */}
                <link rel="alternate" hrefLang="x-default" href={pageUrl} />

                {/* Open Graph */}
                <meta property="og:title" content="Product Alfa Tuning | Remote Flashing Device" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={absoluteImage} />
                <meta property="og:image:alt" content="Alfa Romeo remote flashing device by Alfa Tuning" />
                <meta property="og:site_name" content="Alfa Tuning" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Product Alfa Tuning | Remote Flashing Device" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={absoluteImage} />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqData)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className='hero-section'>
                <div className='text-container'>
                    <Row style={{ width: '100%', alignItems: 'center' }}>
                        <Col sm={12} md={5} className="image-column">
                            <div
                                className="image-wrapper"
                                role="button"
                                tabIndex={0}
                                aria-pressed={!fullView}
                                aria-label="Switch product image view"
                                onClick={() => setFullView(!fullView)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setFullView(!fullView);
                                    }
                                }}
                            >
                                <img
                                    alt="Alfa Romeo Flashing Device Interface"
                                    className='interface-image'
                                    src={require(fullView ? "./../../assets/AlfaFlasher00.png" : "./../../assets/AlfaFlasher01.png")}
                                    width="1200"
                                    height="900"
                                />
                                <p className="image-hint">Click to switch view</p>
                            </div>
                        </Col>
                        <Col sm={12} md={7} className="text-column">
                            <h1>Unleash the Full Potential of Your Alfa Romeo</h1>
                            <p className="subtitle">Remote Flashing Device Workflow for Giulia and Stelvio</p>
                            <p className="description">
                                Designed for enthusiasts and workshops that need a repeatable calibration path without unnecessary workshop downtime.
                            </p>
                            <p className="note">
                                <strong>Note:</strong> Feature availability depends on vehicle setup and module compatibility.
                            </p>
                            <div className="cta-buttons">
                                <a href="#setup-guide" className="btn btn-primary btn-lg">Open Setup Guide</a>
                                <Link to="/rnd" className="btn btn-outline-primary btn-lg">Browse Related R&amp;D</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            {/* Features Section */}
            <section className='features-section'>
                <div className='text-container'>
                    <h2>What We Offer</h2>
                    <Row style={{ width: '100%' }}>
                        {features.map((feature, index) => (
                            <Col sm={12} md={6} lg={6} key={index} className="feature-card">
                                <div className="feature-content" id={feature.id}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                    {feature.href && (
                                        <a href={feature.href}>{feature.linkText}</a>
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="service-highlight">
                        <h3>Professional Services</h3>
                        <p>
                            Our service also offers special solutions for tuning companies, allowing them to perform remote flashing for their clients' Alfa Romeo vehicles. Leverage our technology to expand your service offerings and provide high-quality upgrades right from your workshop.
                        </p>
                        <p>
                            Trust in technology that doesn't just enhance but transforms your Alfa Romeo. Build a car ready for the track and enjoy every moment behind the wheel!
                        </p>
                    </div>
                </div>
            </section>

            <section className="tuning-details-section" id="engine-tuning" aria-labelledby="engine-tuning-heading">
                <div className="text-container">
                    <h2 id="engine-tuning-heading">Engine Tuning for Alfa Romeo Giulia and Stelvio</h2>
                    <p className="description">
                        Engine tuning starts with the car you have and the way you want to use it.
                        For Giulia and Stelvio owners, the discussion should cover power delivery,
                        throttle response, and everyday drivability, rather than a peak horsepower
                        figure alone. The right calibration depends on the exact engine, vehicle
                        condition, fuel, installed hardware, and existing ECU software.
                    </p>
                    <Row className="g-4 mb-4">
                        <Col md={6}>
                            <h3>2.0-litre Engine Calibration</h3>
                            <p>
                                ECU calibration coordinates functions such as torque requests,
                                boost control, ignition, and fueling. These settings need to work
                                together with the engine and transmission, not simply request more
                                boost. Share your current specification and any modifications so
                                the available tuning options can be assessed for your Giulia or Stelvio.
                            </p>
                        </Col>
                        <Col md={6}>
                            <h3>Quadrifoglio and GTAm Software Options</h3>
                            <p>
                                Quadrifoglio tuning requires its own compatibility assessment.
                                Ask about the GTAm-related software options available for your
                                configuration rather than assuming every Giulia or Stelvio can
                                use the same calibration. A software update is not a complete GTAm
                                hardware conversion, and does not by itself establish a particular
                                power output.
                            </p>
                        </Col>
                    </Row>
                    <h3>From ECU Calibration to Remote Flashing</h3>
                    <p>
                        Calibration defines how the engine is controlled; flashing writes the
                        agreed software to a compatible module. The Remote Flashing Device
                        provides the update workflow, but does not determine which tune is suitable
                        for your car. Confirm compatibility and the intended changes with Alfa Tuning
                        before starting, then follow the setup guide for a stable connection.
                        Transmission customization is a separate option, not an automatic part of
                        every engine update.
                    </p>
                    <h3>Before Discussing Your Tune</h3>
                    <ul>
                        <li>Provide the model, model year, engine variant, and current ECU software details if known.</li>
                        <li>Describe installed hardware, previous tuning, and the fuel you normally use.</li>
                        <li>Explain your goals and report any diagnostic faults or maintenance concerns.</li>
                        <li>Confirm how the proposed changes will be validated and what results can realistically be expected.</li>
                    </ul>
                    <p className="note">
                        No single power or torque gain applies to every Giulia or Stelvio.
                        Results depend on the vehicle and calibration and should be supported by
                        measurements. Check local road-use and emissions requirements, along with
                        warranty and insurance implications, before proceeding.
                    </p>
                    <div className="cta-buttons">
                        <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">Discuss Your Engine Tune</a>
                        <a href="#setup-guide" className="btn btn-outline-primary">Review the Flashing Setup Guide</a>
                    </div>
                </div>
            </section>

            <section className="tuning-details-section" id="transmission-customization" aria-labelledby="transmission-customization-heading">
                <div className="text-container">
                    <h2 id="transmission-customization-heading">Transmission Customization for Alfa Romeo Giulia and Stelvio</h2>
                    <p className="description">
                        Transmission software is part of how your Giulia or Stelvio delivers power,
                        not just how quickly it changes gear. The Transmission Control Module (TCM)
                        manages gear selection and shift execution in coordination with the engine.
                        Discuss the behavior you want in everyday driving and manual shifting before
                        selecting an update.
                    </p>
                    <Row className="g-4 mb-4">
                        <Col md={6}>
                            <h3>8HP50 and 8HP75 Compatibility</h3>
                            <p>
                                Start by identifying the gearbox fitted to your car and its current
                                TCM software. Options for an 8HP50 or 8HP75 must be assessed against
                                the exact vehicle configuration; the gearbox family alone does not
                                confirm compatibility. Include the model year, engine variant, and
                                any previous engine or transmission updates when contacting Alfa Tuning.
                            </p>
                        </Col>
                        <Col md={6}>
                            <h3>Shift Behavior and Engine Coordination</h3>
                            <p>
                                Shift scheduling, shift feel, and manual-mode response are useful
                                starting points for a customization discussion. Engine torque delivery
                                and transmission control need to remain coordinated, especially if
                                the ECU has already been tuned. A software update does not upgrade
                                gearbox hardware or establish a new mechanical torque rating.
                            </p>
                        </Col>
                    </Row>
                    <h3>Launch Control and GTAm-related Software Options</h3>
                    <p>
                        Ask whether Launch Control or GTAm-related transmission updates are available
                        for your particular configuration. These are selected options, not features
                        included with every flash or supported by every Giulia and Stelvio.
                        Confirm the required hardware, software, and operating conditions before
                        proceeding. GTAm-related software does not turn the transmission or vehicle
                        into a complete GTAm specification.
                    </p>
                    <h3>Customization Is Not a Fault Repair</h3>
                    <p>
                        Report warning messages, rough shifts, or non-working paddles before
                        requesting a tune. Mechanical and diagnostic issues need assessment rather
                        than being masked by a calibration change. The Race-mode shift-paddle
                        software fix listed above is a separate compatibility-dependent service;
                        it should not be assumed to be part of every transmission customization.
                    </p>
                    <h3>Before Discussing Your Transmission Update</h3>
                    <ul>
                        <li>Provide the model, model year, engine variant, gearbox identification, and TCM software details if known.</li>
                        <li>Describe existing ECU tuning, transmission updates, hardware changes, and any diagnostic faults.</li>
                        <li>Explain which driving modes or shift behavior you want to discuss.</li>
                        <li>Agree on the available changes, preparation requirements, and post-update checks before flashing.</li>
                    </ul>
                    <p className="note">
                        Availability and results depend on the vehicle, gearbox condition, and
                        software combination. Do not assume a faster shift time, increased torque
                        capacity, or Launch Control availability without confirmation.
                        Check warranty, insurance, and local road-use requirements before proceeding.
                    </p>
                    <p>
                        Planning both updates? Review the <a href="#engine-tuning">Giulia and Stelvio engine tuning guidance</a> so
                        ECU and TCM changes can be discussed together. Once compatibility is confirmed,
                        use the setup guide for the Remote Flashing Device connection workflow.
                    </p>
                    <div className="cta-buttons">
                        <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">Discuss Your Transmission Update</a>
                        <a href="#setup-guide" className="btn btn-outline-primary">Review the Flashing Setup Guide</a>
                    </div>
                </div>
            </section>

            <section className="tuning-details-section" id="abs-customisation" aria-labelledby="abs-customisation-heading">
                <div className="text-container">
                    <h2 id="abs-customisation-heading">ABS Customisation for Alfa Romeo Giulia and Stelvio</h2>
                    <p className="description">
                        Engine torque can be limited by requests from the ABS control unit, not
                        just by the ECU or transmission software. Alfa Tuning offers a software-only
                        solution addressing this preventive torque-reduction behavior for Giulia
                        and Stelvio, across all engine variants and driving modes.
                    </p>
                    <Row className="g-4 mb-4">
                        <Col md={6}>
                            <h3>Understanding Preventive Torque Reduction</h3>
                            <p>
                                In its Quadrifoglio investigation, Squadra Tuning describes the ABS
                                module requesting an engine torque limit before wheelspin occurs.
                                This can restrict power delivery in lower gears in A, N, and D
                                modes, even when the driver expects more from the engine.
                                The article distinguishes this preventive strategy from traction
                                control intervention once wheelspin occurs.
                            </p>
                            <p>
                                Read the background in <a href="https://squadra-tuning.com/quadrifoglio-torque-reduction/">Squadra Tuning's Quadrifoglio torque-reduction investigation</a>.
                                Its findings concern the Quadrifoglio; the service scope described
                                here is Alfa Tuning's own.
                            </p>
                        </Col>
                        <Col md={6}>
                            <h3>Our Software-only Solution</h3>
                            <p>
                                Our approach uses a software tune, not an added CAN filter,
                                wiring modification, or external hardware. We can address this
                                behavior across driving modes without requiring you to switch to
                                Race mode as a workaround. Share your vehicle and current software
                                details so we can agree on the appropriate update.
                            </p>
                        </Col>
                    </Row>
                    <h3>ABS Braking, Traction Control, and ESC Remain Operational</h3>
                    <p>
                        This customisation targets preventive engine torque reduction; it is not
                        an ABS braking delete or a request to disable traction control or Electronic
                        Stability Control (ESC). ABS braking, traction control, and ESC remain
                        operational after the tune. Existing driving-mode behavior still matters:
                        the update does not add driving aids to modes where they are already disabled.
                    </p>
                    <h3>Before Discussing Your ABS Update</h3>
                    <ul>
                        <li>Provide the model, model year, engine variant, and ABS software details if known.</li>
                        <li>Describe existing engine or transmission tuning and the driving modes in which you notice torque reduction.</li>
                        <li>Report ABS, traction-control, or ESC warning messages for diagnosis before customisation.</li>
                        <li>Confirm the update scope and post-update checks with Alfa Tuning before proceeding.</li>
                    </ul>
                    <p className="note">
                        This is a control-software change, not an increase in engine power or a
                        repair for braking-system faults. Results depend on the vehicle and its
                        current configuration. Check local road-use requirements, warranty, and
                        insurance implications before proceeding.
                    </p>
                    <div className="cta-buttons">
                        <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">Discuss Your ABS Customisation</a>
                        <a href="#engine-tuning" className="btn btn-outline-primary">Review Related Engine Tuning</a>
                    </div>
                </div>
            </section>

            {/* Setup Guide Section */}
            <section className='product-guide' id="setup-guide">
                <div className='text-container'>
                    <h2>How to Setup</h2>

                    {/* Prerequisites */}
                    <div className="prerequisites">
                        <h3>Before You Start</h3>
                        <ul>
                            <li>Connect to your <strong>HOME WiFi</strong> if your car is close to your router (Cell phone WiFi may be too slow)</li>
                            <li>Run a WiFi speedtest near your car to check signal strength</li>
                            <li>Ensure internet connection is strong and stable</li>
                            <li>Activate compatibility mode for 2.4GHz WiFi networks</li>
                            <li><strong>Do not plug in and remove the device multiple times</strong></li>
                        </ul>
                    </div>

                    {/* Tab Navigation */}
                    <div className="tab-navigation" role="tablist" aria-label="Setup platform selector">
                        <button
                            id="tab-android"
                            role="tab"
                            aria-selected={activeTab === 'android'}
                            aria-controls="panel-android"
                            className={`tab-button ${activeTab === 'android' ? 'active' : ''}`}
                            onClick={() => setActiveTab('android')}
                        >
                            Android Setup
                        </button>
                        <button
                            id="tab-ios"
                            role="tab"
                            aria-selected={activeTab === 'ios'}
                            aria-controls="panel-ios"
                            className={`tab-button ${activeTab === 'ios' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ios')}
                        >
                            iOS Setup
                        </button>
                    </div>

                    {/* Android Setup */}
                    {activeTab === 'android' && (
                        <div
                            className="setup-content android-setup"
                            id="panel-android"
                            role="tabpanel"
                            aria-labelledby="tab-android"
                        >
                            <h3 id='android'>Android Setup Instructions</h3>
                            <div className="instruction-list">
                                <InstructionStep
                                    number="1"
                                    title="Open Settings"
                                    description="Find and tap the 'Settings' app on your device."
                                    imageSrc={require("./../../assets/setup/android/settings.jpg")}
                                    imageAlt="Android Settings icon"
                                />
                                <InstructionStep
                                    number="2"
                                    title="Network & Internet"
                                    description="Tap on 'Network & Internet' (may be labeled as 'Connections' or 'Wireless & networks' depending on your device)."
                                    imageSrc={require("./../../assets/setup/android/connections.jpg")}
                                    imageAlt="Network and Internet settings"
                                />
                                <InstructionStep
                                    number="3"
                                    title="Hotspot & Tethering"
                                    description="Tap on 'Hotspot & tethering' or 'Mobile Hotspot'."
                                    imageSrc={require("./../../assets/setup/android/mobileHotspot.jpg")}
                                    imageAlt="Mobile Hotspot option"
                                />
                                <InstructionStep
                                    number="4"
                                    title="Configure Wi-Fi Hotspot"
                                    description="Tap on 'Wi-Fi Hotspot' or 'Portable Wi-Fi hotspot', then 'Set up Wi-Fi hotspot' or 'Configure'."
                                    imageSrc={require("./../../assets/setup/android/configureMobileHotspot.jpg")}
                                    imageAlt="Configure hotspot settings"
                                />
                                <InstructionStep
                                    number="5"
                                    title="Set Network Name & Password"
                                    description={
                                        <>
                                            <div><strong>Network Name:</strong> Enter "AlfaRomeoFlasher"</div>
                                            <div><strong>Password:</strong> Enter "password"</div>
                                        </>
                                    }
                                />
                                <InstructionStep
                                    number="6"
                                    title="Enable Hotspot"
                                    description="Tap 'Save' or 'Apply', then toggle the switch to turn on the Wi-Fi hotspot."
                                    imageSrc={require("./../../assets/setup/android/curtain.jpg")}
                                    imageAlt="Hotspot toggle switch"
                                />
                                <InstructionStep
                                    number="7"
                                    title="Connect Your Device"
                                    description="Look for 'AlfaRomeoFlasher' on your portable device and connect using password 'password'."
                                />
                            </div>
                            <div className="setup-notes">
                                <h4>Important Notes</h4>
                                <ul>
                                    <li>Each device may have slightly different settings labels</li>
                                    <li>Connect device only after hotspot is ready and wait a few minutes after plugging in</li>
                                    <li>Do not repeatedly plug in and remove the device</li>
                                    <li>If the hotspot is created properly, it will connect automatically</li>
                                    <li>Keep the device connected even if it doesn't connect immediately</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* iOS Setup */}
                    {activeTab === 'ios' && (
                        <div
                            className="setup-content ios-setup"
                            id="panel-ios"
                            role="tabpanel"
                            aria-labelledby="tab-ios"
                        >
                            <h3 id="ios">iOS Setup Instructions</h3>
                            <div className="instruction-list">
                                <InstructionStep
                                    number="1"
                                    title="Open Settings"
                                    description="Find and tap the 'Settings' app on your iPhone."
                                    imageSrc={require("./../../assets/setup/ios/settings.PNG")}
                                    imageAlt="iOS Settings icon"
                                />
                                <InstructionStep
                                    number="2"
                                    title="Enable Personal Hotspot"
                                    description="Tap on 'Personal Hotspot'. If you don't see this option, tap on 'Cellular' first."
                                    imageSrc={require("./../../assets/setup/ios/personalHotspot.PNG")}
                                    imageAlt="Personal Hotspot option"
                                />
                                <InstructionStep
                                    number="3"
                                    title="Allow Others to Join"
                                    description="Toggle the 'Allow Others to Join' switch to turn on the hotspot."
                                    imageSrc={require("./../../assets/setup/ios/personalHotspotConfigure1.PNG")}
                                    imageAlt="Allow Others to Join toggle"
                                />
                                <InstructionStep
                                    number="4"
                                    title="Change Device Name"
                                    description="Go to Settings → General → About → Name and change the device name to 'AlfaRomeoFlasher'."
                                    imageSrc={require("./../../assets/setup/ios/rename1.PNG")}
                                    imageAlt="Device name settings"
                                />
                                <InstructionStep
                                    number="5"
                                    title="Set Wi-Fi Password"
                                    description="Tap on 'Wi-Fi Password' and enter 'password' as the password, then tap 'Done'."
                                    imageSrc={require("./../../assets/setup/ios/personalHotspotConfigure2.PNG")}
                                    imageAlt="WiFi password configuration"
                                />
                                <InstructionStep
                                    number="6"
                                    title="Connect Your Device"
                                    description="Look for 'AlfaRomeoFlasher' on your portable device and connect using password 'password'."
                                />
                            </div>
                            <div className="setup-notes">
                                <h4>Important Notes</h4>
                                <ul>
                                    <li>Each device may have slightly different settings labels</li>
                                    <li>Connect device only after hotspot is ready and wait a few minutes after plugging in</li>
                                    <li>Do not repeatedly plug in and remove the device</li>
                                    <li>If the hotspot is created properly, it will connect automatically</li>
                                    <li>Keep the device connected even if it doesn't connect immediately</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
        {lightboxImage && (
            <Lightbox image={lightboxImage} onClose={closeLightbox} />
        )}
        </LightboxContext.Provider>
    );
}

// Helper component for instruction steps
function InstructionStep({ number, title, description, imageSrc, imageAlt }) {
    const openLightbox = React.useContext(LightboxContext);

    return (
        <div className="instruction-step">
            <div className="step-header">
                <div className="step-number">{number}</div>
                <h4>{title}</h4>
            </div>
            <div className="step-body">
                <div className="step-text">
                    <p className="step-description">{description}</p>
                </div>
                {imageSrc && (
                    <button
                        type="button"
                        className="step-image-button"
                        onClick={() => openLightbox(imageSrc, imageAlt)}
                        aria-label={`Enlarge image: ${imageAlt}`}
                    >
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="step-image"
                            loading="lazy"
                            width="1080"
                            height="1920"
                        />
                        <span className="zoom-badge" aria-hidden="true">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                            Tap to zoom
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
}

// Fullscreen image viewer with zoom toggle, keyboard + click-to-close support
function Lightbox({ image, onClose }) {
    const [zoomed, setZoomed] = useState(false);
    const closeRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
                return;
            }

            if (e.key === 'Tab' && contentRef.current) {
                const focusable = contentRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );

                if (!focusable.length) {
                    return;
                }

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        if (closeRef.current) closeRef.current.focus();
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    return (
        <div
            className="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={image.alt || 'Enlarged image'}
            onClick={onClose}
        >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()} ref={contentRef}>
                <button
                    type="button"
                    className="lightbox-close"
                    onClick={onClose}
                    aria-label="Close image viewer"
                    ref={closeRef}
                >
                    &times;
                </button>
                <img
                    src={image.src}
                    alt={image.alt}
                    className={`lightbox-image ${zoomed ? 'zoomed' : ''}`}
                    onClick={() => setZoomed((z) => !z)}
                />
                <p className="lightbox-hint">{zoomed ? 'Click image to zoom out' : 'Click image to zoom in'}</p>
            </div>
        </div>
    );
}

export default Product;