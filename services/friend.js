const Friend = require("../models/friend");
const User = require("../models/user");
const Op = require("sequelize");

exports.createFriend = async (body) => {
  const { userId, friendId } = body;
  if (
    (await Friend.count({
      where: { user_id: userId, friend_id: friendId },
    })) > 0
  )
    return;

  insertedId = (await Friend.create({ user_id: userId, friend_id: friendId }))
    .dataValues.id;

  return insertedId;
};

exports.findFriendReqs = async (id) => {
  return await Friend.findAll({
    where: { friend_id: id, status: "pending" },
  });
};

exports.findFriends = async (id) => {
  const friends = await Friend.findAll({
    where: { user_id: id },
    attributes: ["friend_id"],
  });
  const friendIds = friends.map((friend) => friend.friend_id);

  const friendsInfo = await User.findAll({
    where: { id: 1 },
    attributes: ["id", "nick"],
  });
  return friendsInfo;
};

exports.acceptFriendReq = async (id) => {
  req = await Friend.findOne({ where: { id } });
  if (req === null) return;

  await Friend.update({ status: "accepted" }, { where: { id } });
  await Friend.create({
    user_id: req.dataValues.friend_id,
    friend_id: req.dataValues.user_id,
    status: "accepted",
  });
};

exports.rejectFriendReq = async (id) => {
  result = await Friend.destroy({ where: { id } });
};

exports.removeFriendship = async (id) => {
  parsedId = parseInt(id, 10);
  await Friend.destroy({
    where: { user_id: parsedId },
  });
  await Friend.destroy({
    where: { friend_id: parsedId },
  });
};
