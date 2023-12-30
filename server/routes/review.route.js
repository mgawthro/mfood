import express from "express";

import { getAllReviews,
         getReviewByID,
         postReview,
         deleteReview, } from "../controllers/review.controller.js";

const router = express.Router();

/* GET */

router.get("/", getAllReviews);
router.get("/:id", getReviewByID);

/* POST */

router.post("/", postReview);

/* DELETE */

router.delete("/:id", deleteReview);


export default router;