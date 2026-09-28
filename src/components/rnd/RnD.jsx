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
import { BASE_URL } from '../../config';
import { getRndImage } from './rndAssetLoader';
import { createModelSlug, getModelFileName } from './rndModelUtils';

const MODELS = rndModels.models;

function RnDCard({ model }) {
    const [imageError, setImageError] = useState(false);
    const imagePath = getRndImage(getModelFileName(model.raw));
    const hasImage = Boolean(imagePath) && !imageError;
    const carModels = model.carModels;
    const altText = `${model.part} for ${carModels} - Alfa Tuning 3D model`;

    return (
        <Col>
            <Link to={`/rnd/${model.slug}`} className="model-link" aria-label={`View ${model.part} for ${carModels}`}>
                <Card as="article" className="model-card h-100">
                    <div className="card-image-wrapper">
                        {hasImage ? (
                            <Card.Img
                                variant="top"
                                src={imagePath}
                                alt={altText}
                                title={`${model.part} for Alfa Romeo ${carModels}`}
                                loading="lazy"
                                width="800"
                                height="600"
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
                        <div className="card-meta-row">
                            <span className={`model-status ${model.downloadFile ? 'is-download' : 'is-preview'}`}>
                                {model.downloadFile ? 'Download Available' : 'Preview Only'}
                            </span>
                        </div>
                        <Card.Title as="h3" className="card-title">
                            {model.part}
                        </Card.Title>
                        <Card.Text className="card-subtitle text-muted">
                            {model.car.length > 1 
                                ? `For ${carModels}` 
                                : `For ${model.car[0]}`}
                        </Card.Text>
                        {model.specs && (
                            <Card.Text className="card-specs">
                                {model.specs}
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
    const pageUrl = `${BASE_URL}/rnd`;
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCar, setFilterCar] = useState('all');

    const rndOgImageModule = require('../../assets/rnd/GiuliaGTAmFrontBumper.png');
    const rndOgImagePath = typeof rndOgImageModule === 'string' ? rndOgImageModule : rndOgImageModule.default;
    const rndOgImage = `${BASE_URL}${rndOgImagePath}`;

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    const modelEntries = useMemo(() => {
        return MODELS.map(model => ({
            ...model,
            slug: createModelSlug(model),
            carModels: model.car.join(', '),
            searchText: `${model.part} ${model.car.join(' ')}`.toLowerCase(),
            raw: model,
        }));
    }, []);

    const { uniqueCars, carModelCounts } = useMemo(() => {
        const cars = new Set();
        const counts = {};

        modelEntries.forEach(model => {
            model.car.forEach(carName => cars.add(carName));
            model.car.forEach(carName => {
                counts[carName] = (counts[carName] || 0) + 1;
            });
        });

        return {
            uniqueCars: Array.from(cars).sort(),
            carModelCounts: counts,
        };
    }, [modelEntries]);

    const filteredModels = useMemo(() => {
        return modelEntries.filter(model => {
            const matchesSearch = normalizedSearchTerm === '' || model.searchText.includes(normalizedSearchTerm);
            
            const matchesFilter = filterCar === 'all' || model.car.includes(filterCar);
            
            return matchesSearch && matchesFilter;
        });
    }, [filterCar, modelEntries, normalizedSearchTerm]);

    const modelCount = modelEntries.length;
    const visibleDownloadableCount = filteredModels.filter(model => Boolean(model.downloadFile)).length;
    const quickFilters = uniqueCars.slice(0, 4);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Alfa Tuning Research & Development",
        "description": "3D models and custom parts for Alfa Romeo vehicles",
        "url": pageUrl,
        "numberOfItems": modelCount,
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
                <link rel="canonical" href={pageUrl} />
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="R&D - Alfa Tuning | Custom Parts & 3D Models" />
                <meta property="og:description" content="Premium custom parts and 3D models for Alfa Romeo vehicles." />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={rndOgImage} />
                <meta property="og:image:alt" content="Alfa Romeo GTAm front bumper 3D model by Alfa Tuning" />
                <meta property="og:site_name" content="Alfa Tuning" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="R&D - Alfa Tuning | Custom Parts & 3D Models" />
                <meta name="twitter:description" content="Premium custom parts and 3D models for Alfa Romeo vehicles." />
                <meta name="twitter:image" content={rndOgImage} />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div id='rnd-page'>
                <section className="rnd-header">
                    <div className="rnd-eyebrow">Alfa Tuning Research and Development Catalog</div>
                    <h1>3D Models & Custom Parts</h1>
                    <p className="rnd-subtitle">Browse our collection of premium Alfa Romeo modifications</p>
                    <div className="rnd-summary" aria-label="Catalog summary">
                        <span><strong>{modelCount}</strong> total models</span>
                        <span><strong>{filteredModels.length}</strong> visible</span>
                        <span><strong>{visibleDownloadableCount}</strong> downloadable</span>
                    </div>
                </section>

                <section className="rnd-filters">
                    <div className="rnd-filter-panel" role="search" aria-label="R and D catalog filters">
                        <InputGroup className="search-bar">
                            <InputGroup.Text id="rnd-search-icon" aria-hidden="true">🔍</InputGroup.Text>
                            <Form.Control
                                placeholder="Search by part or model..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search 3D models"
                                aria-describedby="rnd-search-icon"
                            />
                        </InputGroup>

                        <Form.Group className="filter-group">
                            <Form.Label htmlFor="car-filter">Platform</Form.Label>
                            <Form.Select
                                id="car-filter"
                                value={filterCar}
                                onChange={(e) => setFilterCar(e.target.value)}
                                aria-label="Filter by car model"
                            >
                                <option value="all">All Models ({modelCount})</option>
                                {uniqueCars.map(car => {
                                    return (
                                        <option key={car} value={car}>
                                            {car} ({carModelCounts[car]})
                                        </option>
                                    );
                                })}
                            </Form.Select>
                        </Form.Group>

                        <button
                            type="button"
                            onClick={() => {
                                setSearchTerm('');
                                setFilterCar('all');
                            }}
                            className="btn rnd-clear-btn"
                            aria-label="Reset search and platform filters"
                        >
                            Reset Filters
                        </button>
                    </div>

                    <div className="rnd-quick-filters" aria-label="Quick platform filters">
                        <button
                            type="button"
                            className={`quick-filter-pill ${filterCar === 'all' ? 'is-active' : ''}`}
                            onClick={() => setFilterCar('all')}
                            aria-pressed={filterCar === 'all'}
                        >
                            All
                        </button>
                        {quickFilters.map(car => (
                            <button
                                key={car}
                                type="button"
                                className={`quick-filter-pill ${filterCar === car ? 'is-active' : ''}`}
                                onClick={() => setFilterCar(car)}
                                aria-pressed={filterCar === car}
                            >
                                {car}
                            </button>
                        ))}
                    </div>
                </section>

                {filteredModels.length > 0 ? (
                    <Row xs={1} sm={2} md={3} lg={4} xxl={5} className="models-grid">
                        {filteredModels.map(model =>
                            <RnDCard key={model.slug} model={model} />
                        )}
                    </Row>
                ) : (
                    <div className="no-results">
                        <h2>No models found</h2>
                        <p>
                            No matches for
                            {' '}
                            <strong>{searchTerm || 'your current filters'}</strong>
                            . Try adjusting your search or filters.
                        </p>
                        <button 
                            type="button"
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

                <div className="results-count" aria-live="polite">
                    Showing {filteredModels.length} of {modelCount} models
                </div>
            </div>
        </>
    );
}

export default RnD;