import { Request, Response } from "express";
import { Server } from "socket.io";
import { MessageRepositoryImpl } from "../../infrastructure/repositoriesImpl/message.repositoryImpl";
import { HttpStatus } from "../../domain/enums/http-status.enum";
import { BadRequestException } from "../../domain/exceptions/bad-request.exception";

const messageRepository = new MessageRepositoryImpl();
export const MessageControler = {
  sendMessage: async (req: Request, res: Response, io: Server) => {
    const { sender, receiver, message } = req.body;
    if (!sender || !receiver || !message) {
      throw new BadRequestException("Missing required field");
    }

    const newMessage = await messageRepository.sendMessage({
      sender,
      receiver,
      message,
    } as any);

    io.emit("receiveMessage", newMessage);

    res.status(201).json(newMessage);
  },
  getMessages: async (req: Request, res: Response) => {
    const { sender, receiver } = req.params;
    if (!sender || !receiver) {
      throw new BadRequestException("Sender and receiver required");
    }

    const messages = await messageRepository.getMessages(sender, receiver);
    res.status(200).json(messages);
  },
};
