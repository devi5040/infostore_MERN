const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const educationSchema = new Schema ({
  education: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  marks: {
    type: String,
    required: true,
  },
  achievements: {
    type: String,
    default: '-',
  },
  otherDetails: {
    type: String,
    default: '-',
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

module.exports = mongoose.model ('education', educationSchema);
