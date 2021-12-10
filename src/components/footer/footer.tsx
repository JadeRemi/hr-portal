import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faYoutube, faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import imgLogoBlue from "../../assets/images/itexpert-logo-blue.svg";
import imgLogoTwitter from "../../assets/images/logo-twitter.svg";
import imgLogoFacebook from "../../assets/images/logo-facebook.svg";
import imgLogoYoutube from "../../assets/images/logo-youtube.svg";
import imgIconArrow from "../../assets/images/icon-arrow.svg";



interface Model {
    data: {
        [key: string]: string;
    };
}

//<FontAwesomeIcon icon={faTwitter} />
//<FontAwesomeIcon icon={faFacebookSquare} />
//<FontAwesomeIcon icon={faYoutube} />

export function Footer({ data }: Model) {
    
    const [checked, setChecked] = useState(false);
    

    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-column footer-column-logo">
                    <img className="footer-logo" src={imgLogoBlue} alt="logo" />
                    <p>{data.Rights1}</p>
                    <p>{data.Rights2}</p>
                </div>
                <div className="footer-column footer-column-address">
                    <h3>{data.Contacts}</h3>
                    <p>{data.Address}</p><br />
                    <p>{data.Phone1}</p>
                    <p>{data.Phone2}</p><br />
                    <p><span>{data.Mail}</span></p>
                </div>
                <div className="footer-column footer-column-feedback">
                    <h3>{data.CallMe}</h3>
                    <form className="footer-form">
                        <div className="input-icons">
                            <img src={imgIconArrow} alt="arrow" />
                        </div>
                        <input className="footer-input" type="text" placeholder="+7(___)___-__-__" />
                        <div>
                            <label className="checkcontainer">
                                <input type="checkbox" checked={checked} 
                                onChange={e => setChecked(e.target.checked)}/>
                                <span className="checkmark"></span>
                            </label>
                            <div className="footer-confirmation">
                                <p className="footer-column-accept">{data.Accept}</p>
                                <a className="footer-column-personal" href="#"><span>{data.PersonalData}</span></a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="footer-column footer-column-socials">
                    <img src={imgLogoTwitter} alt="logo" />
                    <img src={imgLogoFacebook} alt="logo" />
                    <img src={imgLogoYoutube} alt="logo" />
                </div>
            </div>
        </div>
    );
};
