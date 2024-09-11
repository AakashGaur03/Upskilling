import { Request, Response } from "express-serve-static-core";
import { createUserDto } from "../dtos/createUser.dtos";
import { User } from "../dtos/types/createUserResponse";

export function getUsers(req: Request, res: Response) {
  res.send([]);

//   Extended Request interface globally from index.d.ts file in root
//   req.customField
}
export function getUserById(req: Request, res: Response) {
  console.log(req.params.id);
  res.send({ id: req.params.id });
}
// First object is for req.params
// Second object is for res.body
// Third object is for req.body
// Fourth object is for req.query
export function createUser(
  req: Request<{}, {}, createUserDto, {}>,
  res: Response<User>
) {
  res.status(201).send({
    id: 1,
    email: "dave.gmail.com",
    username: "Dave",
  });
}
