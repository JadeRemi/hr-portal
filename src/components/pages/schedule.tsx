import { useState } from 'react';
import { Calendar } from '../screens/calendar.js';
import { Dropdown } from '../screens/dropdown';
import contactApi from "../functions/api";

interface Model {
    data: {
        [key: string]: string;
    },
    switchpage: any;
}

export function Schedule({ data, switchpage }: Model) {

    const timeSlots = [10, 12, 14, 16];
    const [form, setForm] = useState({});

    const collectSchedule = () => {
        if ("Name" in form && "Time" in form) {
            contactApi({"Context": "Schedule", ...form});
            switchpage("Announce"); 
        }
    }

    const patchForm = (param: string, value: string) => {
        setForm(form => {
            let result:any = Object.assign({...form}, {[`${param}`]: value});
            return result;
          })
    }

    const selectTime = (date: any) => {
        patchForm("Time", date.toString());
    }

    return (
        <div className="main-page schedule">
            <div>
                <h1>{data.Heading}</h1>
                <div className="schedule-container">
                    <div className="schedule-calendar">

                        <label className="schedule-input">{data.SelectDay}</label>
                        <Calendar time={selectTime}/>
                        <div className="schedule-interactive">
                            <div className="schedule-interactive-item-1">
                                <label className="schedule-input">{data.SelectTime}</label>
                                <form className="schedule-timepick">
                                    {timeSlots.map((item, i) => { 
                                        return (
                                            <div className="timepick-item">
                                                <input type="radio" id={"timepick-"+item} name="timepick" />
                                                <label htmlFor={"timepick-"+item}>{`${data.From} ${item} ${data.Until} ${item+2}`}</label>
                                            </div>
                                        )
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
                        <input placeholder={data.InputNamePlaceholder} id="inputScheduleName" type="text" onChange={(e)=>patchForm("Name", e.target.value)} />
                        <label className="schedule-input">{data.InputMessengersLabel} <strong>Skype</strong>:</label>
                        <input placeholder={data.InputSkypePlaceholder} id="inputScheduleSkype" type="text" onChange={(e)=>patchForm("Skype", e.target.value)} />
                        <label className="schedule-input">{data.InputMessengersLabel} <strong>Zoom</strong>:</label>
                        <input placeholder={data.InputZoomPlaceholder} id="inputScheduleZoom" type="text" onChange={(e)=>patchForm("Zoom", e.target.value)} />
                        <label className="schedule-input">{data.InputOthersLabel}</label>
                        <input placeholder={data.InputOthersPlaceholder} id="inputScheduleOthers" type="text" onChange={(e)=>patchForm("Other", e.target.value)} />    
                    </div>
                </div>
                <div className="button-block">
				    <button className="button-blue" id="buttonConfirmDate" onClick={()=>{collectSchedule()}}><p>{data.Button}</p></button>
                </div>
            </div>
        </div>
    );
};

