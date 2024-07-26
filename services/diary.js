const Diary = require("../models/diary");

exports.createDiary = async (body) => {
  result = await Diary.create({
    bucketlist_id: body.bucketlist_id,
    content: body.content,
    user_id: body.user_id,
  });
  return result.id;
};

exports.findDiaries = async (id) => {
  return await Diary.findAll({ user_id: id });
};

exports.deleteDiary = async (id) => {
  await Diary.destroy({ where: { id } });
};
