const express = require("express");
const {
  acceptFriendReq,
  createFriend,
  findFriendReqs,
  findFriends,
  rejectFriendReq,
  removeFriendship,
  findBucketlistsOfFriends,
} = require("../controllers/friend");
const { isLoggedIn } = require("../middlewares");

const router = express.Router();

// POST
// 친구 요청 발송
router.post("/", isLoggedIn, createFriend);

// GET
// 친구 목록 조회
router.get("/", isLoggedIn, findFriends);

// 친구 요청 조회
router.get("/request", isLoggedIn, findFriendReqs);

// 친구들의 버킷리스트 조회
router.get("/bucketlists", isLoggedIn, findBucketlistsOfFriends);

// PATCH
// 친구 요청 수락
router.patch("/:id", isLoggedIn, acceptFriendReq);

// DELETE
// 친구 삭제
router.delete("/", isLoggedIn, removeFriendship);

// 친구 요청 거부
router.delete("/reject/:id", isLoggedIn, rejectFriendReq);

module.exports = router;
