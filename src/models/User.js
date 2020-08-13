const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const Test = require("./Test");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  tests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Test,
    },
  ],
});

userSchema.set("toJSON", {
  transform: (pre, ret) => {
    ret.id = pre._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

userSchema.plugin(validator);

const User = mongoose.model("user", userSchema);

module.exports = User;
