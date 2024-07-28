// MultiStepForm.js
"use client";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRecoilState } from "recoil";
import { userInfoState, stepState } from "../Atom/recoilState";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const Step1 = ({ handleNext }: any) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={userInfo.CompanyName}
        onChange={(e) =>
          setUserInfo({ ...userInfo, CompanyName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Father Name"
        value={userInfo.date}
        onChange={(e) => setUserInfo({ ...userInfo, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mother Name"
        value={userInfo.status}
        onChange={(e) => setUserInfo({ ...userInfo, status: e.target.value })}
      />
      <input
        type="text"
        placeholder="School Name"
        value={userInfo.status}
        onChange={(e) => setUserInfo({ ...userInfo, status: e.target.value })}
      />
      <div className="flex justify-end">
        <div
          onClick={handleNext}
          className="text-[#23A689] flex flex-row text-md "
        >
          <span>Next</span> <IoMdArrowRoundForward className="text-xl mx-2" />
        </div>
      </div>
    </div>
  );
};

const Step2 = ({ handleNext, handlePrev }: any) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <div>
      <input
        type="text"
        placeholder="Sister Name"
        value={userInfo.sisterName}
        onChange={(e) =>
          setUserInfo({ ...userInfo, sisterName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Brother Name"
        value={userInfo.brotherName}
        onChange={(e) =>
          setUserInfo({ ...userInfo, brotherName: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <div className="flex justify-between">
        <div
          onClick={handlePrev}
          className="text-[#23A689] flex flex-row text-md "
        >
          <IoMdArrowRoundBack className="text-xl mx-2" />
          <span>Prev</span>
        </div>
        <div
          onClick={handleNext}
          className="text-[#23A689] flex flex-row text-md "
        >
          <span>Next</span> <IoMdArrowRoundForward className="text-xl mx-2" />
        </div>
      </div>
    </div>
  );
};

const FinalStep = ({ handlePrev }: any) => {
  const [userInfo] = useRecoilState(userInfoState);

  return (
    <div>
      <h2>Review your information:</h2>
      {/**<p>Name: {userInfo.name}</p>
      <p>Father Name: {userInfo.fatherName}</p>
      <p>Mother Name: {userInfo.motherName}</p>
      <p>School Name: {userInfo.schoolName}</p> */}
      <p>Sister Name: {userInfo.sisterName}</p>
      <p>Brother Name: {userInfo.brotherName}</p>
      <p>Password: {userInfo.password}</p>
      <div className="">
        <div
          onClick={handlePrev}
          className="text-[#23A689] flex flex-row text-md "
        >
          <IoMdArrowRoundBack className="text-xl mx-2" />
          <span>Prev</span>
        </div>
      </div>
    </div>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useRecoilState(stepState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const handleNext = () => {
    setStep(step + 1);
    console.log("Hello");
    alert("Just dont be good be great be pro");

    console.log(userInfo);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="mx-60 h-[600px]">
      {step === 1 && <FirstStep handleNext={handleNext} />}
      {step === 2 && (
        <SecondStep handleNext={handleNext} handlePrev={handlePrev} />
      )}
      {step === 3 && <FinalStep handlePrev={handlePrev} />}
    </div>
  );
};

export default MultiStepForm;
