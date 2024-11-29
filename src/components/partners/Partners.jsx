import './Partners.css'
import { ReactComponent as AlfaSpecialists } from './../../assets/partners/alfaSpecialists.svg';
import { Helmet } from 'react-helmet';

export function Partners() {
    return (<div id="partners-page">
        <Helmet
        >
            <title>Partners Alfa Tuning</title>
            <meta name="description" content="Alfa Tuning partners page" />
            <meta
                name="keywords"
                content="partners, alfa romeo, alfa romeo shop"
            />
        </Helmet>
        <div className="partners-container">
            <div className="partners">
                <a href="https://qvstore.pl/" className='partner'>
                    <img alt="quadrifoglioStore" className='partners-image qs-store'
                        src={require("./../../assets/partners/QS.png")} />
                </a>
                <a href="https://alfacare.co.uk/" className='partner'>
                    <img alt="alfacarelogo" className='partners-image'
                        src={require("./../../assets/partners/alfacarelogo-1.png")} />
                </a>
                <a href="https://alfa-specialists.gr/" className='partner'>
                    <AlfaSpecialists className='partners-image alfa-specialist small-image' />
                </a>
                <a href="https://eng-custom.com/" className='partner'>
                    <img alt="eng-custom" className='partners-image eng-custom  small-image'
                        src={require("./../../assets/partners/eng-custom.png")} />
                </a>
                <a href="http://www.3dtechnology.pl/" className='partner'>
                    <img alt="3d technologu" className='partners-image'
                        src={require("./../../assets/partners/BDTechnology.png")} />
                </a>
                <a href="https://alfissimo.com/" className='partner'>
                    <img alt="alfissimo" className='partners-image  small-image'
                        src={require("./../../assets/partners/alfissimo.png")} />
                </a>
                <a href="https://www.italoecu.de/" className='partner'>
                    <img alt="italoecu" className='partners-image  small-image'
                        src={require("./../../assets/partners/italoecu1.png")} />
                </a>
                <a href="https://www.galemotorsport.com/" className='partner'>
                    <img alt="galemotortsport" className='partners-image  small-image'
                        src={require("./../../assets/partners/color_logo_transparent.png")} />
                </a>
                <a href="https://squadra-tuning.com/" className='partner'>
                    <img alt="squadra-tuning" className='partners-image  small-image'
                        src={require("./../../assets/partners/squadra-tuning.png")} />
                </a>
                <a href="https://www.facebook.com/WorksByGw" className='partner'>
                    <img alt="works-by-gw" className='partners-image worksbygw  small-image'
                        src={require("./../../assets/partners/worksbygw.png")} />
                </a>
                <a href="https://www.paris5garage.it/" className='partner'>
                    <img alt="paris-5-garage" className='partners-image'
                        src={require("./../../assets/partners/ParisFiveGarage.png")} />
                </a>
                <a href="https://www.alfaobd.com/" className='partner'>
                    <img alt="works-by-gw" className='partners-image small-image'
                        src={require("./../../assets/partners/AlfaOBD.png")} />
                </a>
            </div>
        </div>
    </div>)
}