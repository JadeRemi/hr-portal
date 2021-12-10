import { useState, MouseEvent } from 'react';
import imgLogoBlack from "../../assets/images/itexpert-logo-black.svg";
import imgIconArrow from "../../assets/images/icon-arrow.svg";

interface Model{
    data: {
        [key: string]: any;
    }[]
}

export function Header({ data }: Model) {
    const languages: string[] = Object.keys(data[1]);
    const [lang, setLang] = useState(0);

    function switchLang(event: MouseEvent) {
        let iteration: number = lang+1;
        if (iteration >= languages.length) {iteration = 0}
        setLang(iteration);
    }

    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="logotype">
                    <img src={imgLogoBlack} alt="logo" />
                    <h3>{data[0].Heading}</h3>
                </div>
                <div className="language" onClick={switchLang}>
                    <p>{languages[lang]}</p>
                    <img src={imgIconArrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
};
