import { Request, Response } from "express";
import { Server } from "socket.io";
import { BadRequestException } from "../../domain/exceptions/bad-request.exception";
import { HttpStatus } from "../../domain/enums/http-status.enum";
import { successResponse } from "../../utils/response-success";
import { GroupMessageService } from "../../services/message-group.service";

export const MessageGroupController = {
  sendGroupMessage: async (req: Request, res: Response, io: Server) => {
    const { sender, groupId, message } = req.body;
    if (!sender || !groupId || !message) {
      throw new BadRequestException("Missing required field");
    }

    // Lưu tin nhắn nhóm vào database
    const newMessage = await GroupMessageService.sendGroupMessage(req.body);

    // Gửi tin nhắn đến tất cả thành viên trong nhóm
    io.to(groupId).emit("receiveGroupMessage", newMessage);

    res
      .status(HttpStatus.CREATED)
      .json(
        successResponse(
          HttpStatus.CREATED,
          "Create message success",
          newMessage
        )
      );
  },
  getGroupMessages: async (req: Request, res: Response) => {
    const { groupId } = req.params;
    const messages = await GroupMessageService.getGroupMessages(groupId);
    res.json(successResponse(HttpStatus.OK, "Get data success", messages));
  },
};
