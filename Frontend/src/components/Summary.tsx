"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";

import { RiArticleFill } from "react-icons/ri";
import DOMPurify from "dompurify";


interface HtmlRendererProps {
  htmlString: string;
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ htmlString }) => {
  const sanitizedHtmlString = DOMPurify.sanitize(htmlString);
  // console.log(sanitizedHtmlString);  // Check the console for the output

  return (
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlString }} />
  );
};

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
      const newdata = response.data.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace("*", "");
      // console.log(newdata)
      setSummaryData(newdata);


    } catch (error) {
      console.error("Error fetching summary:", error);
    } finally {
      setLoading(false); // Set loading state to false after data is fetched
    }
  };

  const handleSave = () => {

  }
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
        <DialogTitle className="border-b-4 shadow-sm">
          <div className="flex justify-between">
            <div className="font-bold text-2xl mt-3 ml-1">
              Summary
            </div>
            <div className="flex flex-row mt-2">
            <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleSave} >Save</button>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleClose}>Close</button>
            </div>
          </div>
        </DialogTitle>
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
              <div className="my-2">Generating the Summary ...</div>
            </div>
          ) : (
            <div className="min-w-full p-6 pt-8 min-h-[500px] border-4 border-t-0">
              <HtmlRenderer htmlString={summaryData} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Summary;
