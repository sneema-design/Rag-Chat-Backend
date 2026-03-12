const db = require("../models/index.cjs");

const { User, Chat } = db;

const createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throwError("no User exist for this EmailId", 404);
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throwError("Invalid Password",401);
  }
  return user;
};
const getById = async (id) => {
  const user = await User.findByPk(id, {
    include: [{ model: Chat, as: "chats" }],
  });
  if (!user) {
    throwError("no User exist for this Id", 404);
  }
  return user;
};
module.exports = {
  createUser,
  login,
  getById,
};
