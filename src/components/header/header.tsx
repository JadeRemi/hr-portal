import { useState, MouseEvent } from 'react';
import imgLogoBlack from "../../assets/images/itexpert-logo-black.svg";
import imgIconArrow from "../../assets/images/icon-arrow.svg";

interface Model{
    language: any;
    data: any;
    langs: string[];
}

export function Header({ data, langs, language }: Model) {
    const languages: string[] = [...langs];
    const [lang, setLang] = useState(languages[1]);

    function switchLang(event: MouseEvent) {
        let iteration: number = languages.indexOf(lang)+1 | 0;
        if (iteration >= languages.length) {iteration = 0}
        setLang(languages[iteration]);
        language(lang);
    }

    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="logotype">
                    <img src={imgLogoBlack} alt="logo" />
                    <h3>{data.Heading}</h3>
                </div>
                <div className="language" onClick={switchLang}>
                    <p>{lang}</p>
                    <img src={imgIconArrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
};
