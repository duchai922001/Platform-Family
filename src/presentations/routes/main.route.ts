import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../../domain/enums/http-status.enum";
import { BadRequestException } from "../../domain/exceptions/bad-request.exception";
import { HttpException } from "../../domain/exceptions/http.exception";
import authRoutes from "./auth.route";
import postRoutes from "./post.route";
import packageRoutes from "./subcription-package.route";
import familyRoutes from "./family.route";
import userRoutes from "./user.route";
import featureRoutes from "./feature.route";
import instanceRoutes from "./subcription-instance.route";
import commentRoutes from "./comment.route";
import schedulerRoutes from "./scheduler.route";

export const mainRoutes = (app: any) => {
  app.use("/", authRoutes);
  app.use("/user", userRoutes);
  app.use("/package", packageRoutes);
  app.use("/instance", instanceRoutes);
  app.use("/feature", featureRoutes);
  app.use("/scheduler", schedulerRoutes);
  app.use("/post", postRoutes);
  app.use("/comment", commentRoutes);
  app.use("/family", familyRoutes);
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err?.name === "MongoServerError") {
      const badRequestException = new BadRequestException(err.message);
      res.status(HttpStatus.BAD_REQUEST).json(badRequestException.toResponse());
    }
    if (err instanceof HttpException) {
      res.status(err.status).json(err.toResponse());
    }
    res.status(500).json({ message: err?.message || "Internal server error" });
  });
};
