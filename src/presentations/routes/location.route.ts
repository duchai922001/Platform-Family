import { Request, Response, Router } from "express";
import { Server } from "socket.io";
import { catchAsync } from "../../utils/catchAsync";
import { LocationController } from "../controllers/location.controller";

export const locationRoutes = (io: Server) => {
  const router = Router();

  // Truyền io vào Controller khi khai báo route
  router.post(
    "/update-location",
    catchAsync((req: Request, res: Response) =>
      LocationController.updateLocation(req, res, io)
    )
  );

  return router;
};
