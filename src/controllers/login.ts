// const router = require('express').Router();
import express, { Request } from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';
dotenv.config();

interface LoginRequest extends Request {
  body: {
    data: {
      username?: string;
      email?: string;
      password: string;
    };
  };
}

router.post('/', async (req: LoginRequest, res, next) => {
  const { data: creds } = req.body;
  const { username, email, password } = creds;

  let chosenFirstCred: { field: 'username' | 'email'; value: string };
  if (!username && email) chosenFirstCred = { field: 'email', value: email };
  else if (username && !email)
    chosenFirstCred = { field: 'username', value: username };

  const dbUser = await User.findOne({
    [chosenFirstCred.field]: chosenFirstCred.value,
  });
  try {
    const passwordCorrect =
      !!dbUser && (await bcrypt.compare(password, dbUser.passwordHash));
    if (!passwordCorrect)
      return next({
        status: 401,
        message: 'Invalid credentials, failed to authenticate',
      });
  } catch (error) {
    console.log('errrrorrrr');
  }

  const userForToken: { username: string; id: string } = {
    username: dbUser.username,
    id: dbUser._id,
  };

  const token = jwt.sign(userForToken, process.env.TOKEN_SECRET);

  res
    .status(200)
    .json({ token, username: dbUser.username, fullName: dbUser.fullName });
});

export default router;
