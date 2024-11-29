import { Helmet } from "react-helmet"

function NoMatch() {
    return (<>
        <Helmet
        >
            <title>Not Found Alfa Tuning</title>
            <meta name="description" content="Alfa Tuning not found page" />
        </Helmet>
        Not Found</>)
}

export default NoMatch