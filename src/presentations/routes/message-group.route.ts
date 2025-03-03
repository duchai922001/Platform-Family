import { Request, Response, Router } from "express";
import { Server } from "socket.io";
import { catchAsync } from "../../utils/catchAsync";
import { MessageGroupController } from "../controllers/message-group.controller";

export const messageGroupRoutes = (io: Server) => {
  const router = Router();

  router.post(
    "/send",
    catchAsync((req: Request, res: Response) =>
      MessageGroupController.sendGroupMessage(req, res, io)
    )
  );
  router.get(
    "/:groupId",
    catchAsync((req: Request, res: Response) =>
      MessageGroupController.getGroupMessages(req, res)
    )
  );

  return router;
};
