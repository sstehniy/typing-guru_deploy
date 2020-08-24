import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import User from '../models/User';
import { IRegisterRequest } from '../types';

router.post('/', async (req: IRegisterRequest, res, next) => {
  const { data: creds } = req.body;
  const { fullName, email, username, password } = creds;

  const SALT = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, SALT);

  try {
    const newUser = new User({
      fullName,
      email,
      username,
      passwordHash,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    next({ status: 409, message: 'Registration error', data: error }); // eslint-disable-line
  }
});

export default router;
