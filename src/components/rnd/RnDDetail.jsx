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

    const pageUrl = BASE_URL + `/rnd/${slug}`;    const mainImageModule = require('../../assets/rnd/' + model.car[0].replace(/ /g, '') + model.part.replace(/ /g, '') + '.png');
    const mainImage = typeof mainImageModule === 'string' ? mainImageModule : (mainImageModule && mainImageModule.default) ? mainImageModule.default : '';

    // Prefer absolute URL for social/meta/structured-data
    const absoluteMainImage = mainImage
        ? (/^https?:\/\//i.test(mainImage) ? mainImage : BASE_URL + (mainImage.startsWith('/') ? '' : '/') + mainImage)
        : '';

    // Prepare all images for structured data
    const allImages = [];
    if (absoluteMainImage) {
        allImages.push({
            "@type": "ImageObject",
            "url": absoluteMainImage,
            "caption": `${model.part} for Alfa Romeo ${model.car.join(', ')} - Main View`,
            "contentUrl": absoluteMainImage
        });
    }

    if (model.childs) {
        model.childs.forEach((child, index) => {
            try {
                const childModule = require('../../assets/rnd/' + model.car[0].replace(/ /g, '') + model.part.replace(/ /g, '') + child + '.png');
                const childPath = typeof childModule === 'string' ? childModule : (childModule && childModule.default) ? childModule.default : '';
                if (childPath) {
                    const absoluteChildPath = /^https?:\/\//i.test(childPath) ? childPath : BASE_URL + (childPath.startsWith('/') ? '' : '/') + childPath;
                    allImages.push({
                        "@type": "ImageObject",
                        "url": absoluteChildPath,
                        "caption": `${model.part} for Alfa Romeo ${model.car.join(', ')} - View ${index + 2}`,
                        "contentUrl": absoluteChildPath
                    });
                }
            } catch (e) {
                console.warn(`Could not load child image ${child} for ${model.part}`);
            }
        });
    }

    // Очищаем HTML для использования в мета-тегах (только текст)
    const plainTextDescription = model.description.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

    // Очищаем и санитизируем HTML для отображения
    const sanitizedDescription = DOMPurify.sanitize(model.description);

    const modelName = `${model.part} for Alfa Romeo ${model.car.map(m => m).join(', ')}`;
    const sku = `AT-RND-${slug.toUpperCase()}`;

    // Structured Data для конкретного продукта
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
                <title>{`${model.part} for Alfa Romeo ${model.car.map(m => m).join(', ')} | Alfa Tuning Research and Development`}</title>
                <meta
                    name="description"
                    content={`${plainTextDescription} - Custom ${model.part} designed for ${model.car.join(', ')}. Premium 3D model and tuning part by Alfa Tuning.`}
                />
                <meta
                    name="keywords"
                    content={`${model.car.map(m => m).join(', ')}, ${model.part}, Alfa Romeo, custom parts, 3D model, tuning, ${model.car.map(m => m).join(', ')} ${model.part}`}
                />
                <link rel="canonical" href={pageUrl} />
                <link rel="alternate" hrefLang="x-default" href={pageUrl} />

                <meta name="robots" content="index, follow, max-image-preview:large" />

                {/* Open Graph */}
                <meta property="og:type" content="product" />
                <meta property="og:title" content={`${model.part} for ${model.car.map(m => m).join(', ')}`} />
                <meta property="og:description" content={plainTextDescription} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={absoluteMainImage} />
                <meta property="og:image:alt" content={`${model.part} for Alfa Romeo ${model.car.join(', ')}`} />
                <meta property="og:site_name" content="Alfa Tuning" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${model.part} for ${model.car.map(m => m).join(', ')}`} />
                <meta name="twitter:description" content={plainTextDescription} />
                <meta name="twitter:image" content={absoluteMainImage} />

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
                                    alt={`${model.part} 3D model for Alfa Romeo ${model.car.join(', ')} - Main View`}
                                    title={`${model.part} for Alfa Romeo ${model.car.join(', ')} - Main View`}
                                />
                            </Carousel.Item>
                            {model.childs && model.childs.map((child, index) => (
                                <Carousel.Item key={child}>
                                    <img
                                        className="d-block w-100 rnd-detail-image"
                                        src={require('../../assets/rnd/' + model.car[0].replace(/ /g, '') + model.part.replace(/ /g, '') + child + '.png')}
                                        alt={`${model.part} for Alfa Romeo ${model.car[0]} - View ${index + 2}`}
                                        title={`${model.part} for Alfa Romeo ${model.car.join(', ')} - View ${index + 2}`}
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
                                <div className="model-description">
                                    {parse(sanitizedDescription)}
                                </div>
                            </div>

                            <div className="d-grid gap-2">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => {
                                        if (model.downloadFile) {
                                            const BUCKET_NAME = "alfatuning-app-3d-models";
                                            const downloadUrl = `https://storage.googleapis.com/${BUCKET_NAME}/${model.downloadFile}`;
                                            window.open(downloadUrl, '_blank');
                                        } else {
                                            alert('Contact with us about that!');
                                        }
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