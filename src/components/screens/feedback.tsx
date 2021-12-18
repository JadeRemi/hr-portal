import { useState } from "react";
import contactApi from "../functions/api";

interface Model {
    data: {
        [key: string]: string;
    },
    onClose: any;
}

export function Feedback({ data, onClose }: Model) {
    const [form, setForm] = useState({});

    const collectTesting = () => {
        if ("Name" in form && "Email" in form && "Question" in form) {
            contactApi({"Context": "Feedback", ...form});
            onClose("");
        }
    }

    const patchForm = (param: string, value: string) => {
        setForm(form => {
            let result:any = Object.assign({...form}, {[`${param}`]: value});
            return result;
          })
    }

    return (
        <div className="feedback">
            <h1>{data.Heading}</h1>
            <label htmlFor="inputNameFeedback">{data.NameLabel}<span>*</span></label>
            <input placeholder={data.NamePlaceholder} id="inputNameFeedback" type="text" onChange={(e)=>patchForm("Name", e.target.value)} required/>
            <label htmlFor="inputEmailFeedback">{data.EmailLabel}<span>*</span></label>
            <input placeholder={data.EmailPlaceholder} id="inputEmailFeedback" type="text" onChange={(e)=>patchForm("Email", e.target.value)} required/>
            <label htmlFor="inputQuestionFeedback">{data.QuestionLabel}<span>*</span></label>
            <textarea placeholder={data.QuestionPlaceholder} id="inputQuestionFeedback" onChange={(e)=>patchForm("Question", e.target.value)} required/>
            <div className="button-block">
                <button className="button-blue" id="buttonConfirmTest" onClick={()=>{collectTesting()}}><p>{data.Button}</p></button>
                <label htmlFor="buttonConfirmTest" className="button-label" ><span>*</span>{data.ButtonLabel}</label>
            </div>
        </div>
    );
};
