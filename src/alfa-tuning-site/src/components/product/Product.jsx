import './Product.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Product() {
    return (<div id="product-page">
        <div className='text-container'>
            <Row
                style={{ width: '100%' }}
            // xs={1}
            // sm={2}
            // md={2}
            // xxl={2}
            >
                <Col sm={12} md={7} xxl={7}><img className='interface-image' src={require("./../../assets/rnd/GiuliaGTAmFrontAdjustableSplitter4.png")}></img></Col>
                <Col sm={12} md={5} xxl={5} className="text">
                    <h3>AlfaRomeoFlasher is a diagnostic software for the Alfa Romeo vehicles</h3>
                    {/* <h4>At Alfa Tuning, we’re passionate about enhancing your driving experience.
                    Whether you’re a car enthusiast, a mechanic, or simply someone who wants to optimize their vehicle,
                    we’ve got you covered. You can find here OBD2 interface, 3D models of bodyparts and manuals for it</h4> */}
                    <p className='interface-text'>Upgrading of CDCM up to GTAm flash.
                        Upgrading gearbox up to GTAm flash with Launch Control.
                        Unlocking VIN codes in any modules.
                        Clearing used BCM to be as new.
                        DTCM upgrade for race mode.
                        Upgrading of some modules to work with retrofitted ETM and much more!</p>
                </Col>
            </Row>
        </div>

    </div >)
}

export default Product