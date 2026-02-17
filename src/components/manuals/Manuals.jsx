import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import manualsModels from './manualsModels'
import Col from 'react-bootstrap/Col'
import { Helmet } from 'react-helmet'

function Manuals() {
    return (<>
        <Helmet>
            <title>Alfa Romeo Manuals & Guides | Alfa Tuning</title>
            <meta name="description" content="Download technical manuals and guides for Alfa Romeo tuning, maintenance, and upgrades. Comprehensive documentation for enthusiasts and mechanics." />
            <link rel="canonical" href="https://alfatuning.app/manuals" />

            {/* Hreflang for international SEO */}
            <link rel="alternate" hrefLang="x-default" href="https://alfatuning.app/manuals" />
            <link rel="alternate" hrefLang="en" href="https://alfatuning.app/manuals" />

            {/* Open Graph */}
            <meta property="og:title" content="Alfa Romeo Manuals & Guides | Alfa Tuning" />
            <meta property="og:description" content="Download technical manuals and guides for Alfa Romeo tuning, maintenance, and upgrades." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://alfatuning.app/manuals" />
            <meta property="og:image" content="https://alfatuning.app/logo.png" />
            <meta property="og:site_name" content="Alfa Tuning" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Alfa Romeo Manuals & Guides | Alfa Tuning" />
            <meta name="twitter:description" content="Download technical manuals and guides for Alfa Romeo tuning, maintenance, and upgrades." />
            <meta name="twitter:image" content="https://alfatuning.app/logo.png" />
        </Helmet>
        <Row xs={1} sm={2} md={4} xxl={5} className="g-4">
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
    </Row></>)
}

export default Manuals