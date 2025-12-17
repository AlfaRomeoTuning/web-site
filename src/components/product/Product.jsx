import React from 'react';
import './Product.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet';

function Product() {
    const [fullView, setFullView] = React.useState(true);
    const [activeTab, setActiveTab] = React.useState('features');
    //const uA = navigator.userAgent || navigator.vendor || window.opera;
    //const isIOS = (/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document);

    const features = [
        {
            title: "Boost Performance",
            description: "Upgrade your Quadrifoglio engine to GTAm specifications for an impressive 540 HP or increase horsepower for 2.0 engine models."
        },
        {
            title: "Transmission Customization",
            description: "Enjoy custom flashing options for 8HP50 and 8HP75 gearboxes, including adding Launch Control and adjusting to GTAm standards."
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
            description: "Clear VIN codes in all modules for a clean slate."
        },
        {
            title: "Flexible Customization",
            description: "Any additional updates and software upgrades tailored to your unique driving style."
        }
    ];

    const flasherImageModule = require("../../assets/AlfaFlasher00.png");
    const flasherImage = typeof flasherImageModule === 'string' ? flasherImageModule : flasherImageModule.default;
    const absoluteImage = "https://alfatuning.app" + flasherImage;
    const pageUrl = "https://alfatuning.app/device";

    return (
        <div id="product-page">
            <Helmet>
                <title>Product Alfa Tuning | Remote Flashing Device</title>
                <meta name="description" content="Unlock your Alfa Romeo's potential with our Remote Flashing Device. Custom tuning for Giulia & Stelvio, including GTAm upgrades, Race Mode, and more." />
                <meta
                    name="keywords"
                    content="alfaobd, alfa romeo, alfa romeo shop, alfatuning, obd tool, obd, obd2.0, alfa romeo obd, remote flashing device, tuning, ecu remap"
                />
                <link rel="canonical" href={pageUrl} />

                {/* Open Graph */}
                <meta property="og:title" content="Product Alfa Tuning | Remote Flashing Device" />
                <meta property="og:description" content="Unlock your Alfa Romeo's potential with our Remote Flashing Device. Custom tuning for Giulia & Stelvio." />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={absoluteImage} />
                <meta property="og:site_name" content="Alfa Tuning" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Product Alfa Tuning | Remote Flashing Device" />
                <meta name="twitter:description" content="Unlock your Alfa Romeo's potential with our Remote Flashing Device. Custom tuning for Giulia & Stelvio." />
                <meta name="twitter:image" content={absoluteImage} />
            </Helmet>

            {/* Hero Section */}
            <section className='hero-section'>
                <div className='text-container'>
                    <Row style={{ width: '100%', alignItems: 'center' }}>
                        <Col sm={12} md={5} className="image-column">
                            <div className="image-wrapper" onClick={() => setFullView(!fullView)}>
                                <img
                                    alt="Alfa Romeo Flashing Device Interface"
                                    className='interface-image'
                                    src={require(fullView ? "./../../assets/AlfaFlasher00.png" : "./../../assets/AlfaFlasher01.png")}
                                />
                                <p className="image-hint">Click to switch view</p>
                            </div>
                        </Col>
                        <Col sm={12} md={7} className="text-column">
                            <h1>Unleash the Full Potential of Your Alfa Romeo</h1>
                            <p className="subtitle">Advanced Remote Flashing Device for Giulia & Stelvio</p>
                            <p className="description">
                                Take your Alfa Romeo to the next level with cutting-edge upgrades and enhancements tailored for car enthusiasts and professionals alike.
                            </p>
                            <p className="note">
                                <strong>Note:</strong> GTAm upgrades are available exclusively for Quadrifoglio owners.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn btn-primary btn-lg">Get Started</button>
                                <button className="btn btn-outline-primary btn-lg">Learn More</button>
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
                                <div className="feature-content">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
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

            {/* Setup Guide Section */}
            <section className='product-guide'>
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
                    <div className="tab-navigation">
                        <button
                            className={`tab-button ${activeTab === 'android' ? 'active' : ''}`}
                            onClick={() => setActiveTab('android')}
                        >
                            Android Setup
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'ios' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ios')}
                        >
                            iOS Setup
                        </button>
                    </div>

                    {/* Android Setup */}
                    {activeTab === 'android' && (
                        <div className="setup-content android-setup">
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
                        <div className="setup-content ios-setup">
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
    );
}

// Helper component for instruction steps
function InstructionStep({ number, title, description, imageSrc, imageAlt }) {
    return (
        <div className="instruction-step">
            <div className="step-header">
                <div className="step-number">{number}</div>
                <h4>{title}</h4>
            </div>
            <p className="step-description">{description}</p>
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="step-image"
                />
            )}
        </div>
    );
}

export default Product;