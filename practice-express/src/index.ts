import express from "express";
import taskRoutes from "./routes/task.route";
const app = express();

const PORT: number = 3000;

app.use(express.json());
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
