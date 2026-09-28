import './Partners.css'
import { ReactComponent as AlfaSpecialists } from './../../assets/partners/alfaSpecialists.svg';
import { Helmet } from 'react-helmet';
import { BASE_URL } from '../../config';

const PARTNERS = [
    {
        name: 'Quadrifoglio Store',
        href: 'https://qvstore.pl/',
        image: require('./../../assets/partners/QS.png'),
        className: 'qs-store',
    },
    {
        name: 'Alfa Care UK',
        href: 'https://alfacare.co.uk/',
        image: require('./../../assets/partners/alfacarelogo-1.png'),
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
        image: require('./../../assets/partners/eng-custom.png'),
        className: 'eng-custom small-image',
    },
    {
        name: '3D Technology',
        href: 'http://www.3dtechnology.pl/',
        image: require('./../../assets/partners/BDTechnology.png'),
    },
    {
        name: 'Alfissimo',
        href: 'https://alfissimo.com/',
        image: require('./../../assets/partners/alfissimo.png'),
        className: 'small-image',
    },
    {
        name: 'Italo ECU',
        href: 'https://www.italoecu.de/',
        image: require('./../../assets/partners/italoecu1.png'),
        className: 'small-image',
    },
    {
        name: 'Gale Motorsport',
        href: 'https://www.galemotorsport.com/',
        image: require('./../../assets/partners/color_logo_transparent.png'),
        className: 'small-image',
    },
    {
        name: 'Squadra Tuning',
        href: 'https://squadra-tuning.com/',
        image: require('./../../assets/partners/squadra-tuning.png'),
        className: 'small-image',
    },
    {
        name: 'Works by GW',
        href: 'https://www.facebook.com/WorksByGw',
        image: require('./../../assets/partners/worksbygw.png'),
        className: 'worksbygw small-image',
    },
    {
        name: 'Aerodynamic Carbon',
        href: 'https://www.instagram.com/aerodynamic_carbon/',
        image: require('./../../assets/partners/aerocarbon.png'),
        className: 'aerocarbon',
    },
    {
        name: 'AlfaOBD',
        href: 'https://www.alfaobd.com/',
        image: require('./../../assets/partners/AlfaOBD.png'),
        className: 'small-image',
    },
    {
        name: 'MultiAir Tuning Development',
        href: 'https://www.multiair-tuning-dev.com/',
        image: require('./../../assets/partners/MtD.png'),
        className: 'small-image',
    },
];

function Partners() {
    const pageUrl = `${BASE_URL}/partners`;
    const partnersOgImageModule = require('./../../assets/partners/QS.png');
    const partnersOgImagePath = typeof partnersOgImageModule === 'string' ? partnersOgImageModule : partnersOgImageModule.default;
    const partnersOgImage = `${BASE_URL}${partnersOgImagePath}`;
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Partners Alfa Tuning | Our Trusted Partners",
        "description": "Meet our trusted partners and tuning specialists for Alfa Romeo vehicles. Providing top-quality services and parts worldwide.",
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
            <title>Partners Alfa Tuning | Our Trusted Partners</title>
            <meta name="description" content="Meet our trusted partners and tuning specialists for Alfa Romeo vehicles. Providing top-quality services and parts worldwide." />

            {/* Open Graph */}
            <meta property="og:title" content="Partners Alfa Tuning | Our Trusted Partners" />
            <meta property="og:description" content="Meet our trusted partners and tuning specialists for Alfa Romeo vehicles. Providing top-quality services and parts worldwide." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={partnersOgImage} />
            <meta property="og:image:alt" content="Alfa Tuning trusted partners" />
            <meta property="og:site_name" content="Alfa Tuning" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Partners Alfa Tuning | Our Trusted Partners" />
            <meta name="twitter:description" content="Meet our trusted partners and tuning specialists for Alfa Romeo vehicles." />
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
                    Use this directory to find regional specialists and platform partners connected to the Alfa Tuning ecosystem.
                    For technical coordination, start through Contact in the main navigation.
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