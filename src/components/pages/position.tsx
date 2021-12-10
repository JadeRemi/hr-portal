import { isArrayLiteralExpression } from "typescript";

interface Model {
    data: {
        [key: string]: string;
    };
}

export function Position({ data }: Model) {

    function listItems (text: string) {
        return text.split('; ').map((item:string, index:number, array: string[]) => <li key={index}>{item}{(index < array.length-1)?";":""}</li>);
    }

    return (
        <div className="main-page position">
            <div className="position-subheader">
                <div className="position-subheader-wrapper">
                    <h1>{data.Heading}</h1>
                    <div className="position-subheader-table">
                        <div className="position-subheader-column">
                            <p>{data.IncomeLabel}</p>
                            <h1>{data.IncomeText}</h1>
                        </div>
                        <div className="position-subheader-column">
                            <p>{data.ExperienceLabel}</p>
                            <h1>{data.ExperienceText}</h1>
                        </div>
                        <div className="position-subheader-column">
                            <p>{data.ScheduleLabel}</p>
                            <h1>{data.ScheduleText}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-body">
                <div className="position-body-wrapper">
                    <div className="position-about">
                        <p>{data.TaskLabel}</p>
                        <ul>
                            {listItems(data.TaskList)}
                        </ul>
                        <p>{data.ExpectationsLabel}</p>
                        <ul>
                            {listItems(data.ExpectationsList)}
                        </ul>
                        <p>{data.SpecialsLabel}</p>
                        <ul className="position-specials">
                            {listItems(data.SpecialsList)}
                        </ul>
                    </div>
                    <div className="position-banner">
                        <p>{data.BannerLabel}</p>
                        <ul>
                            {listItems(data.BannerList)}
                        </ul>
                        <img src="/img/vacancies-hand.svg" alt="vacancies" />
                    </div>
                </div>
            </div>
            <div className="button-block">
                <button className="button-blue" id="buttonConfirmScreening"><p>{data.Button}</p></button>
                <label className="desc-label">{data.ButtonLabel}</label>
            </div>
        </div>
    );
};
