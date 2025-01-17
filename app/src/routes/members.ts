import express, { Request, Response } from "express";
import { listMember, enc, dec, signup, signin } from "../controller/member";

const router = express.Router();

router.get("/list", listMember);
router.post("/enc", enc);
router.post("/dec", dec);
router.post("/signup", signup);
router.post("/signin", signin);

export { router as membersRouter };
