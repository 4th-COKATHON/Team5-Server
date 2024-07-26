const { createDiary, findDiaries, deleteDiary } = require("../services/diary");

exports.createDiary = async (req, res) => {
  result = await createDiary(req.body, req.user.id);
  res.send(201, { diaryId: result });
};

exports.findDiaries = async (req, res) => {
  result = await findDiaries(req.user.id);
  res.send(200, { diaryList: result });
};

exports.deleteDiary = async (req, res) => {
  result = await deleteDiary(req.params.id);
  res.status(200).send();
};
