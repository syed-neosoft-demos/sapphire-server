import express from "express";
import cors from "cors";
import helmet from "helmet";

import appError from "./middlewares/errors.js";
import authRoutes from "./routes/authRouter.js";
import claimRoutes from "./routes/claimRouter.js";

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:3000"] }));
app.use(helmet());

//ROUTES
app.get("/health", (req, res) => {
  res.send(`server is up & running...`);
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/claim", claimRoutes);

app.use(appError);

export default app;
