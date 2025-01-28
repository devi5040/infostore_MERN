const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      default: "-",
    },
    mobileNumber: {
      type: Number,
      default: "-",
    },
    age: {
      type: Number,
      default: "-",
    },
    height: {
      type: Number,
      default: "-",
    },
    weight: {
      type: Number,
      default: "-",
    },
    profileImage: {
      type: String,
      default: "-",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
