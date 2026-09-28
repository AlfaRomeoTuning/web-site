import { Helmet } from 'react-helmet'
import './Home.css'
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

function Home() {
    const pageUrl = `${BASE_URL}/`;
    const homeOgImageModule = require('../../assets/AlfaFlasher00.png');
    const homeOgImagePath = typeof homeOgImageModule === 'string' ? homeOgImageModule : homeOgImageModule.default;
    const homeOgImage = `${BASE_URL}${homeOgImagePath}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Alfa Tuning",
        "url": `${BASE_URL}/`,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${BASE_URL}/rnd?search={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Alfa Tuning",
        "url": `${BASE_URL}/`,
        "logo": `${BASE_URL}/logo.png`,
        "sameAs": [
            "https://www.facebook.com/WorksByGw",
            "https://www.instagram.com/aerodynamic_carbon/"
        ]
    };

    return (<div id="home">
        <Helmet>
            <title>Alfa Tuning | Remote Flashing, Diagnostics Workflow, and R&D Parts</title>
            <meta name="description" content="Alfa Tuning provides a remote flashing device workflow, engineering-led R&D parts, and partner support for Alfa Romeo platforms." />

            {/* Open Graph */}
            <meta property="og:title" content="Alfa Tuning | Remote Flashing and R&D for Alfa Romeo" />
            <meta property="og:description" content="Device-first remote flashing workflow, engineering R&D catalog, and partner support for Alfa Romeo owners and workshops." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={homeOgImage} />
            <meta property="og:image:alt" content="Alfa Romeo remote flashing device by Alfa Tuning" />
            <meta property="og:site_name" content="Alfa Tuning" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Alfa Tuning | Remote Flashing and R&D for Alfa Romeo" />
            <meta name="twitter:description" content="Device-first remote flashing workflow, engineering R&D catalog, and partner support for Alfa Romeo owners and workshops." />
            <meta name="twitter:image" content={homeOgImage} />

            <link rel="canonical" href={pageUrl} />

            {/* Hreflang for international SEO */}
            <link rel="alternate" hrefLang="x-default" href={pageUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(organizationData)}
            </script>
        </Helmet>
        <section className='home-hero'>
            <div className='home-eyebrow'>Automotive software and hardware development for Alfa Romeo</div>
            <h1>
                Build a repeatable Alfa Romeo tuning workflow from diagnostics to deployed calibration.
            </h1>
            <p className='home-lead'>
                Alfa Tuning combines a dedicated remote flasher device, field-tested mobile setup steps,
                and an R&amp;D catalog built from Giulia GTA and GTAm engineering projects.
            </p>
            <div className='home-actions'>
                <Link to="/device" className='home-cta home-cta-primary'>Start with the Device</Link>
                <Link to="/rnd" className='home-cta home-cta-secondary'>Open R&amp;D Catalog</Link>
            </div>
            <ul className='home-proof-list' aria-label='Core value points'>
                <li>Device workflow prioritizes stable connectivity and predictable flash sessions.</li>
                <li>R&amp;D assets include multi-view model captures and request/download availability signals.</li>
                <li>Partner network helps connect remote development to local installation support.</li>
            </ul>
        </section>

        <section className='home-journey' aria-label='Workflow overview'>
            <article>
                <h2>1. Prepare and Connect</h2>
                <p>Validate hotspot settings and establish a clean connection path before any calibration step.</p>
            </article>
            <article>
                <h2>2. Select Development Path</h2>
                <p>Use the device workflow, R&amp;D component exploration, or combined route depending on build goals.</p>
            </article>
            <article>
                <h2>3. Deploy and Iterate</h2>
                <p>Deploy changes, then refine with parts data and specialist partner support where needed.</p>
            </article>
        </section>

        <section className='home-surface' aria-label='Primary product areas'>
            <article className='home-surface-item'>
                <h2>Remote Flasher Device</h2>
                <p>Structured setup guidance for iOS and Android hotspot workflows and stable remote sessions.</p>
                <Link to="/device" className="home-inline-link">Go to Device Workflow</Link>
            </article>
            <article className='home-surface-item'>
                <h2>R&amp;D Lab Catalog</h2>
                <p>Engineering artifacts for GTA and GTAm platforms with model views, fitment context, and availability status.</p>
                <Link to="/rnd" className="home-inline-link">Explore R&amp;D Models</Link>
            </article>
            <article className='home-surface-item'>
                <h2>Partner Support</h2>
                <p>External specialist network for workshops and owners that need regional installation or consultation support.</p>
                <Link to="/partners" className="home-inline-link">View Partners</Link>
            </article>
        </section>

    </div>)
}

export default Home