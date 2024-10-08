import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import manualsModels from './manualsModels'
import Col from 'react-bootstrap/Col'

function Manuals() {
    return (<Row xs={1} sm={2} md={4} xxl={5} className="g-4">
        {manualsModels.manuals.map(manual => <Col><Card>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Dowload link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card></Col>)}
    </Row>)
}

export default Manuals