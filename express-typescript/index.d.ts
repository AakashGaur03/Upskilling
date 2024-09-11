import * as express from "express-serve-static-core";

//   Extended Request interface globally

declare global {
  namespace Express {
    interface Request {
      customField?: string;
    }
  }
}
