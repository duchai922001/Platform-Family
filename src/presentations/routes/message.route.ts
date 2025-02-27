import { Request, Response, Router } from "express";
import { Server } from "socket.io";
import { catchAsync } from "../../utils/catchAsync";
import { MessageControler } from "../controllers/message.controller";

export const messageRoutes = (io: Server) => {
  const router = Router();

  router.post(
    "/",
    catchAsync((req: Request, res: Response) =>
      MessageControler.sendMessage(req, res, io)
    )
  );
  router.get(
    "/:sender/:receiver",
    catchAsync((req: Request, res: Response) =>
      MessageControler.getMessages(req, res)
    )
  );

  return router;
};
