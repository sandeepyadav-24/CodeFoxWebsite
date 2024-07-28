"use client";

import React, { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { BiTestTube } from "react-icons/bi";
import { ClipLoader } from "react-spinners";

const Test = ({ link, title, channel }: any) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const params = {
    link,
    title,
    channel,
  };

  const handleOpen = async () => {
    setLoading(true);
    setOpen(true);
    try {
      const response = await axios.get("http://localhost:4000/mcq", {
        params,
      });
      const mydata = response.data;
      const newdata = mydata
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const dataArray = JSON.parse(newdata);
      //console.log(dataArray);

      setQuestions(dataArray);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizEnd(false);
  };

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].right_answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizEnd(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizEnd(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>
        <BiTestTube className="w-8 h-8" />
      </button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Quiz</DialogTitle>
        <DialogContent>
          {loading ? (
            <div className="flex justify-center items-center h-[700px]">
              <ClipLoader size={50} color={"#123abc"} loading={loading} />
            </div>
          ) : !quizEnd ? (
            <div className="h-[700px]">
              {questions.length > 0 && (
                <div>
                  <h3>{questions[currentQuestionIndex].question}</h3>
                  {questions[currentQuestionIndex].options.map(
                    (option: string, index: number) => (
                      <div key={index}>
                        <label>
                          <input
                            type="radio"
                            name="quiz-option"
                            checked={selectedOption === index}
                            onChange={() => handleOptionChange(index)}
                          />
                          {option}
                        </label>
                      </div>
                    )
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextQuestion}
                    disabled={selectedOption === null}
                  >
                    {currentQuestionIndex < questions.length - 1
                      ? "Next"
                      : "Submit"}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="h-[700px]">
              <h3>Quiz Completed!</h3>
              <p>
                Your score: {score} / {questions.length}
              </p>
              <Button variant="contained" color="primary" onClick={handleRetry}>
                Retry
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Test;
