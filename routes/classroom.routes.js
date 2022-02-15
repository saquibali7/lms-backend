const express = require("express");
const { getClassrooms, createClassroom } = require("../controllers/classroom.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get("/get_all", authMiddleware, getClassrooms);
router.post("/create", authMiddleware, createClassroom);

module.exports = router;
