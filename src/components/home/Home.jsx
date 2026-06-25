import { Helmet } from 'react-helmet'
import './Home.css'
import { BASE_URL } from '../../config';

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
            <title>Home Alfa Tuning | Unlock Your Alfa Romeo's Potential</title>
            <meta name="description" content="Unlock the full potential of your Alfa Romeo with Alfa Tuning. We offer OBD2 interfaces, custom 3D models, manuals, and tuning services for enthusiasts and mechanics." />

            {/* Open Graph */}
            <meta property="og:title" content="Home Alfa Tuning | Unlock Your Alfa Romeo's Potential" />
            <meta property="og:description" content="Unlock the full potential of your Alfa Romeo with Alfa Tuning. We offer OBD2 interfaces, custom 3D models, manuals, and tuning services." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={homeOgImage} />
            <meta property="og:image:alt" content="Alfa Romeo remote flashing device by Alfa Tuning" />
            <meta property="og:site_name" content="Alfa Tuning" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Home Alfa Tuning | Unlock Your Alfa Romeo's Potential" />
            <meta name="twitter:description" content="Unlock the full potential of your Alfa Romeo with Alfa Tuning. We offer OBD2 interfaces, custom 3D models, manuals, and tuning services." />
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
        <div className='text-container'>
            <div className='text'>
                <h1>
                    Unlock the Full Potential of Your Alfa Romeo
                </h1>
                <h4>At Alfa Tuning, we’re passionate about enhancing your driving experience.
                    Whether you’re a car enthusiast, a mechanic, or simply someone who wants to optimize their vehicle,
                    we’ve got you covered. You can find here OBD2 interface, 3D models of bodyparts and manuals for it</h4>
            </div>
        </div>

    </div>)
}

export default Home