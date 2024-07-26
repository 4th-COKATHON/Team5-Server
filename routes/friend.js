const express = require("express");
const {
  createFriend,
  findFriendReqs,
  findFriends,
} = require("../controllers/friend");

const router = express.Router();

// POST
// 친구 요청 발송
router.post("/", createFriend);

// GET
// 친구 요청 조회
router.get("/request", findFriendReqs);

// 친구 목록 조회
router.get("/", findFriends);

// 친구들의 버킷리스트 조회
router.get("/bucketlists");

// PATCH
// 친구 요청 수락
router.patch("/");

// DELETE
// 친구 삭제
router.patch("/");

module.exports = router;
