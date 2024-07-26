const express = require("express");
const {
  acceptFriendReq,
  createFriend,
  findFriendReqs,
  findFriends,
  rejectFriendReq,
  removeFriendship,
} = require("../controllers/friend");

const router = express.Router();

// POST
// 친구 요청 발송
router.post("/", createFriend);

// GET
// 친구 목록 조회
router.get("/", findFriends);

// 친구 요청 조회
router.get("/request", findFriendReqs);

// 친구들의 버킷리스트 조회
router.get("/bucketlists");

// PATCH
// 친구 요청 수락
router.patch("/:id", acceptFriendReq);

// DELETE
// 친구 삭제
router.delete("/", removeFriendship);

// 친구 요청 거부
router.delete("/reject/:id", rejectFriendReq);

module.exports = router;
