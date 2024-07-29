import express from "express";
import mcqController from "../controller/mcq";

const router = express.Router();

router.get("/", mcqController);

export default router;
