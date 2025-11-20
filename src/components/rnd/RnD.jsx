// RnD.jsx
import { useState, useMemo } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import rndModels from './rndModels';
import './RnD.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function RnDCard(props) {
    const [imageError, setImageError] = useState(false);
    
    // Generate slug from model name and part
    const slug = `${props.model.car[0]}-${props.model.part}`
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');

    const imagePath = require('../../assets/rnd/' + props.model.car[0].replace(/ /g, '') + props.model.part.replace(/ /g, '') + '.png');
    const carModels = props.model.car.join(', ');
    const altText = `${props.model.part} for ${carModels} - Alfa Tuning 3D model`;

    return (
        <Col>
            <Link to={`/rnd/${slug}`} className="model-link">
                <Card as="article" className="model-card h-100">
                    <div className="card-image-wrapper">
                        {!imageError ? (
                            <Card.Img
                                variant="top"
                                src={imagePath}
                                alt={altText}
                                title={`${props.model.part} for Alfa Romeo ${carModels}`}
                                loading="lazy"
                                onError={() => setImageError(true)}
                                className="card-image"
                            />
                        ) : (
                            <div className="image-fallback">
                                <span>Image unavailable</span>
                            </div>
                        )}
                    </div>
                    <Card.Body className="d-flex flex-column">
                        <Card.Title as="h3" className="card-title">
                            {props.model.part}
                        </Card.Title>
                        <Card.Text className="card-subtitle text-muted">
                            {props.model.car.length > 1 
                                ? `For ${carModels}` 
                                : `For ${props.model.car[0]}`}
                        </Card.Text>
                        {props.model.specs && (
                            <Card.Text className="card-specs">
                                {props.model.specs}
                            </Card.Text>
                        )}
                        <div className="card-footer-spacer"></div>
                        <div className="card-cta">
                            <span className="view-model">View 3D Model →</span>
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
}

function RnD() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCar, setFilterCar] = useState('all');

    // Get unique car models for filter
    const uniqueCars = useMemo(() => {
        const cars = new Set();
        rndModels.models.forEach(model => {
            model.car.forEach(carName => cars.add(carName));
        });
        return Array.from(cars).sort();
    }, []);

    // Filter and search models
    const filteredModels = useMemo(() => {
        return rndModels.models.filter(model => {
            const matchesSearch = model.part.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                model.car.some(car => car.toLowerCase().includes(searchTerm.toLowerCase()));
            
            const matchesFilter = filterCar === 'all' || model.car.includes(filterCar);
            
            return matchesSearch && matchesFilter;
        });
    }, [searchTerm, filterCar]);

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
                <section className="rnd-header">
                    <h1>3D Models & Custom Parts</h1>
                    <p className="rnd-subtitle">Browse our collection of premium Alfa Romeo modifications</p>
                </section>

                <section className="rnd-filters">
                    <InputGroup className="search-bar">
                        <InputGroup.Text>🔍</InputGroup.Text>
                        <Form.Control
                            placeholder="Search by part or model..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            aria-label="Search 3D models"
                        />
                    </InputGroup>

                    <Form.Group className="filter-group">
                        <Form.Label htmlFor="car-filter">Car Model:</Form.Label>
                        <Form.Select 
                            id="car-filter"
                            value={filterCar} 
                            onChange={(e) => setFilterCar(e.target.value)}
                            aria-label="Filter by car model"
                        >
                            <option value="all">All Models ({rndModels.models.length})</option>
                            {uniqueCars.map(car => {
                                const count = rndModels.models.filter(m => m.car.includes(car)).length;
                                return (
                                    <option key={car} value={car}>
                                        {car} ({count})
                                    </option>
                                );
                            })}
                        </Form.Select>
                    </Form.Group>
                </section>

                {filteredModels.length > 0 ? (
                    <Row xs={1} sm={2} md={3} lg={4} xxl={5} className="models-grid">
                        {filteredModels.map(model =>
                            <RnDCard key={model.car[0] + model.part} model={model} />
                        )}
                    </Row>
                ) : (
                    <div className="no-results">
                        <h2>No models found</h2>
                        <p>Try adjusting your search or filters</p>
                        <button 
                            onClick={() => {
                                setSearchTerm('');
                                setFilterCar('all');
                            }}
                            className="btn btn-secondary"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                <div className="results-count">
                    Showing {filteredModels.length} of {rndModels.models.length} models
                </div>
            </main>
        </>
    );
}

export default RnD;