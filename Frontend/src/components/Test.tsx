"use client";

import React, { useState } from "react";
import axios from "axios";

import { BiTestTube } from "react-icons/bi";

const Test = ({ link, title, channel }: any) => {
  const params = {
    link,
    title,
    channel,
  };
  console.log(params);
  const handleSummary = async () => {
    const response = await axios.get("http://localhost:4000/mcq", {
      params,
    });
    const mydata = response.data;

    const newdata = mydata
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Convert the cleaned string to a JavaScript array of objects
    const dataArray = JSON.parse(newdata);

    console.log(dataArray);
  };
  return (
    <div>
      <button onClick={handleSummary}>
        <BiTestTube className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Test;
