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
    const pageList = ["Announce", "Vacancies", "Position", "Testing", "Schedule"]

    const [pageData, setPageData] = useState(data);
    const [page, setPage] = useState(pageList[0]);

    const [show, setShow] = useState("");

    const switchPage = (nextpage: string) => {
        if (pageList.includes(nextpage)) setPage(nextpage);
    }

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

    useEffect(() => {
        setPageData(data);
      }, [data]);

    return (
        <div className="main">
            {page=="Announce" && <Announce data={pageData.Announce} switchpage={switchPage} />}
            {page=="Vacancies" && <Vacancies data={pageData.Vacancies} openModal={showModal} switchpage={switchPage} />}
            {page=="Position" && <Position data={pageData.Position} switchpage={switchPage} />}
            {page=="Testing" && <Testing data={pageData.Testing} openModal={showModal} switchpage={switchPage} />}
            {page=="Schedule" && <Schedule data={pageData.Schedule} switchpage={switchPage} />}
            <Modal data={{Feedback: pageData.Feedback, Sent: pageData.Sent, Wait: pageData.Wait}} show={show} onClose={showModal}/>
        </div>
    );
};
