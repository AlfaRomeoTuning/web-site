import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import rndModels from './rndModels'
import './RnD.css'

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
                rndModels.models.map(model =>
                    <Col key={model.car + model.part}>
                        <Card key={model.car + model.part}>
                            <Card.Img variant="top" src={require('../../assets/rnd/' + model.car.replace(/ /g, '') + model.part.replace(/ /g, '') + '.png')} />
                            <Card.Body>
                                <Card.Title style={{ height: "50px" }}>{model.part}</Card.Title>
                                <Card.Text style={{ height: "100px" }}>
                                    {model.description}
                                </Card.Text>
                                <Button variant="secondary">Download Model</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
        </Row>
    </div >)
}

export default RnD