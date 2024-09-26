import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Dropper, LetterA, Move, Write } from "../../../../assets/svgs";
import { Button } from "../../../../components";
import { QuestionModal } from "../../../../components/questionModal/questionModal";
import { TextArea } from "../../../../components/textArea/textArea";
import { TextField } from "../../../../components/textField/textField";
import "./askQuestion.css";

export const AskQuestion = ({ pic }) => {
  const { push } = useHistory();
  const [modalState, setModalState] = useState(false);

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    setModalState(true);
  };

  const handleRedirection = (e) => {
    e.preventDefault();
    push("/question_answer");
  };

  return (
    <div className="ask-question">
      <form className="ask-question-form">
        <h5>Full Name</h5>
        <p>Customize your account name</p>
        <div className="ask-question-input">
          <TextField
            placeholder="First Name"
            type="text"
            className="text-field"
          />
          <TextField placeholder="Last Name" type="text" />
        </div>
        <h5>Email Address</h5>
        <p>Input your desired email address</p>
        <div className="ask-question-email">
          <TextField placeholder="Email Address" type="email" />
        </div>
        <div className="ask-question-textarea">
          <label>Type in Question here</label>
          <p>Do you have a question? type your questions here...</p>
          <ul className="textarea-cap">
            <li>
              <img src={Move} alt="move" />
            </li>
            <li>
              <img src={Dropper} alt="eye dropper" />
            </li>
            <li>
              <img src={Write} alt="write" />
            </li>
            <li>
              <img src={LetterA} alt="edit question" />
            </li>
          </ul>
          <textarea
            rows="12"
            className="textarea"
            placeholder="Enter Question here..."
            aria-label="With textarea"
          ></textarea>
        </div>
        <Button
          type="submit"
          buttonName="Submit"
          className="ask-question-btn"
          onClick={(e) => handleSubmitQuestion(e)}
        />
      </form>

      {modalState ? (
        <QuestionModal
          modalText="
        Your question has been submitted sucessfully. The team would answer
        your question in a bit, please hold on...."
          btnAction={(e) => handleRedirection(e)}
        />
      ) : (
        ""
      )}
    </div>
  );
};
