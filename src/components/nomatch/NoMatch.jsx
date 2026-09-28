import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import "./NoMatch.css";

function NoMatch() {
    return (<div id="nomatch">
        <Helmet
        >
            <title>404 Not Found Alfa Tuning</title>
            <meta name="description" content="Alfa Tuning not found page" />
            <meta name="keywords" content="Alfa Tuning 404" />
            <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="nomatch">
            <img
                alt="404 page not found illustration"
                src={require("./../../assets/404.png")}
                width="800"
                height="450"
            />
            <h1>404 Page not found...</h1>
            <p>The page you requested is unavailable. Continue with one of the technical sections below.</p>
            <div className="nomatch-actions" aria-label="Recovery navigation">
                <Link to="/" className="btn btn-primary">Go to Home</Link>
                <Link to="/device" className="btn btn-outline-secondary">Device Workflow</Link>
                <Link to="/rnd" className="btn btn-outline-secondary">R&amp;D Catalog</Link>
            </div>
        </div>
    </div>
    )
}

export default NoMatch