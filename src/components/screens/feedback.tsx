
interface Model {
    data: {
        [key: string]: string;
    },
    onClose: any;
}

export function Feedback({ data, onClose }: Model) {
    return (
        <div className="feedback">
            <h1>{data.Heading}</h1>
            <label htmlFor="inputNameFeedback">{data.NameLabel}<span>*</span></label>
            <input placeholder={data.NamePlaceholder} id="inputNameFeedback" type="text" required/>
            <label htmlFor="inputEmailFeedback">{data.EmailLabel}<span>*</span></label>
            <input placeholder={data.EmailPlaceholder} id="inputEmailFeedback" type="text" required/>
            <label htmlFor="inputQuestionFeedback">{data.QuestionLabel}<span>*</span></label>
            <textarea placeholder={data.QuestionPlaceholder} id="inputQuestionFeedback" required/>
            <div className="button-block">
                <button className="button-blue" id="buttonConfirmTest" onClick={(()=>onClose(""))}><p>{data.Button}</p></button>
                <label htmlFor="buttonConfirmTest" className="button-label" ><span>*</span>{data.ButtonLabel}</label>
            </div>
        </div>
    );
};
