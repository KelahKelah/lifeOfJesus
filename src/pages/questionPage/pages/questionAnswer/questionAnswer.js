import React from "react";
import { Tab } from "../../../../components/Tab/Tab";
import { FaRegHandshake, FaRegComment } from "react-icons/fa";
import { BsBoxArrowInDownLeft, BsChat, BsShare } from "react-icons/bs";
import { HiShare, HiOutlineDotsVertical } from "react-icons/hi";
import "./questionAnswer.css";
import { Button } from "../../../../components";
import { TextArea } from "../../../../components/textArea/textArea";
import { Ask, Dropper, LetterA, Move, Write } from "../../../../assets/svgs";

export const QuestionAnswer = ({ pic }) => {
  const tabItems = [
    { id: 1, label: "Newest" },
    { id: 2, label: "Oldest" },
    { id: 3, label: "Active" },
  ];
  return (
    <div>
      <div className="qa-header">
        <h4>Are we really saved by the blood?</h4>
        <ul className="qa-details">
          <li className="qa-name-div">
            {pic ? (
              <div className="qa-img">
                <img src={pic} alt="qa" />{" "}
              </div>
            ) : (
              <div className="qa-no-pic"></div>
            )}{" "}
            <p className="qa-name">Precious</p>
          </li>
          <li>asked 1 min ago</li>
        </ul>
      </div>
      <div className="qa-question">
        <h4>Question</h4>
        <p>
          I have also asked myself this question but i am yet to get an answer.
          as a christain are we actually saved by the blood?
        </p>
      </div>
      <Tab questions="1" label="Answers" tabItems={tabItems} />
      <div className="qa-answers">
        {" "}
        <ul className="qa-details">
          <li className="qa-name-div">
            {pic ? (
              <div className="qa-img">
                <img src={pic} alt="qa" />{" "}
              </div>
            ) : (
              <div className="qa-no-pic"></div>
            )}{" "}
            <p className="qa-name">Precious</p>
          </li>
        </ul>
        <p className="qa-ans">
          Are you in a mental or physical place and you would rather be
          somewhere else? If so, I totally understand. I totally get it. Yet, we
          have to continue going forward no matter where we find ourselves. We
          have to push through, because we can achieve what we want regardless
          of the people, places, and things around us.{" "}
        </p>
        <ul className="qa-reactions">
          <li className="list-div">
            <FaRegHandshake size={18} />
            <p>324</p>
          </li>
          <li className="list-div">
            <BsChat size={14} /> <p>54</p>
          </li>
          <li className="list-div">
            <BsShare size={14} /> <p>12</p>
          </li>
          <li className="list-div">
            <BsBoxArrowInDownLeft size={16} />
          </li>
          <li className="list-div">
            <HiOutlineDotsVertical />
          </li>
        </ul>
      </div>
      <div className="btn-area">
        <Button buttonName="Add Comment" className="qa-btn" />
        <div className="breakline"></div>
      </div>
      <div className="ask-question-textarea">
        <label>Add Answer</label>
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
          placeholder="Type in answer here..."
          aria-label="With textarea"
        ></textarea>
      </div>
      <div className="qa-form-btn">
        <Button
          buttonName="Post Answer"
          icon={Ask}
          className="question-page-btn"
        />
      </div>
    </div>
  );
};
