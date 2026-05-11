import express from "express";
import AppError from "./shared/errors/app.error.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger.config.js";
import UserRouter from "./modules/auth/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", UserRouter);

app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);

export default app;
