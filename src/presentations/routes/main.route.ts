import { Application, NextFunction, Request, Response } from "express";
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
import albumRoutes from "./album.route";
import uploadImageRoutes from "./upload-image.route";
import { Server } from "socket.io";
import { locationRoutes } from "./location.route";
import groupRoutes from "./group.route";
import reportRoutes from "./report.route";
import { messageRoutes } from "./message.route";
import { messageGroupRoutes } from "./message-group.route";
import dashboardRoutes from "./dashboard.route";

export const mainRoutes = (app: Application, io: Server) => {
  app.use("/", authRoutes);
  app.use("/user", userRoutes);
  app.use("/package", packageRoutes);
  app.use("/instance", instanceRoutes);
  app.use("/feature", featureRoutes);
  app.use("/scheduler", schedulerRoutes);
  app.use("/post", postRoutes);
  app.use("/comment", commentRoutes);
  app.use("/family", familyRoutes);
  app.use("/location", locationRoutes(io));
  app.use("/messages", messageRoutes(io));
  app.use("/message-group", messageGroupRoutes(io));
  app.use("/album", albumRoutes);
  app.use("/group", groupRoutes);
  app.use("/report", reportRoutes);
  app.use("/upload", uploadImageRoutes);
  app.use("/dashboard", dashboardRoutes);
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
