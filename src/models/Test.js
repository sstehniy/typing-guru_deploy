const mongoose = require("mongoose");
const User = require("./User");

const testSchema = new mongoose.Schema(
  {
    wpm: {
      type: Number,
    },
    cpm: {
      type: Number,
    },
    acc: {
      type: Number,
    },
    score: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

testSchema.set("toJSON", {
  transform: (pre, ret) => {
    ret.id = pre._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Test = mongoose.model("test", testSchema);

module.exports = Test;
