const {
  createFriend,
  findFriendReqs,
  findFriends,
} = require("../services/friend");

exports.createFriend = async (req, res) => {
  result = await createFriend(req.body);
  res.send(201, { friendId: result });
};

exports.findFriendReqs = async (req, res) => {
  result = await findFriendReqs(req.query.id);
  res.send(200, { reqList: result });
};

exports.findFriends = async (req, res) => {
  result = await findFriends(req.query.id);
  res.send(200, { friendList: result });
};
