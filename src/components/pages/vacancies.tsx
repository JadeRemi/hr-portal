
interface Model {
    data: {
        [key: string]: any;
    },
    openModal: any;
}

export function Vacancies({ data, openModal }: Model) {
    function listItems (text: object) {
        return Object.values(text).map((item:string, index:number) => <li key={index}>{item}</li>);
    }

    return (
        <div className="main-page vacancies">
            <div className="vacancies-wrapper">
                <div className="vacancies-nav">
                    <div className="vacancies-nav-wrapper">
                        <p>{data.Heading}</p>
                        <ul>
                            {listItems(data.Positions)}
                        </ul>
                    </div>
                    <img src="/img/vacancies-hand.svg" alt="vacancies" />
                </div>
                <div className="vacancies-plan">
                    <div className="vacancies-plan-greeting">
                        <h1>{data.Join}</h1>
                        <p>{data.Plan}</p>
                    </div>
                    <div className="vacancies-steps">
                        <div className="vacancies-column">
                            <img src="/img/icon-eye.svg" alt="icon" />
                            <p><span>1. </span>{data.Step1}</p>
                        </div>
                        <div className="vacancies-column">
                            <img src="/img/icon-note.svg" alt="icon" />
                            <p><span>2. </span>{data.Step2}</p>
                        </div>
                        <div className="vacancies-column">
                            <img src="/img/icon-clock.svg" alt="icon" />
                            <p><span>3. </span>{data.Step3}</p>
                        </div>
                    </div>
                </div>
                <div className="vacancies-ask">
                        <div className="vacancies-ask-info">
                            <h2>{data.Question}</h2>
                            <p>{data.Answer}</p>
                        </div>
                        <button className="button-blue" id="buttonConfirmVacancies" onClick={()=>openModal("Feedback")}><p>{data.Button}</p></button>
                </div>
            </div>
        </div>
    );
};




