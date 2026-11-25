import './Partners.css'
import AlfaSpecialists from '../../assets/partners/alfaSpecialists.svg?react';
import { Helmet } from 'react-helmet';
import { BASE_URL } from '../../config';
import qSImage from '../../assets/partners/QS.png';
import alfacarelogo1Image from '../../assets/partners/alfacarelogo-1.png';
import engCustomImage from '../../assets/partners/eng-custom.png';
import bDTechnologyImage from '../../assets/partners/BDTechnology.png';
import alfissimoImage from '../../assets/partners/alfissimo.png';
import italoecu1Image from '../../assets/partners/italoecu1.png';
import colorLogoTransparentImage from '../../assets/partners/color_logo_transparent.png';
import squadraTuningImage from '../../assets/partners/squadra-tuning.png';
import worksbygwImage from '../../assets/partners/worksbygw.png';
import aerocarbonImage from '../../assets/partners/aerocarbon.png';
import alfaOBDImage from '../../assets/partners/AlfaOBD.png';
import mtDImage from '../../assets/partners/MtD.png';

const PARTNERS = [
    {
        name: 'Quadrifoglio Store',
        href: 'https://qvstore.pl/',
        image: qSImage,
        className: 'qs-store',
    },
    {
        name: 'Alfa Care UK',
        href: 'https://alfacare.co.uk/',
        image: alfacarelogo1Image,
    },
    {
        name: 'Alfa Specialists Greece',
        href: 'https://alfa-specialists.gr/',
        icon: 'alfa-specialists',
        className: 'alfa-specialist small-image',
    },
    {
        name: 'ENG Custom',
        href: 'https://eng-custom.com/',
        image: engCustomImage,
        className: 'eng-custom small-image',
    },
    {
        name: '3D Technology',
        href: 'http://www.3dtechnology.pl/',
        image: bDTechnologyImage,
    },
    {
        name: 'Alfissimo',
        href: 'https://alfissimo.com/',
        image: alfissimoImage,
        className: 'small-image',
    },
    {
        name: 'Italo ECU',
        href: 'https://www.italoecu.de/',
        image: italoecu1Image,
        className: 'small-image',
    },
    {
        name: 'Gale Motorsport',
        href: 'https://www.galemotorsport.com/',
        image: colorLogoTransparentImage,
        className: 'small-image',
    },
    {
        name: 'Squadra Tuning',
        href: 'https://squadra-tuning.com/',
        image: squadraTuningImage,
        className: 'small-image',
    },
    {
        name: 'Works by GW',
        href: 'https://www.facebook.com/WorksByGw',
        image: worksbygwImage,
        className: 'worksbygw small-image',
    },
    {
        name: 'Aerodynamic Carbon',
        href: 'https://www.instagram.com/aerodynamic_carbon/',
        image: aerocarbonImage,
        className: 'aerocarbon',
    },
    {
        name: 'AlfaOBD',
        href: 'https://www.alfaobd.com/',
        image: alfaOBDImage,
        className: 'small-image',
    },
    {
        name: 'MultiAir Tuning Development',
        href: 'https://www.multiair-tuning-dev.com/',
        image: mtDImage,
        className: 'small-image',
    },
];

function Partners() {
    const pageUrl = `${BASE_URL}/partners`;
    const partnersOgImage = `${BASE_URL}${qSImage}`;
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Partners | Alfa Tuning",
        "description": "Alfa Romeo workshops, tuners, parts suppliers, and engineering partners that work with Alfa Tuning.",
        "url": pageUrl,
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${BASE_URL}/`
            }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Partners",
                "item": pageUrl
            }]
        }
    };

    return (<div id="partners-page">
        <Helmet>
            <title>Partners | Alfa Tuning</title>
            <meta name="description" content="Alfa Romeo workshops, tuners, parts suppliers, and engineering partners that work with Alfa Tuning." />

            {/* Open Graph */}
            <meta property="og:title" content="Partners | Alfa Tuning" />
            <meta property="og:description" content="Alfa Romeo workshops, tuners, parts suppliers, and engineering partners that work with Alfa Tuning." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={partnersOgImage} />
            <meta property="og:image:alt" content="Logos of Alfa Tuning partners" />
            <meta property="og:site_name" content="Alfa Tuning" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Partners | Alfa Tuning" />
            <meta name="twitter:description" content="Alfa Romeo workshops, tuners, parts suppliers, and engineering partners that work with Alfa Tuning." />
            <meta name="twitter:image" content={partnersOgImage} />

            <link rel="canonical" href={pageUrl} />

            {/* Hreflang for international SEO */}
            <link rel="alternate" hrefLang="x-default" href={pageUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
        <header className="partners-header">
            <h1>Our Partners</h1>
            <p className="partners-subtitle">Specialist network supporting Alfa Romeo tuning workflows, parts, and engineering services.</p>
        </header>
        <div className="partners-container">
            <section className="partners-meta" aria-label="Partner network summary">
                <p>
                    Use this list to find regional specialists and platform partners who work with Alfa Tuning.
                    For technical questions, use Contact in the main navigation.
                </p>
                <div className="partners-badges">
                    <span>{PARTNERS.length} listed partners</span>
                    <span>External specialist network</span>
                </div>
            </section>
            <div className="partners-grid">
                {PARTNERS.map((partner) => (
                    <a
                        key={partner.name}
                        href={partner.href}
                        target="_blank"
                        rel="noreferrer"
                        className='partner-card'
                        aria-label={`Visit ${partner.name}`}
                    >
                        <div className="partner-logo-wrap">
                            {partner.icon === 'alfa-specialists' ? (
                                <AlfaSpecialists className={`partners-image ${partner.className || ''}`} title={partner.name} aria-label={partner.name} />
                            ) : (
                                <img
                                    alt={`${partner.name} logo`}
                                    className={`partners-image ${partner.className || ''}`}
                                    loading="lazy"
                                    src={partner.image}
                                    width="280"
                                    height="90"
                                />
                            )}
                        </div>
                        <p className="partner-name">{partner.name}</p>
                    </a>
                ))}
            </div>
        </div>
    </div>)
}

export default Partners;