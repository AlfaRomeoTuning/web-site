import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import rndModels from './rndModels'
import './RnD.css'
import { Button, Carousel, Modal } from 'react-bootstrap';
import React from 'react';
import { Helmet } from 'react-helmet';



function RnDCard(props) {

    const [showModal, setShowModal] = React.useState(false);

    return <>
        <Helmet>
            <title>RnD Alfa Tuning</title>
            <meta name="description" content="Alfa Tuning research and development page" />
            <meta
                name="keywords"
                content="fender, bumper, airvent, air, vent, alfatuning, 3d model, front fender, alfa romeo, alfaromeo, guilia, quadrifoglio, GTAm, gtam, stelvio"
            />
        </Helmet>
        <Col>
            <Card key={props.model.car + props.model.part} onClick={() => setShowModal(true)} style={{ cursor: "pointer" }}>
                <Card.Img variant="top" src={require('../../assets/rnd/' + props.model.car.replace(/ /g, '') + props.model.part.replace(/ /g, '') + '.png')} />
                <Card.Body>
                    <Card.Title style={{ height: "50px" }}>{props.model.part}</Card.Title>
                    <Card.Text style={{ height: "100px" }}>
                        {props.model.description}
                    </Card.Text>
                    {/* <Button variant="secondary">Download Model</Button> */}
                </Card.Body>
            </Card>
        </Col>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Dialog >
                <Modal.Header closeButton>
                    <Modal.Title>{props.model.description}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel style={{ height: "48vh" }} data-bs-theme="dark" className='w-100'>
                        <Carousel.Item >
                            <img alt={props.model.description} className="rnd-modal-image w-100" text="First slide" src={require('../../assets/rnd/' + props.model?.car?.replace(/ /g, '') + props.model?.part?.replace(/ /g, '') + '.png')} />
                        </Carousel.Item>
                        {props.model.childs.map(child =>
                            <Carousel.Item key={child}>
                                <img alt={props.model.description} className="rnd-modal-image w-100" src={require('../../assets/rnd/' + props.model?.car?.replace(/ /g, '') + props.model?.part?.replace(/ /g, '') + child + '.png')} />
                            </Carousel.Item>)
                        }
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    </>

}

function RnD() {
    return (<div id='rnd-page'>
        <Row
            xs={1}
            sm={2}
            md={4}
            xxl={5}
            className="g-4"
        >
            {
                rndModels.models.map(model => <RnDCard key={model.car + model.part} model={model} />)
            }
        </Row >
    </div >)
}

export default RnD