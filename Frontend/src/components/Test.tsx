"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { BiTestTube } from "react-icons/bi";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import { data } from "../../db/facts";

const Test = ({ link, title, channel }: any) => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]); // Store user answers

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
      console.log(dataArray);

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
        <DialogTitle className="border-black  border-b-[1px]">Quiz</DialogTitle>
        <DialogContent>
          {loading ? (
            <div className="flex justify-center items-center h-[650px] flex-col">
              <Image
                src="/assets/runningFox.gif"
                alt="RunningFox"
                width={500}
                height={500}
              />
              <CircularProgress />

              <div className="my-2">Generating the Test ...</div>
              <div>
                <span className="font-semibold">Fact: </span>
                {data[currentFactIndex]}
              </div>
            </div>
          ) : !quizEnd ? (
            <div className="h-[700px]">
              {questions.length > 0 && (
                <div className="flex flex-row my-5">
                  <div className="w-2/5">
                    <h2 className="font-semibold">Problem Statement</h2>
                    <h3>{questions[currentQuestionIndex].question}</h3>
                  </div>
                  <div className="w-3/5">
                    {questions[currentQuestionIndex].options.map(
                      (option: string, index: number) => (
                        <div
                          key={index}
                          className="border-[#E3E3E3] border-2 rounded-md my-2 p-2"
                        >
                          <label>
                            <input
                              type="radio"
                              name="quiz-option"
                              checked={selectedOption === index}
                              onChange={() => handleOptionChange(index)}
                              className="mx-2"
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
                </div>
              )}
            </div>
          ) : (
            <div className="h-[700px]">
              <h3>Quiz Completed!</h3>
              <p>
                Your score: {score} / {questions.length}
              </p>
              <h4>Review Your Answers:</h4>
              <div>
                {questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <h5>
                      {index + 1}. {question.question}
                    </h5>
                    <p>Your answer: {question.options[userAnswers[index]]}</p>
                    <p>
                      Correct answer: {question.options[question.right_answer]}
                    </p>
                  </div>
                ))}
              </div>
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
