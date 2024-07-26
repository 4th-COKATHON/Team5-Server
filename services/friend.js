const Friend = require("../models/friend");
const User = require("../models/user");

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
    where: { friend_id: id },
  });
};

exports.findFriends = async (id) => {
  return await User.findAll({
    include: [
      {
        model: User,
        as: "Friends",
        attributes: ["id", "nick"],
        through: {
          attributes: [],
        },
      },
    ],
    where: { id: id },
  });
};
