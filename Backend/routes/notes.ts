import express from "express";

import { notesGet, notesPost } from "./../controller/notes";

const router = express.Router();

router.post("/", notesPost);

router.get("/", notesGet);

export default router;
