import imgHandshake from "../../assets/images/announce-handshake.svg";
import imgAbout from "../../assets/images/announce-about.svg";
import imgIconCare from "../../assets/images/icon-care.svg";
import imgIconLike from "../../assets/images/icon-like.svg";
import imgIconStar from "../../assets/images/icon-star.svg";
import imgIconSmile from "../../assets/images/icon-smile.svg";

interface Model {
    data: {
        [key: string]: string;
    };
}

export function Announce({ data }: Model) {
    return (
        <div className="main-page announce">
            <div className="presentation">
                <div className="presentation-card">
                    <h1><span>{data.Name}</span>{data.Heading}</h1>
                    <div className="presentation-info">
                        <p>{data.Paragraph1}</p><br />
                        <p>{data.Paragraph2}</p>
                    </div>
                </div>
                <img className="presentation-about-img" src={imgAbout} alt="about" />
                <div className="presentation-banner">
                    <img src={imgHandshake} alt="handshake" />
                    <h1>{data.BannerHeading}</h1>
                    <p className="banner-text">{data.BannerText}</p>
                    <button className="button-blue" id="buttonConfirmAnnounce"><p>{data.BannerButton}</p></button>
                </div>
            </div>

            <div className="pros">
                <div className="pros-wrapper">
                    <div className="pros-column">
                        <img src={imgIconCare} alt="care" />
                        <h1>{data.Column1Title}</h1>
                        <p>{data.Column1Text}</p>
                    </div>
                    <div className="pros-column">
                        <img src={imgIconLike} alt="like" />
                        <h1>{data.Column2Title}</h1>
                        <p>{data.Column2Text}</p>
                    </div>
                    <div className="pros-column">
                        <img src={imgIconStar} alt="star" />
                        <h1>{data.Column3Title}</h1>
                        <p>{data.Column3Text}</p>
                    </div>
                    <div className="pros-column">
                        <img src={imgIconSmile} alt="smile" />
                        <h1>{data.Column4Title}</h1>
                        <p>{data.Column4Text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
