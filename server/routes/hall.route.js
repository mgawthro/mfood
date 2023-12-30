import express from "express";

import { getAllHalls,
         getHallByName,
         postHall,
         updateHall } from "../controllers/hall.controller.js";

const router = express.Router();

/* GET */

router.get("/", getAllHalls);
router.get("/:name", getHallByName);

/* POST */

router.post("/", postHall);
router.post("/update/:name", updateHall)



export default router;