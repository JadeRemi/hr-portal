//import { useState } from 'react';
import { Calendar } from '../screens/calendar.js';
import { Dropdown } from '../screens/dropdown';

interface Model {
    data: {
        [key: string]: string;
    };
}

export function Schedule({ data }: Model) {

    const timeSlots = [10, 12, 14, 16];

    return (
        <div className="main-page schedule">
            <div>
                <h1>{data.Heading}</h1>
                <div className="schedule-container">
                    <div className="schedule-calendar">

                        <label className="schedule-input">{data.SelectDay}</label>
                        <Calendar />
                        <div className="schedule-interactive">
                            <div className="schedule-interactive-item-1">
                                <label className="schedule-input">{data.SelectTime}</label>
                                <form className="schedule-timepick">
                                    {timeSlots.map((item, i) => { 
                                        return <label htmlFor={"timepick-"+item}>{`${data.From} ${item} ${data.Until} ${item+2}`}<input type="radio" id={"timepick-"+item} name="timepick" /></label>
                                    })}
                                </form>
                            </div>
                            <div className="schedule-interactive-item-2">
                                <label className="schedule-input">{data.SelectPersonal}</label>
                                <div className="schedule-timeoffer">
                                    <Dropdown data={timeSlots.map((item, i)=> {
                                        return {id: i, name: `${data.From} ${item}:00`}
                                        })} placeholder={null} />
                                    <Dropdown data={timeSlots.map((item, i)=> {
                                        return {id: i, name: `${data.Until} ${item+2}:00`}
                                        })} placeholder={null} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-form">
                        <label className="schedule-input">{data.InputNameLabel}<span>*</span></label>
                        <input placeholder={data.InputNamePlaceholder} id="inputScheduleName" type="text" />
                        <label className="schedule-input">{data.InputMessengersLabel} <strong>Skype</strong>:</label>
                        <input placeholder={data.InputSkypePlaceholder} id="inputScheduleSkype" type="text" />
                        <label className="schedule-input">{data.InputMessengersLabel} <strong>Zoom</strong>:</label>
                        <input placeholder={data.InputZoomPlaceholder} id="inputScheduleZoom" type="text" />
                        <label className="schedule-input">{data.InputOthersLabel}</label>
                        <input placeholder={data.InputOthersPlaceholder} id="inputScheduleOthers" type="text" />    
                    </div>
                </div>
                <div className="button-block">
				    <button className="button-blue" id="buttonConfirmDate"><p>{data.Button}</p></button>
                </div>
            </div>
        </div>
    );
};

