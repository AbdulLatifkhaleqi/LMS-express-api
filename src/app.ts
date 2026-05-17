import express from "express";
import AppError from "./shared/errors/app.error.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger.config.js";
import authRouter from "./modules/auth/auth.route.js";
import userRoute from "./modules/user/user.route.js";

const app = express();

app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRouter);
app.use("/api/user", userRoute);

app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);

export default app;
