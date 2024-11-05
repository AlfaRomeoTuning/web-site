import React from 'react';
import './Product.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Product() {

    const [fullView, setFullView] = React.useState(true);

    return (<div id="product-page">
        <div className='text-container'>
            <Row
                style={{ width: '100%' }}
            // xs={1}
            // sm={2}
            // md={2}
            // xxl={2}
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

    </div >)
}

export default Product