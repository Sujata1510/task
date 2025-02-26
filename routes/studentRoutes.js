import express from "express";

const router = express.Router();

router.route("/api/students").get((req, res) => {
  return res.status(200).json({
    message: "welcome to backend"
  })
}).post();

router.route("/api/students/:id").get().patch().delete();

export default router;