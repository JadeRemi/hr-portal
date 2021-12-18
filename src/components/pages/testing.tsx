import React, { useEffect, useState } from "react";
import imgIconClip from "../../assets/images/icon-clip.svg";
import imgIconChevron from "../../assets/images/icon-chevron.svg";
import contactApi from "../functions/api";

interface Model {
    data: {
        [key: string]: string;
    },
    openModal: any,
    switchpage: any;
}

export function Testing({ data, openModal, switchpage }: Model) {

    const initialCvs = [
        {id: "Frontend", name: "Фронтенд"},
        {id: "DataAnalyst", name: "Аналитик"},
        {id: "CDeveloper", name: "Разработчик С"}
    ]

    // STYLE: 0 = Initial, 1 = File form
    const [style, setStyle] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const [dropoption, setDropoption] = useState("");
    const container = React.useRef<HTMLUListElement>(null);
    const [selectedValue, setSelectedValue] = useState("");
    const [userphone, setUserphone] = useState("");
    const [cvs, setCvs] = useState([...initialCvs]);
    const [form, setForm] = useState({});

    const collectTestingOne = () => {
        if ("Email" in form) {
            contactApi({"Context": "Testing", ...form});
            openModal("Sent");
            setStyle(1); 
        }
    }
    const collectTestingTwo = () => {
        if ("Name" in form && "Email" in form && "Phone" in form) {
            contactApi({"Context": "Testing", ...form});
            openModal("Wait");
            setStyle(0);
            switchpage("Schedule");
        }

    }

    const patchForm = (param: string, value: string) => {
        setForm(form => {
            let result:any = Object.assign({...form}, {[`${param}`]: value});
            return result;
          })
    }

// dropdown //
    useEffect(() => {
        function mousedownEvent(event: any) {
          if (container.current && !container.current.contains(event.target)) {
            setDropdown(false);
          }
        }
        document.addEventListener('mousedown', mousedownEvent)
        return () => {
          document.removeEventListener('mousedown', mousedownEvent)
        }
    }, [])
    
    function toggleOptions(e?: any):void {
        if (dropdown == false) {
            setDropdown(true);
        }
    }
    function selectOption(value: string):void {
        setDropoption(value);
        setSelectedValue(value);
        setDropdown(false);
    }
// dropdown / //

    const changephone = (event: any) => {
        if (event.target.value.length <= 18) {
            let val = event.target.value;
            val = val.replace(/ |\(|\)|\+/gm, '')
            if (val.length > 1) {
                val = val.slice(1, val.length)
                };
            let num = (val.length > 3
                ? `+7 (${val.substring(0, 3)}) ${val.substring(3, 6)} ${val.substring(6, 8)} ${val.substring(8, val.length)}`
                : `+7 (${val.substring(0, 3)}`)
            num = num.trim();
            if (num.length > userphone.length && num != "+7 (7") {
                setUserphone(num)
            } else {
                    setUserphone(userphone.slice(0, userphone.length-1).trim())
            }
        }
    }

    return (
        <div className="main-page testing">
            
            {(!style) ? (

                // Initial style
                <div className="main-page-wrapper">
                    <h1>{data.Heading}</h1>
                    <div className="testing-screen-1">
                        <p className="desc-label">{data.Description}</p>
                        <p className="testing-text">{data.Text}</p>
                        <label htmlFor="inputEmailTest" className="testing-email">{data.InputEmailLabel}<span>*</span></label>
                        <input placeholder={data.InputEmailPlaceholder} id="inputEmailTest" type="text" onChange={(e)=>patchForm("Email", e.target.value)}/>
                    </div>
                    <div className="button-block">
                        <button className="button-blue" id="buttonConfirmTest"  onClick={()=>{collectTestingOne()}}><p>{data.Button}</p></button>
                        <label className="desc-label">{data.ButtonLabel}</label>
                    </div>
                </div>

                 ) : (

                // Form style
                <div className="main-page-wrapper">
                    <h1>{data.Heading}</h1>
                    <div className="testing-columns">
                        <div className="testing-presentation">
                            <p className="desc-label">{data.Description}</p>
                            <p className="testing-text">{data.Text}</p>
                        </div>
                        <div className="testing-form">
                            <form>
                                <div className="testing-form-item">
                                    <label className="testing-input">{data.InputGreetingLabel}<span>*</span></label>
                                    <input placeholder={data.InputGreetingPlaceholder} id="inputEmailName" type="text" onChange={(e)=>patchForm("Name", e.target.value)}/>
                                </div>
                                <div className="testing-form-item testing-form-email">
                                    <label className="testing-input">{data.InputEmailLabel}<span>*</span></label>
                                    <input placeholder={data.InputEmailPlaceholder} id="inputEmailTest" type="text" onChange={(e)=>patchForm("Email", e.target.value)}/>
                                </div>
                                <div className="testing-form-item testing-form-phone">
                                    <label className="testing-input">{data.InputPhoneLabel}<span>*</span></label>
                                    <input placeholder={data.InputPhonePlaceholder} id="inputEmailPhone" type="text" value={userphone} onChange={(e) => {changephone(e); patchForm("Phone", e.target.value)}} />
                                </div>
                                <div className="testing-form-item testing-form-cv">
                                    <label className="testing-input">{data.InputCvLabel}<span>*</span></label>
                                    <div className="dropdown-container">
                                        <input name="select_value" type="hidden" id="selectedValue" value={selectedValue} onChange={(e)=>patchForm("Cv", e.target.value)}/>
                                        <div className="display-value" id="displayValue" onClick={toggleOptions}>
                                            <p className="value-text" id="valueText">{dropoption?dropoption:data.InputCvPlaceholder}</p>
                                            <img className="footer-logo" src={imgIconChevron} alt="arrow" />
                                        </div>
                                        <ul tabIndex={0} className={"select-container " + (!!dropdown ? "" : "hidden") } id="selectContainer" ref={container}>
                                            {cvs.map((item, i) => {
                                                return <li className="select-option" key={item.id} onClick={()=> selectOption(item.name)}>{item.name}</li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="testing-form-item testing-form-file">
                                    <label htmlFor="inputEmailFile" className="testing-file upload-file">
                                        <img src={imgIconClip} alt="add" />
                                        <p>{data.ButtonUpload}</p>
                                        <input placeholder={data.InputPlaceholder} id="inputEmailFile" type="file" />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="button-block">
                        <button className="button-blue" id="buttonConfirmTest"  onClick={()=>{collectTestingTwo();}}><p>{data.ButtonPost}</p></button>
                        <label className="desc-label desc-label-wide">{data.ButtonLabelPost}</label>
                    </div>
                </div>
                    
                 )
            }
            
        </div>
    );
};
