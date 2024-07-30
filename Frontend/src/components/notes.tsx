"use client";



import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FaNoteSticky } from "react-icons/fa6";
import axios from "axios";

const notes = ({title}: string|any) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("")
  console.log(data)

  const handleSave = async () => {
    try {
      const result = await axios.post('http://localhost:4000/api/notes', {
          title,
          data
      });
      console.log(result)
  } catch (error) {
      console.error('Error making POST request:', error);
  }
  }

  const params = {
    title
  }
  const handleGetData = async () => {
    try {
      setOpen(true);
      const result = await axios.get('http://localhost:4000/api/notes', {
          params
      });
      setData(result.data.data)
      console.log(result)
  } catch (error) {
      console.error('Error making POST request:', error);
  }
  }
  return (
    <div>
      <button onClick={handleGetData}>
        <FaNoteSticky className="w-8 h-8 text-orange-600" />
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle className="border-b-2  mb-4">
          <div className="flex justify-between">
            <div className="font-bold text-2xl mt-3 ml-1">
              Add Notes
            </div>
            <div className="flex flex-row mt-2">
              <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleSave}>Save</button>
              <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <textarea
            className="min-w-full p-2 min-h-[500px] border-2 focus:outline-none"
            placeholder="Drop your notes, updates, and bright ideas here!"
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></textarea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default notes;
