import React from "react";
import { ModalIcon } from "../../assets/svgs";
import { Button } from "../button/button";
import "./questionModal.css";

export const QuestionModal = ({ modalText, btnAction }) => {
  return (
    <div className="question-modal">
      <div className="modal-display">
        <img src={ModalIcon} alt="modal icon" />
        <p>{modalText}</p>
      </div>
      <div className="btn-div">
        <Button buttonName="Close" className="modal-btn" onClick={btnAction} />
      </div>
    </div>
  );
};
