const express = require("express");
const {
  createDiary,
  findDiaries,
  deleteDiary,
} = require("../controllers/diary");
const router = express.Router();

// POST
// 일기 생성
router.post("/", createDiary);

// GET
// 일기 목록 조회
router.get("/", findDiaries);

// DELETE
// 일기 삭제
router.delete("/:id", deleteDiary);

module.exports = router;
