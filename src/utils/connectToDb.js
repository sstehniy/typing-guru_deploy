const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const connectToDb = async () => {
  await mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    },
    error => {
      if (error) console.log("error connecting to db");
      else console.log("connected to mongodb");
    }
  );
};

module.exports = { connectToDb };
