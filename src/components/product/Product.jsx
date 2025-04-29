import React from 'react';
import './Product.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet';

function Product() {

    const [fullView, setFullView] = React.useState(true);

    return (<div id="product-page">
        <Helmet>
            <title>Product Alfa Tuning</title>
            <meta name="description" content="Alfa Tuning product page for remote flashing device" />
            <meta
                name="keywords"
                content="alfaobd, alfa romeo, alfa romeo shop, alfatuning, obd tool, obd, obd2.0, alfa romeo obd, remote flashing device"
            />
        </Helmet>
        <div className='text-container'>
            <Row
                style={{ width: '100%' }}
            >
                <Col sm={12} md={5} xxl={5}>
                    <img alt="guilia" onClick={() => setFullView(!fullView)} className='interface-image'
                        src={require(fullView ? "./../../assets/AlfaFlasher00.png" : "./../../assets/AlfaFlasher01.png")} />
                </Col>
                <Col sm={12} md={7} xxl={7} className="text">
                    <h3>Unleash the Full Potential of Your Alfa Romeo with Our Advanced Remote Flashing Device!</h3>
                    <p>
                        Take your Alfa Romeo Giulia or Stelvio to the next level with cutting-edge upgrades and enhancements tailored for car enthusiasts and professionals alike.<span className='font-weight-light'> (GTAm upgrades are available exclusively for Quadrifoglio owners.)</span>
                    </p>
                    <p className='interface-text'>
                        <b>Boost Performance:</b> Upgrade your Quadrifoglio engine to GTAm specifications for an impressive 540 HP or increase horsepower for 2.0 engine models.<br />
                        <b> Transmission Customization: </b>Enjoy custom flashing options for 8HP50 and 8HP75 gearboxes, including adding Launch Control and adjusting to GTAm standards.<br />
                        <b> Race Mode DTCM:</b> Activate race mode for enhanced dynamics and responsiveness.<br />
                        <b> Compatibility with Upgraded Components:</b> Configure modules to work seamlessly with retrofitted ETM and other enhancements.<br />
                        <b> Module Reset and Clean-Up: </b>Clear VIN codes and refresh BCM to a like-new condition.<br />
                        <b>Flexible Customization:</b> Any additional updates and software upgrades for your unique driving style.<br />
                        <br />Our service also offers special solutions for tuning companies, allowing them to perform remote flashing for their clients' Alfa Romeo vehicles. Leverage our technology to expand your service offerings and provide high-quality upgrades right from your workshop.
                        <br />Trust in technology that doesn’t just enhance but transforms your Alfa Romeo. Build a car ready for the track and enjoy every moment behind the wheel!</p>
                </Col>
            </Row>
        </div>
        <div className='product-guide'>
            <h2>How to setup:</h2>
            <Row style={{ width: '100%', padding: '0 50px', }}>
                <p style={{ fontWeight: '500' }}>It’s recommended to connect to your HOME Wifi if your car is close to your wifi router. Cell phone Wifi could be
                    too slow and cause issues during writing the software.
                    Always run a WiFi speedtest near your car to check the strength of the WiFi signal.
                    Don’t forget to activate compatibility mode (for 2.4ghz wifi)</p>
                <Col sm={12} md={6} xxl={6}>
                    <h3>Android users</h3>
                    <div style={{ textAlign: "left" }}>
                        <b>Open Settings:</b><br />
                        Find and tap the "Settings" app on your Windows/Android device.<br />
                        <img src={require("./../../assets/setup/android/settings.jpg")} alt="" style={{ height: "500px" }} />
                        <br />
                        <b>Network & Internet:</b><br />
                        Tap on "Network & Internet" (this option might be named differently depending on your device, such as
                        "Connections" or "Wireless & networks"). <br />
                        <img src={require("./../../assets/setup/android/connections.jpg")} alt="" style={{ height: "500px" }} />
                        <br />
                        <b>Hotspot & Tethering:</b> <br />
                        Tap on "Hotspot & tethering" or "Mobile Hotspot."<br />
                        <img src={require("./../../assets/setup/android/mobileHotspot.jpg")} alt="" style={{ height: "500px" }} />
                        <br />
                        <b>Wi-Fi Hotspot:</b> <br />
                        Tap on "Wi-Fi Hotspot" or "Portable Wi-Fi hotspot." <br />
                        <b>Configure Hotspot:</b>
                        Tap on "Set up Wi-Fi hotspot" or "Configure." <br />
                        <img src={require("./../../assets/setup/android/configureMobileHotspot.jpg")} alt="" style={{ height: "500px" }} />
                        <br />
                        <b>Set Network Name:</b> <br />
                        Enter "AlfaRomeoFlasher" in the Network name field. <br />
                        <b>Set Password:</b> <br />
                        Enter "password" in the Password field. <br />
                        <b>Save Settings:</b> <br />
                        Tap "Save" or "Apply" to save your settings. <br />
                        <b>Enable Hotspot:</b> <br />
                        Toggle the switch to turn on the Wi-Fi hotspot. <br />
                        <img src={require("./../../assets/setup/android/curtain.jpg")} alt="" style={{ height: "500px" }} />
                        <br />
                        <b>Connect Devices:</b> <br />
                        Your hotspot is now ready. Look for "AlfaRomeoFlasher" on your portable device and connect using the password
                        "password."
                        <br />
                        <br />
                        <b>Remarks:</b> <br />
                        Keep in mind, each cellphone has own version of android/iOS. Settings can be labeled a bit different <br />
                        <b>DO NOT PLUG IN AND REMOVE THE DEVICE MANY TIMES.</b> <br /> connect device only after hotspot is ready and
                        wait few minutes after plugged in to the ca
                        Internet connection and signal should be strong and stable. Otherwise, it can cause connection loss.
                        After connecting it’s better to not remove the device just because something seems to be wrong
                        Connect the device and leave it. Even if it does not connect
                        If a hotspot is created properly. it will connect automatically
                        <br />
                        <br />
                    </div>
                </Col>
                <Col sm={12} md={6} xxl={6}>
                    <h3>IOS users</h3>
                    <div style={{ textAlign: "left" }}>
                        <b>Open Settings:</b><br />
                        Find and tap the "Settings" app on your iPhone. <br />
                        <b>Personal Hotspot:</b> <br />
                        Tap on "Personal Hotspot." If you don't see this option, tap on "Cellular" first, and then you'll find "Personal
                        Hotspot." <br />
                        <b>Enable Hotspot:</b> <br />
                        Toggle the "Allow Others to Join" switch to turn on the hotspot. <br />
                        <b>Set Wi-Fi Name:</b> <br />
                        Tap on "Wi-Fi Password." (Note: iPhone doesn't allow changing the Wi-Fi name directly from the settings as it uses
                        the device's name. To change the Wi-Fi name, you need to change your iPhone's name.)
                        Go back to "Settings" <span>&#8594;</span> "General" <span>&#8594;</span> "About" <span>&#8594;</span> "Name." <br />
                        Change the device name to "AlfaRomeoFlasher." <br />
                        <b>Set Password:</b> <br />
                        Enter "password" as the Wi-Fi password and tap "Done." <br />
                        <b>Connect Devices:</b> <br />
                        Your hotspot is now ready. Look for "AlfaRomeoFlasher" on your portable device and connect using the password
                        "password."
                        <br />
                        <br />
                        <b>Remarks:</b> <br />
                        Keep in mind, each cellphone has its own version of android/IOS. Settings can be labeled a bit different <br />
                        <b>DO NOT PLUG IN AND REMOVE THE DEVICE MANY TIMES.</b> <br /> connect device only after hotspot is ready and
                        wait few minutes after plugged in to the car
                        Internet connection and signal should be strong and stable. If not, it can cause connection loss.
                        After connecting it’s better to not remove the device just because something seems to be wrong
                        Connect the device and leave it. Even if it does not connect
                        If the hotspot is created properly. it will connect automatically
                    </div>
                </Col>
            </Row>
        </div>
    </div >)
}

export default Product