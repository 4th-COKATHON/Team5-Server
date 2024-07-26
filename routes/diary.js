const express = require("express");
const {
  createDiary,
  findDiaries,
  deleteDiary,
} = require("../controllers/diary");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();

// POST
// 일기 생성
router.post("/", isLoggedIn, createDiary);

// GET
// 일기 목록 조회
router.get("/", isLoggedIn, findDiaries);

// DELETE
// 일기 삭제
router.delete("/:id", isLoggedIn, deleteDiary);

module.exports = router;
