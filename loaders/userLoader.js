const DataLoader = require('dataloader');
const User = require('../models/User');

const userLoader = new DataLoader(async (userIds) => {
  const users = await User.find({ _id: { $in: userIds } });
  return userIds.map((id) => users.find((user) => user._id.toString() === id));
});

module.exports = userLoader;
