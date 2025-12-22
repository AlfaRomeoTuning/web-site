import './Partners.css'
import { ReactComponent as AlfaSpecialists } from './../../assets/partners/alfaSpecialists.svg';
import { Helmet } from 'react-helmet';

function Partners() {
    const pageUrl = "https://alfatuning.app/partners";
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
                "item": "https://alfatuning.app/"
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
            <meta
                name="keywords"
                content="partners, alfa romeo, alfa romeo shop, tuning specialists, mechanics, distributors"
            />

            {/* Open Graph */}
            <meta property="og:title" content="Partners Alfa Tuning | Our Trusted Partners" />
            <meta property="og:description" content="Meet our trusted partners and tuning specialists for Alfa Romeo vehicles. Providing top-quality services and parts worldwide." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content="https://alfatuning.app/logo.png" />
            <meta property="og:site_name" content="Alfa Tuning" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Partners Alfa Tuning | Our Trusted Partners" />
            <meta name="twitter:description" content="Meet our trusted partners and tuning specialists for Alfa Romeo vehicles." />
            <meta name="twitter:image" content="https://alfatuning.app/logo.png" />

            <link rel="canonical" href={pageUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
        <div className="partners-container">
            <div className="partners">
                <a href="https://qvstore.pl/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="quadrifoglioStore" className='partners-image qs-store'
                        src={require("./../../assets/partners/QS.png")} />
                </a>
                <a href="https://alfacare.co.uk/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="alfacarelogo" className='partners-image'
                        src={require("./../../assets/partners/alfacarelogo-1.png")} />
                </a>
                <a href="https://alfa-specialists.gr/" target="_blank" rel="noreferrer" className='partner'>
                    <AlfaSpecialists className='partners-image alfa-specialist small-image' />
                </a>
                <a href="https://eng-custom.com/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="eng-custom" className='partners-image eng-custom  small-image'
                        src={require("./../../assets/partners/eng-custom.png")} />
                </a>
                <a href="http://www.3dtechnology.pl/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="3d technologu" className='partners-image'
                        src={require("./../../assets/partners/BDTechnology.png")} />
                </a>
                <a href="https://alfissimo.com/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="alfissimo" className='partners-image  small-image'
                        src={require("./../../assets/partners/alfissimo.png")} />
                </a>
                <a href="https://www.italoecu.de/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="italoecu" className='partners-image  small-image'
                        src={require("./../../assets/partners/italoecu1.png")} />
                </a>
                <a href="https://www.galemotorsport.com/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="galemotortsport" className='partners-image  small-image'
                        src={require("./../../assets/partners/color_logo_transparent.png")} />
                </a>
                <a href="https://squadra-tuning.com/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="squadra-tuning" className='partners-image  small-image'
                        src={require("./../../assets/partners/squadra-tuning.png")} />
                </a>
                <a href="https://www.facebook.com/WorksByGw" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="works-by-gw" className='partners-image worksbygw  small-image'
                        src={require("./../../assets/partners/worksbygw.png")} />
                </a>
                <a href="https://www.instagram.com/aerodynamic_carbon/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="aero-carbon" className='partners-image aerocarbon'
                        src={require("./../../assets/partners/aerocarbon.png")} />
                </a>
                <a href="https://www.alfaobd.com/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="works-by-gw" className='partners-image small-image'
                        src={require("./../../assets/partners/AlfaOBD.png")} />
                </a>
                <a href="https://www.multiair-tuning-dev.com/" target="_blank" rel="noreferrer" className='partner'>
                    <img alt="works-by-gw" className='partners-image small-image'
                        src={require("./../../assets/partners/MtD.png")} />
                </a>
            </div>
        </div>
    </div>)
}

export default Partners;