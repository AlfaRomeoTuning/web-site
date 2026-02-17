import './Software.css'
import { Helmet } from 'react-helmet'

function Software() {
    return (<div id="software-page">
        <Helmet>
            <title>ECU Tuning Software | Alfa Tuning</title>
            <meta name="description" content="Expert ECU tuning services for Alfa Romeo. Custom remapping, performance gains, and diagnostic services for Giulia, Stelvio, and all Alfa models." />
            <link rel="canonical" href="https://alfatuning.app/software" />

            {/* Hreflang for international SEO */}
            <link rel="alternate" hrefLang="x-default" href="https://alfatuning.app/software" />
            <link rel="alternate" hrefLang="en" href="https://alfatuning.app/software" />

            {/* Open Graph */}
            <meta property="og:title" content="ECU Tuning Software | Alfa Tuning" />
            <meta property="og:description" content="Expert ECU tuning services for Alfa Romeo. Custom remapping, performance gains, and diagnostic services." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://alfatuning.app/software" />
            <meta property="og:image" content="https://alfatuning.app/logo.png" />
            <meta property="og:site_name" content="Alfa Tuning" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="ECU Tuning Software | Alfa Tuning" />
            <meta name="twitter:description" content="Expert ECU tuning services for Alfa Romeo. Custom remapping, performance gains, and diagnostic services." />
            <meta name="twitter:image" content="https://alfatuning.app/logo.png" />
        </Helmet>
        <div className='text-container'>
            <div className='text'>
                <h4>At AlfaTune, we're passionate about squeezing every drop of performance from your Alfa Romeo.
                </h4>
                <p>
                    Our expert ECU tuning services enhance power, torque, and overall driving experience.
                    Whether you drive a Giulia, Stelvio, or any other Alfa model, we’ve got you covered.
                    What We Offer
                    Custom ECU Remapping: Tailored to your Alfa’s unique characteristics, our remaps optimize fuel delivery, ignition timing, and boost pressure.
                    Performance Gains: Expect increased horsepower, improved throttle response, and smoother acceleration.
                    Diagnostic Services: We diagnose and address any issues affecting your Alfa’s performance.
                    Personalized Support: We’re not just tuners; we’re enthusiasts who love Alfa Romeos as much as you do.
                </p>
            </div></div>
    </div>)
}

export default Software