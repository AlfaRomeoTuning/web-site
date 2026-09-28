// RnDDetail.jsx
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Button, Carousel, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import rndModels from './rndModels';
import './RnD.css';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import { BASE_URL } from '../../config';
import { getRndImage } from './rndAssetLoader';
import { createModelSlug, getModelFileName } from './rndModelUtils';

function RnDDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const model = rndModels.models.find(item => createModelSlug(item) === slug);

    if (!model) {
        return (
            <Container className="mt-5">
                <h1>Model not found</h1>
                <Button onClick={() => navigate('/rnd')}>Back to R&D</Button>
            </Container>
        );
    }

    const pageUrl = `${BASE_URL}/rnd/${slug}`;
    const mainImage = getRndImage(getModelFileName(model));
    const childImages = (model.childs || [])
        .map(child => ({
            child,
            src: getRndImage(getModelFileName(model, child)),
        }))
        .filter(item => Boolean(item.src));
    const allPageImages = [mainImage, ...childImages.map(item => item.src)].filter(Boolean);
    const primaryImage = allPageImages[0] || '';
    const carList = model.car.join(', ');
    const plainTextDescription = model.description.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const sanitizedDescription = DOMPurify.sanitize(model.description);
    const modelName = `${model.part} for Alfa Romeo ${carList}`;
    const sku = `AT-RND-${slug.toUpperCase()}`;
    const isDownloadAvailable = Boolean(model.downloadFile);
    const imageCount = allPageImages.length;
    const viewLabel = imageCount === 1 ? '1 captured view' : `${imageCount} captured views`;
    const compatibilityLabel = model.car.length === 1 ? 'Single platform fitment' : 'Multi-platform fitment';
    const engineeringScope = imageCount > 1 ? 'Multi-view scan set' : 'Single-view scan set';
    const developmentStatus = /prototype/i.test(`${model.part} ${plainTextDescription}`)
        ? 'Experimental Prototype'
        : (isDownloadAvailable ? 'Public Download' : 'Request Access');

    const absoluteMainImage = primaryImage
        ? (/^https?:\/\//i.test(primaryImage) ? primaryImage : `${BASE_URL}${primaryImage.startsWith('/') ? '' : '/'}${primaryImage}`)
        : '';

    const allImages = allPageImages.map((imageSrc, index) => {
        const absoluteImage = /^https?:\/\//i.test(imageSrc)
            ? imageSrc
            : `${BASE_URL}${imageSrc.startsWith('/') ? '' : '/'}${imageSrc}`;

        return {
            "@type": "ImageObject",
            "url": absoluteImage,
            "caption": `${model.part} for Alfa Romeo ${carList} - View ${index + 1}`,
            "contentUrl": absoluteImage
        };
    });

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": modelName,
        "description": plainTextDescription,
        "brand": {
            "@type": "Brand",
            "name": "Alfa Tuning"
        },
        "sku": sku,
        "mpn": sku,
        "image": allImages,
        "url": pageUrl,
        "category": "Automotive Parts",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
        },
        "primaryImageOfPage": allImages.length > 0 ? allImages[0] : undefined
    };

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{`${model.part} for Alfa Romeo ${carList} | Alfa Tuning Research and Development`}</title>
                <meta
                    name="description"
                    content={`${plainTextDescription} - Custom ${model.part} designed for ${carList}. Premium 3D model and tuning part by Alfa Tuning.`}
                />
                <meta
                    name="keywords"
                    content={`${carList}, ${model.part}, Alfa Romeo, custom parts, 3D model, tuning, ${carList} ${model.part}`}
                />
                <link rel="canonical" href={pageUrl} />
                <link rel="alternate" hrefLang="x-default" href={pageUrl} />

                <meta name="robots" content="index, follow, max-image-preview:large" />

                {/* Open Graph */}
                <meta property="og:type" content="product" />
                <meta property="og:title" content={`${model.part} for ${carList}`} />
                <meta property="og:description" content={plainTextDescription} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={absoluteMainImage} />
                <meta property="og:image:alt" content={`${model.part} for Alfa Romeo ${carList}`} />
                <meta property="og:site_name" content="Alfa Tuning" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${model.part} for ${carList}`} />
                <meta name="twitter:description" content={plainTextDescription} />
                <meta name="twitter:image" content={absoluteMainImage} />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <Container className="mt-4 mb-5">
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/rnd" }}>R&D</Breadcrumb.Item>
                    <Breadcrumb.Item active>{model.part}</Breadcrumb.Item>
                </Breadcrumb>

                <Row>
                    <Col lg={8}>
                        <section className="rnd-detail-surface">
                            <div className="rnd-detail-head">
                                <h1>{model.part}</h1>
                                <div className="rnd-detail-badges">
                                    <span className={`model-status ${isDownloadAvailable ? 'is-download' : 'is-preview'}`}>
                                        {isDownloadAvailable ? 'Download Available' : 'Preview Only'}
                                    </span>
                                    <span className="rnd-detail-chip">{viewLabel}</span>
                                </div>
                            </div>
                            <p className="rnd-detail-platforms">Compatible with {carList}</p>

                        {allPageImages.length > 0 ? (
                            <Carousel data-bs-theme="dark" className='mb-4'>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rnd-detail-image"
                                        src={mainImage}
                                        alt={`${model.part} 3D model for Alfa Romeo ${carList} - Main View`}
                                        title={`${model.part} for Alfa Romeo ${carList} - Main View`}
                                    />
                                </Carousel.Item>
                                {childImages.map((item, index) => (
                                    <Carousel.Item key={item.child}>
                                        <img
                                            className="d-block w-100 rnd-detail-image"
                                            src={item.src}
                                            alt={`${model.part} for Alfa Romeo ${carList} - View ${index + 2}`}
                                            title={`${model.part} for Alfa Romeo ${carList} - View ${index + 2}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            <div className="image-fallback rnd-detail-fallback mb-4">
                                <span>Images unavailable</span>
                            </div>
                        )}
                        </section>
                    </Col>

                    <Col lg={4}>
                        <aside className="rnd-detail-sidebar" aria-label="Part dossier">
                            <section className="rnd-detail-meta">
                                <h2>Part Dossier</h2>
                                <ul>
                                    <li>
                                        <span>Part ID</span>
                                        <strong>{sku}</strong>
                                    </li>
                                    <li>
                                        <span>Fitment</span>
                                        <strong>{compatibilityLabel}</strong>
                                    </li>
                                    <li>
                                        <span>Model views</span>
                                        <strong>{viewLabel}</strong>
                                    </li>
                                    <li>
                                        <span>Engineering scope</span>
                                        <strong>{engineeringScope}</strong>
                                    </li>
                                    <li>
                                        <span>Development status</span>
                                        <strong>{developmentStatus}</strong>
                                    </li>
                                    <li>
                                        <span>Asset package</span>
                                        <strong>{isDownloadAvailable ? 'Ready for download' : 'By request'}</strong>
                                    </li>
                                </ul>
                            </section>

                            <section className="rnd-detail-actions">
                                {isDownloadAvailable ? (
                                    <Button
                                        as="a"
                                        href={`https://storage.googleapis.com/alfatuning-app-3d-models/${model.downloadFile}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                        size="lg"
                                    >
                                        Download 3D Model
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            variant="secondary"
                                            size="lg"
                                            disabled
                                        >
                                            Download Not Public Yet
                                        </Button>
                                        <p className="rnd-detail-note">
                                            This asset is currently shared on request. Use Contact Us in the navigation to request availability.
                                        </p>
                                    </>
                                )}
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => navigate('/rnd')}
                                >
                                    ← Back to All Models
                                </Button>
                            </section>

                            <section className="rnd-detail-description">
                                <h3>Engineering Notes</h3>
                                <div className="model-description">
                                    {parse(sanitizedDescription)}
                                </div>
                            </section>

                            <section className="rnd-detail-raw">
                                <h3>Plain Summary</h3>
                                <p>{plainTextDescription}</p>
                            </section>
                        </aside>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default RnDDetail;