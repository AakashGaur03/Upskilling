import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "in-progress" | "completed";
  createdAt: Date;
  updatedAt: Date;
}

let tasks: Task[] = [
  {
    id: "1",
    title: "First Task",
    description: "This is the first task.",
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const getTasks = (): Task[] => {
  return tasks;
};

export const getTaskById = (id: string): Task | undefined => {
  return tasks.find((task) => task.id === id);
};

export const createTask = (task: Task): Task => {
  tasks.push(task);
  return task;
};

export const updateTask = (
  id: string,
  updatedTask: Partial<Task>
): Task | undefined => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) return undefined;

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...updatedTask,
    updatedAt: new Date(),
  };
  return tasks[taskIndex];
};

export const deleteTask = (id: string): boolean => {
  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.id !== id);
  return tasks.length < initialLength;
};
