import React, { useState } from 'react';
import classnames from 'classnames';
import imgIconArrow from "../../assets/images/icon-arrow.svg";

const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

const areEqual = (a, b) => {
    return (!a || !b) ? false : (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

const isLeapYear = (year) => {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

const getDaysInMonth = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];
    
    if (isLeapYear(year) && month === 1) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
}

const getDayOfWeek = (date) => {
    return WEEK_DAYS_FROM_MONDAY[date.getDay()];
}

const getMonthData = (year, month) => {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];
        
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }
    return result;
}


export function Calendar () {

    const [date, setDate] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    //const [selectedDate, setSelectedDate] = useState(null);
    const [yearSelect, setYearSelect] = useState(null);
    const [monthSelect, setMonthSelect] = useState(null);
 

    const handlePrevMonthButtonClick = () => {
        const newdate = new Date(date.getFullYear(), date.getMonth() - 1);
        setDate(newdate);
    };

    const handleNextMonthButtonClick = () => {
        const newdate = new Date(date.getFullYear(), date.getMonth() + 1);
        setDate(newdate);
    };

    const handleSelectChange = () => {
        const year = yearSelect.value;
        const month = monthSelect.value;
        const newdate = new Date(year, month);
        setDate(newdate);
    };

    const handleDayClick = newdate => {
        setDate(newdate);
    };

    const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс']
    const monthData = getMonthData(date.getFullYear(), date.getMonth());

//<button onClick={handlePrevMonthButtonClick}>{'<'}</button>
//<button onClick={handleNextMonthButtonClick}>{'>'}</button>
    return (
        <div className="calendar">
            <p className="hidden">{date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}</p>
            <header>
                
                <img className="arrow-select-left" src={imgIconArrow} alt="arrow" onClick={handlePrevMonthButtonClick} />
                <h3>{monthNames[date.getMonth()]}</h3>
                
                <select
                    ref={element => setMonthSelect(element)}
                    value={date.getMonth()}
                    onChange={handleSelectChange}
                    className="hidden"
                >
                    {monthNames.map((name, index) =>
                        <option key={name} value={index}>{name}</option>
                    )}
                </select>

                <select
                    ref={element => setYearSelect(element)}
                    value={date.getFullYear()}
                    onChange={handleSelectChange}
                    className="hidden"
                >
                    {years.map(year =>
                        <option key={year} value={year}>{year}</option> 
                    )}
                    </select>
                <img className="arrow-select-right" src={imgIconArrow} alt="arrow" onClick={handleNextMonthButtonClick} />
                
            </header>
            <table>
                <thead>
                    <tr>
                        {weekDayNames.map(name =>
                            <th key={name}>{name}</th>    
                        )}
                    </tr>
                </thead>
                <tbody>
                    {monthData.map((week, index) =>
                        <tr key={index} className="week">
                            {week.map((newdate, index) => newdate ?
                                <td
                                    key={index}
                                    className={classnames('day', {
                                        'today': areEqual(newdate, currentDate),
                                        'selected': areEqual(newdate, date)
                                    })}
                                    onClick={() => handleDayClick(newdate)}
                                >{newdate.getDate()}</td>
                                :
                                <td key={index} />
                            )}
                        </tr> 
                    )}
                </tbody>
            </table>
        </div>
    );
}
