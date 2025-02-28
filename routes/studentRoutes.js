import express from "express";
import { getAllStudents, loginStudent } from "../controllers/studentController.js";
import { notAllowed } from "../utils/notAllowed.js";

const router = express.Router();

router.route("/").get(getAllStudents).post();



router.route("/login").post(loginStudent).all(notAllowed);

router.route("/register");




export default router;