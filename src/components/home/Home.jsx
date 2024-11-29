import { Helmet } from 'react-helmet'
import './Home.css'

function Home() {
    return (<div id="home">
        <Helmet
        >
            <title>Home Alfa Tuning</title>
            <meta name="description" content="Alfa Tuning home page" />
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