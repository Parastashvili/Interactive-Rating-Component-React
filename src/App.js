import "./App.css";
import React, { useState } from "react";
import starIco from "./images/icon-star.svg";
import feedBackIco from "./images/illustration-thank-you.svg";

const thanksForm = {
  thanksText: "Thank you!",
  thanksParagraph:
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!",
};
const rateUs = {
  question: "How did we do?",
  description:
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
  points: [1, 2, 3, 4, 5],
};
let score = undefined;
function App() {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const handleQuestionSubmit = () => {
    if (score == undefined) {
      alert("Please select a rating");
    } else {
      setShowQuestion(false);
      setShowThanks(true);
    }
  };
  return (
    <main className="innerContainer">
      {showQuestion && (
        <GenerateQuestion
          question={rateUs.question}
          dsc={rateUs.description}
          points={rateUs.points}
          onSubmit={handleQuestionSubmit}
        />
      )}
      {showThanks && <FeedBack />}
    </main>
  );
}
function FeedBack() {
  return (
    <div className="feedBack">
      <img className="thanksImg" src={feedBackIco} alt="thank-you" />
      <h5 className="scoreField">You selected {score} out of 5</h5>
      <h2 className="thanksText">{thanksForm.thanksText}</h2>
      <p className="thanksParagraph">{thanksForm.thanksParagraph}</p>
    </div>
  );
}
function GenerateQuestion(props) {
  const { question, dsc, points, onSubmit } = props;
  return (
    <div className="questionContainer">
      <div className="starBox">
        <img className="starImg" src={starIco} alt="star-icon" />
      </div>
      <h1 className="questionText">{question}</h1>
      <p className="questionDsc">{dsc}</p>
      <RateScores points={points} />
      <button className="submitButton" onClick={onSubmit}>
        SUBMIT
      </button>
    </div>
  );
}
function RateScores(props) {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const handlePointSelect = (point) => {
    setSelectedPoint(point);
  };
  return (
    <div className="rateScores">
      {props.points.map((point, index) => (
        <button
          className={`eachScore ${selectedPoint === point ? "selected" : ""}`}
          key={index}
          value={point}
          onClick={() => {
            handlePointSelect(point);
            score = point;
          }}
        >
          {point}
        </button>
      ))}
    </div>
  );
}

export default App;
