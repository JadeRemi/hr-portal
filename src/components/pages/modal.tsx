import { Feedback } from "../screens/feedback";
import { Sent } from "../screens/sent";
import { Wait } from "../screens/wait";

import PropTypes from "prop-types"; 
import ReactDOM, { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import React, { Component } from "react";

interface Model {
    data: {
        [key: string]: string;
    }[];
}


export default function Modal({data, show, onClose}:any) {
    return (
      <div className={"modal-back "+(!!show?"":"hidden")} onClick={(()=>onClose(""))}>
        <ModalType
            data={data}
            label={show}
            onClose={onClose}
        />
      </div>
    );
  }

interface selectModal {
    data: {
        [key: string]: {
            [key: string]: string;
        };
    },
    label: string,
    onClose: any;
}

const chooseModal = ([label, data, onClose]: any) => {
    switch (label) {
        case "Feedback": {
            return <Feedback data={data.Feedback} onClose={onClose}/>
        }
        case "Sent": {
            return <Sent data={data.Sent} onClose={onClose}/>
        }
        case "Wait": {
            return <Wait data={data.Wait} onClose={onClose}/>
        }
        default: {
            return <div></div>
        }
    }
}
function ModalType({data, label, onClose}: selectModal) {
    const ModalType = label;
    const handleClickStop = (e: any) => {
        e.stopPropagation();
    }
   
    return (
      <div className="modal-display" onClick={handleClickStop}>
          {chooseModal([label, data, onClose])}
      </div>
    );
  }




//export const Modal: React.FC<Component> = data => {
//
//    return (
//        <div className="modal-back">
//            <Feedback data={data[0]} />
//            <Sent data={data[1]} />
//            <Wait data={data[2]} />
//        </div>
//    );
//};
