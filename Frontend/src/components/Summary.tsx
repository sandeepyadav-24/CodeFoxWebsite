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
      console.log(newdata)
      setSummaryData(newdata);


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
            <div><b>Summary</b> </div>
            <div className="flex flex-row">
              <div className="mx-2 bg-black text-white">Save</div>
              <div className="mx-2 bg-black text-white">Close</div>
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
            <div className="p-8">
              <HtmlRenderer htmlString={summaryData} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Summary;
