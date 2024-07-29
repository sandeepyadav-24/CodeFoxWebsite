import express from "express";
import summaryController from "../controller/summary";

const router = express.Router();

router.get("/", summaryController);

export default router;
