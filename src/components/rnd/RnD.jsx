// RnD.jsx
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import rndModels from './rndModels';
import './RnD.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function RnDCard(props) {
    // Создаём slug из названия модели и части
    const slug = `${props.model.car[0]}-${props.model.part}`
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');

    return (
        <Col>
            <Link to={`/rnd/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card
                    as="article"
                    style={{ cursor: "pointer", height: '100%' }}
                    className="h-100 hover-shadow"
                >
                    <Card.Img
                        variant="top"
                        src={require('../../assets/rnd/' + props.model.car[0].replace(/ /g, '') + props.model.part.replace(/ /g, '') + '.png')}
                        alt={`${props.model.part} for ${props.model.car[0]} - Alfa Tuning 3D model`}
                        loading="lazy"
                    />
                    <Card.Body>
                        <Card.Title as="h5">
                            {props.model.part}
                        </Card.Title>
                        <Card.Text className="text-muted"> {props.model.car.length > 1 ? ` for ${props.model.car.join(', ')}` : ` for ${props.model.car[0]}`}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
}

function RnD() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Alfa Tuning Research & Development",
        "description": "3D models and custom parts for Alfa Romeo vehicles",
        "url": window.location.origin + "/rnd",
        "numberOfItems": rndModels.models.length,
        "about": {
            "@type": "Thing",
            "name": "Alfa Romeo Custom Parts"
        }
    };

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>R&D - Alfa Tuning | Custom 3D Models & Parts for Alfa Romeo</title>
                <meta
                    name="description"
                    content="Explore Alfa Tuning's research and development of custom 3D models and performance parts for Alfa Romeo Giulia, Stelvio, GTAm, and Quadrifoglio."
                />
                <meta
                    name="keywords"
                    content="Alfa Romeo tuning, custom car parts, 3D models, Giulia Quadrifoglio, Stelvio, GTAm, fenders, bumpers, air vents"
                />
                <link rel="canonical" href={window.location.origin + "/rnd"} />

                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="R&D - Alfa Tuning | Custom Parts & 3D Models" />
                <meta property="og:description" content="Premium custom parts and 3D models for Alfa Romeo vehicles." />
                <meta property="og:url" content={window.location.origin + "/rnd"} />

                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <main id='rnd-page'>
                <h1 className="visually-hidden">Alfa Tuning Research & Development</h1>
                <Row xs={1} sm={2} md={4} xxl={5} className="g-4" style={{ marginTop: '5px', marginBottom: '5px', marginLeft: '6px', marginRight: '2px' }}>
                    {rndModels.models.map(model =>
                        <RnDCard key={model.car[0] + model.part} model={model} />
                    )}
                </Row>
            </main>
        </>
    );
}

export default RnD;