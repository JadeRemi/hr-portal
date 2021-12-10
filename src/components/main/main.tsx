import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Announce } from "../pages/announce";
import { Vacancies } from "../pages/vacancies";
import { Position } from "../pages/position";
import { Testing } from "../pages/testing";
import { Schedule} from "../pages/schedule";
import Modal from "../pages/modal";

type Model = {
    data: {
        [key: string]: any;
    };
}


export function Main({ data }: Model) {
    const [pageData, setPageData] = useState(data);

    const [show, setShow] = useState("");

    const showModal = (modalName: string) => {
        if (modalName.length > 0) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        setShow(modalName);
    };
    const hideModal = () => {
        setShow("");
    };

    return (
        <div className="main">
            <Announce data={pageData.Announce}/>
            <Vacancies data={pageData.Vacancies} openModal={showModal}/>
            <Position data={pageData.Position}/>
            <Testing data={pageData.Testing} openModal={showModal}/>
            <Schedule data={pageData.Schedule}/>
            <Modal data={{Feedback: pageData.Feedback, Sent: pageData.Sent, Wait: pageData.Wait}} show={show} onClose={showModal}/>
        </div>
    );
    //data={[pageData.Feedback, pageData.Sent, pageData.Wait]}
};
