const mongoose = require( "mongoose" );

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
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: '-',
    },
    bloodGroup: {
      type: String,
      default: "-",
    },
    mobileNumber: {
      type: String,
      default: "-",
    },
    age: {
      type: String,
      default: "-",
    },
    height: {
      type: String,
      default: "-",
    },
    weight: {
      type: String,
      default: "-",
    },
    profileImage: {
      type: String,
      default: "-",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model( "user", userSchema );
