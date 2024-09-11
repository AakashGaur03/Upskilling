import express, { NextFunction, Request, Response } from "express";

import userRouter from './routes/users.routes'

const app = express();

const PORT = 3000;

app.use("/api/users", userRouter);
// app.get("/api/users", (req: Request, res: Response, next: NextFunction) => {
//   res.send([]);
// });

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
