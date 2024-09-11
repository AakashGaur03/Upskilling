import { Router } from "express";
import {
  addTask,
  editTask,
  getAllTasks,
  getTask,
  removeTask,
} from "../controller/task.controller";

const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTask);
router.post("/task", addTask);
router.put("/task/:id", editTask);
router.delete("/task/:id", removeTask);

export default router;
