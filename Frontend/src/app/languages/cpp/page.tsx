"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FaYoutube } from "react-icons/fa";
import { data } from "../../../../db/language";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import Summary from "../../../components/Summary";
import Test from "../../../components/Test";
import Notes from "../../../components/notes";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Cpp = () => {
  const [open, setOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  const handleClickOpen = (link: any) => {
    const embedLink = link.replace("watch?v=", "embed/");
    setVideoLink(embedLink);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoLink("");
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#F9F9F9] px-28 py-40">
        <div className="w-3/4">
          {data.map((chapter, chapterIndex) => (
            <Accordion className="my-3" key={chapterIndex}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${chapterIndex}-content`}
                id={`panel${chapterIndex}-header`}
              >
                <div className="flex flex-row">
                  <h3>{chapter.name}</h3>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="p-2">
                  <div className="flex flex-row">
                    <div className="w-1/12">Status</div>
                    <div className="w-7/12">Name</div>
                    <div className="w-1/12">Notes</div>
                    <div className="w-1/12">Video</div>
                    <div className="w-1/12">Test</div>
                    <div className="w-1/12">Summary</div>
                  </div>
                  {chapter.videos.map((video, videoIndex) => (
                    <div
                      className="border-[#E0E0E0] border-[1px] my-2 py-3 px-2 flex flex-row"
                      key={videoIndex}
                    >
                      <div className="w-1/12">
                        <Checkbox {...label} />
                      </div>
                      <div className="w-7/12 pt-2">{video.name}</div>
                      <div className="w-1/12">
                        <Notes title = {video.name}/>
                      </div>
                      <div className="w-1/12 pt-1">
                        <FaYoutube
                          className="w-8 h-8 cursor-pointer text-red-700"
                          onClick={() => handleClickOpen(video.link)}
                        />
                      </div>
                      <div className="w-1/12">
                        <Test
                          link={video.link}
                          title={video.name}
                          channel="codehelp-by Babbar"
                        />
                      </div>
                      <div className="w-1/12">
                        <Summary
                          link={video.link}
                          title={video.name}
                          channel="codehelp-by Babbar"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Video</DialogTitle>
        <DialogContent>
          <iframe
            width="100%"
            height="500"
            src={videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default Cpp;
