"use client";

import React, { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";

import { RiArticleFill } from "react-icons/ri";

const Summary = ({ link, title, channel }: any) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [summaryData, setSummaryData] = useState("");
  const params = {
    link,
    title,
    channel,
  };
  //console.log(params);
  const handleSummary = async () => {
    setOpen(true); // Open the modal immediately
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000", {
        params,
      });
      setSummaryData(response.data);
    } catch (error) {
      console.error("Error fetching summary:", error);
    } finally {
      setLoading(false); // Set loading state to false after data is fetched
    }
  };
  const handleClose = () => {
    setOpen(false);
    setSummaryData("");
  };
  return (
    <div>
      <button onClick={handleSummary}>
        <RiArticleFill className="w-8 h-8" />
      </button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <div className="flex justify-between">
            <div>Summary </div>
            <div className="flex flex-row">
              <div className="mx-2 bg-black text-white">Save</div>
              <div className="mx-2 bg-black text-white">Close</div>
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          {loading ? (
            <div className="flex justify-center items-center h-[650px] flex-col">
              <CircularProgress />
              <div className="my-2">Generating the Summary ...</div>
            </div>
          ) : (
            <div>{summaryData}</div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Summary;
