import { Helmet } from "react-helmet";
import "./NoMatch.css";

function NoMatch() {
    return (<div>
        <Helmet
        >
            <title>Not Found Alfa Tuning</title>
            <meta name="description" content="Alfa Tuning not found page" />
            <meta name="keywords" content="Alfa Tuning 404" />
        </Helmet>
        <div className="nomatch">
            <img alt="not found page" src={require("./../../assets/404.png")} />
            <h1>404 Page not found...</h1>
        </div>
    </div>
    )
}

export default NoMatch