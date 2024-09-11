import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controller/user.controller";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserById);
export default router;

router.post("/", createUser);
