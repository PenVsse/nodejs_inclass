const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const orchidSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    origin: {
      type: String,
      require: true,
    },
    isNatural: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Orchids = mongoose.model("orchids", orchidSchema);
module.exports = Orchids;
