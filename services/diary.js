const Diary = require("../models/diary");

exports.createDiary = async (body, userId) => {
  result = await Diary.create({
    bucketlist_id: body.bucketlist_id,
    content: body.content,
    user_id: userId,
  });
  return result.id;
};

exports.findDiaries = async (id) => {
  return await Diary.findAll({ user_id: id });
};

exports.deleteDiary = async (id) => {
  await Diary.destroy({ where: { id } });
};
