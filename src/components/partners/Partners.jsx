import './Partners.css'
import { ReactComponent as AlfaSpecialists } from './../../assets/partners/alfaSpecialists.svg';

export function Partners() {
    return (<div id="partners-page">
        <div className="partners-container">
            <div className="partners">
                <a href="https://www.galemotorsport.com/">
                    <img alt="galemotortsport" className='partners-image'
                        src={require("./../../assets/partners/color_logo_transparent.png")} />
                </a>
                <a href="https://qvstore.pl/">
                    <img alt="quadrifoglioStore" className='partners-image qs-store'
                        src={require("./../../assets/partners/QS.png")} />
                </a>
                <a href="https://www.italoecu.de/">
                    <img alt="italoecu" className='partners-image'
                        src={require("./../../assets/partners/italoecu1.png")} />
                </a>
                <a href="https://alfissimo.com/">
                    <img alt="alfissimo" className='partners-image'
                        src={require("./../../assets/partners/alfissimo.png")} />
                </a>
                <a href="https://alfacare.co.uk/">
                    <img alt="alfacarelogo" className='partners-image'
                        src={require("./../../assets/partners/alfacarelogo-1.png")} />
                </a>
                <a href="https://squadra-tuning.com/">
                    <img alt="squadra-tuning" className='partners-image'
                        src={require("./../../assets/partners/squadra-tuning.png")} />
                </a>
                <a href="https://alfa-specialists.gr/">
                    <AlfaSpecialists className='partners-image alfa-specialists' />
                </a>
                <a href="https://eng-custom.com/">
                    <img alt="eng-custom" className='partners-image eng-custom'
                        src={require("./../../assets/partners/eng-custom.png")} />
                </a>
            </div>
        </div>
    </div>)
}