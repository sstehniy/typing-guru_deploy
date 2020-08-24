import { Request, Response, NextFunction } from 'express';

export interface ILoginRequest extends Request {
  body: {
    data: {
      username?: string;
      email?: string;
      password: string;
    };
  };
}

export interface IRegisterRequest extends Request {
  body: {
    data: {
      fullName: string;
      username: string;
      email: string;
      password: string;
    };
  };
}

export interface ICreateTestRequest extends Request {
  body: {
    data: {
      wpm: number;
      cpm: number;
      acc: number;
      score: number;
    };
    decodedToken: string | Record<string, unknown>;
  };
}

interface RequestError extends Error {
  status: number;
  message: string;
  data?: Record<string, unknown>;
}

export type RequestErrorHandler = (
  error: RequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => void;
