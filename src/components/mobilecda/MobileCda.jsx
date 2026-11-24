import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../config';
import '../privacy/PrivacyPolicy.css';

const TITLE = 'MobileCDA | Alfa Tuning';
const DESCRIPTION = 'MobileCDA mobile app by Alfa Tuning: privacy policy and app documents.';

function MobileCda() {
    const pageUrl = `${BASE_URL}/mobilecda`;

    return (
        <div id="privacy-page">
            <Helmet>
                <title>{TITLE}</title>
                <meta name="description" content={DESCRIPTION} />
                <meta property="og:title" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content="Alfa Tuning" />
                <link rel="canonical" href={pageUrl} />
            </Helmet>

            <article className="privacy-container">
                <header className="privacy-header">
                    <h1>MobileCDA</h1>
                </header>

                <section>
                    <h2>Documents</h2>
                    <ul>
                        <li>
                            <Link to="/mobilecda/privacy-policy">MobileCDA Privacy Policy</Link>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
}

export default MobileCda;
