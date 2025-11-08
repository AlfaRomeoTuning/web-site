// RnDDetail.jsx
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Button, Carousel, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import rndModels from './rndModels';
import './RnD.css';

function RnDDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Находим модель по slug
    const model = rndModels.models.find(m => {
        const modelSlug = `${m.car[0]}-${m.part}`
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
        return modelSlug === slug;
    });

    // Если модель не найдена
    if (!model) {
        return (
            <Container className="mt-5">
                <h1>Model not found</h1>
                <Button onClick={() => navigate('/rnd')}>Back to R&D</Button>
            </Container>
        );
    }

    const pageUrl = window.location.origin + `/rnd/${slug}`;
    const mainImage = require('../../assets/rnd/' + model.car[0].replace(/ /g, '') + model.part.replace(/ /g, '') + '.png');

    // Structured Data для конкретного продукта
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${model.part} for ${model.car.map(m => m).join(', ')}`,
        "description": model.description,
        "brand": {
            "@type": "Brand",
            "name": "Alfa Tuning"
        },
        "image": mainImage,
        "url": pageUrl,
        "category": "Automotive Parts"
    };

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{`${model.part} for ${model.car.map(m => m).join(', ')} | Alfa Tuning R&D`}</title>
                <meta
                    name="description"
                    content={`${model.description} - Custom ${model.part} designed for ${model.car}. Premium 3D model and tuning part by Alfa Tuning.`}
                />
                <meta
                    name="keywords"
                    content={`${model.car.map(m => m).join(', ')}, ${model.part}, Alfa Romeo, custom parts, 3D model, tuning, ${model.car.map(m => m).join(', ')} ${model.part}`}
                />
                <link rel="canonical" href={pageUrl} />

                <meta name="robots" content="index, follow, max-image-preview:large" />

                {/* Open Graph */}
                <meta property="og:type" content="product" />
                <meta property="og:title" content={`${model.part} for ${model.car.map(m => m).join(', ')}`} />
                <meta property="og:description" content={model.description} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={mainImage} />
                <meta property="og:site_name" content="Alfa Tuning" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${model.part} for ${model.car.map(m => m).join(', ')}`} />
                <meta name="twitter:description" content={model.description} />
                <meta name="twitter:image" content={mainImage} />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <Container className="mt-4 mb-5">
                {/* Breadcrumbs для навигации и SEO */}
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/rnd" }}>R&D</Breadcrumb.Item>
                    <Breadcrumb.Item active>{model.part}</Breadcrumb.Item>
                </Breadcrumb>

                <Row>
                    <Col lg={8}>
                        <Carousel data-bs-theme="dark" className='mb-4'>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rnd-detail-image"
                                    src={mainImage}
                                    alt={`${model.part} for ${model.car[0]} - main view`}
                                />
                            </Carousel.Item>
                            {model.childs && model.childs.map((child, index) => (
                                <Carousel.Item key={child}>
                                    <img
                                        className="d-block w-100 rnd-detail-image"
                                        src={require('../../assets/rnd/' + model.car[0].replace(/ /g, '') + model.part.replace(/ /g, '') + child + '.png')}
                                        alt={`${model.part} for ${model.car[0]} - view ${index + 2}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>

                    <Col lg={4}>
                        <article>
                            <h1>{model.part}</h1>
                            <h2 className="h4 text-muted mb-4">{model.car.map(m => m).join(', ')}</h2>

                            <div className="mb-4">
                                <h3 className="h5">Description</h3>
                                <p>{model.description}</p>
                            </div>

                            <div className="d-grid gap-2">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => {
                                        // Здесь можно добавить функционал скачивания
                                        alert('Download functionality coming soon!');
                                    }}
                                >
                                    Download 3D Model
                                </Button>
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => navigate('/rnd')}
                                >
                                    ← Back to All Models
                                </Button>
                            </div>
                        </article>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default RnDDetail;