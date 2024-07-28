import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRecoilState } from "recoil";
import { userInfoState, stepState } from "../Atom/recoilState";
import SecondStepChoice from "./SecondStepChoice";

const SecondStep = ({ handleNext, handlePrev }: any) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const roles = userInfo.roles;

  return (
    <div>
      <div>
        <ul className="flex flex-row justify-between mx-6">
          {roles.map((role, index) => {
            return (
              <li key={index} className="mx-2 font-semibold text-lg">
                {role}
              </li>
            );
          })}
        </ul>
      </div>
      <SecondStepChoice />

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

export default SecondStep;
