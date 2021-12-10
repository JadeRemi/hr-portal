import React, { useEffect, useState } from "react";
import imgIconChevron from "../../assets/images/icon-chevron.svg";

interface Model {
    placeholder: string|null;
    data: {
        id: string|number;
        name: string|number;
    }[];
}

export function Dropdown({ placeholder, data }: Model) {

    const [dropdown, setDropdown] = useState(false);
    const [dropoption, setDropoption] = useState("");
    const container = React.useRef<HTMLUListElement>(null);
    const [selectedValue, setSelectedValue] = useState("");
    const [options, setOptions] = useState([...data]);
    const placeholderName = !!placeholder ? placeholder : data[0].name;

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

    return (

        <div className="dropdown-container">
            <input name="select_value" type="hidden" id="selectedValue" value={selectedValue} />
            <div className="display-value" id="displayValue" onClick={toggleOptions}>
                <p className="value-text" id="valueText">{dropoption?dropoption:placeholderName}</p>
                <img className="footer-logo" src={imgIconChevron} alt="arrow" />
            </div>
            <ul tabIndex={0} className={"select-container " + (!!dropdown ? "" : "hidden") } id="selectContainer" ref={container}>
                {options.map((item, i) => {
                    return <li className="select-option" key={item.id} onClick={()=> selectOption(item.name.toString())}>{item.name}</li>
                })}
            </ul>
        </div>

    )
}