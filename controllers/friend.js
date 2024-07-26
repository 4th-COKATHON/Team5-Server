const {
  acceptFriendReq,
  createFriend,
  findFriendReqs,
  findFriends,
  findBucketlistsOfFriends,
  rejectFriendReq,
  removeFriendship,
} = require("../services/friend");

exports.createFriend = async (req, res) => {
  result = await createFriend(req.body.friendId, req.user.id);
  res.send(201, { friendId: result });
};

exports.findFriendReqs = async (req, res) => {
  result = await findFriendReqs(req.user.id);
  res.send(200, { reqList: result });
};

exports.findFriends = async (req, res) => {
  result = await findFriends(req.user.id);
  res.send(200, { friendList: result });
};

exports.findBucketlistsOfFriends = async (req, res) => {
  result = await findBucketlistsOfFriends(req.user.id);
  res.send(200, { bucklistList: result });
};

exports.acceptFriendReq = async (req, res) => {
  result = await acceptFriendReq(req.params.id);
  res.send(200).send();
};

exports.rejectFriendReq = async (req, res) => {
  result = await rejectFriendReq(req.params.id);
  res.status(200).send();
};

exports.removeFriendship = async (req, res) => {
  result = await removeFriendship(req.query.id);
  res.status(200).send();
};
