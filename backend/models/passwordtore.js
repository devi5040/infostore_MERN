const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const passwordStoreSchema = new Schema({
  platform: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("passwordStore", passwordStoreSchema);
