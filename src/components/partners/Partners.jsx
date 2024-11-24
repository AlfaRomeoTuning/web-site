import './Partners.css'

export function Partners() {
    return (<div id="partners-page">
        <div className="partners-container">
            <div className="partners">
                <img alt="galemotortsport" className='partners-image'
                    src={require("./../../assets/partners/color_logo_transparent.png")} />
                <img alt="quadrifoglioStore" className='partners-image qs-store'
                    src={require("./../../assets/partners/QS.png")} />
                <img alt="italoecu" className='partners-image'
                    src={require("./../../assets/partners/italoecu1.png")} />
            </div>
        </div>
    </div>)
}