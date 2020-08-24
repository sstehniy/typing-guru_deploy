import express, { Request } from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const getTokenFromRequest = (req: Request) => {
  const auth: string = req.get('authorization');
  if (auth && auth.trim().startsWith('Bearer')) return auth.substring(7);
  else return null;
};

router.use((req, _res, next) => {
  const token = getTokenFromRequest(req);
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET) as Record<
    string,
    unknown
  >;
  if (!token || !decodedToken.id) {
    return next({ status: 401, message: 'Token invalid or missing' });
  } else {
    req.body.decodedToken = decodedToken; //eslint-disable-line
    next();
  }
});

export default router;
