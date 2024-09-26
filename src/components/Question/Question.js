import React from "react";
import "./Question.css";

export const Question = ({
  header = "",
  text = "",
  pic,
  name = "",
  time = "",
}) => {
  return (
    <div className="question">
      <div className="profile">
        {pic ? (
          <div className="profile-img">
            <img src={pic} alt="user" />{" "}
          </div>
        ) : (
          <div className="profile-no-pic"></div>
        )}{" "}
        <p className="profile-name">{name}</p>
      </div>
      <h4>{header}</h4>
      <p className="question-div-text">{text}</p>
      <div className="question-insights">
        <ul className="question-list">
          <li>0 votes</li>
          <li>0 answers</li>
          <li>5 views</li>
        </ul>
        <ul className="user-details">
          <li className="user-name-div">
            {pic ? (
              <div className="user-img">
                <img src={pic} alt="user" />{" "}
              </div>
            ) : (
              <div className="no-pic"></div>
            )}{" "}
            <p className="user-name">{name}</p>
          </li>
          <li className="time">{time}</li>
        </ul>
      </div>
    </div>
  );
};
