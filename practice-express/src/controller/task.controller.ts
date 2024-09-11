import { Request, Response } from "express-serve-static-core";
import { v4 as uuidv4 } from "uuid";

import {
  Task,
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../models/task.model";

export const getAllTasks = (req: Request, res: Response): void => {
  res.json(getTasks());
};

export const getTask = (req: Request, res: Response): void => {
  const task = getTaskById(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not Found !" });
  }
};

export const addTask = (req: Request, res: Response): void => {
  console.log("Here");
  console.log(req.body);
  const newTask: Task = {
    id: uuidv4(),
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  res.status(201).json(createTask(newTask));
};

export const editTask = (req: Request, res: Response): void => {
  const task = updateTask(req.params.id, req.body);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task Not Found !" });
  }
};

export const removeTask = (req: Request, res: Response): void => {
  const success = deleteTask(req.params.id);
  if (success) {
    res.json({ message: "Task Deleted Successfully" });
  } else {
    res.json({ message: "Task Not Found to Delete!!" });
  }
};
