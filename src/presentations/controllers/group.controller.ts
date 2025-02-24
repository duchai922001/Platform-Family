import { Request, Response } from "express";
import { GroupService } from "../../services/group.service";
import { HttpStatus } from "../../domain/enums/http-status.enum";
import { successResponse } from "../../utils/response-success";

export const GroupController = {
  createGroup: async (req: Request, res: Response) => {
    const payload = req.body;
    const data = await GroupService.createGroup(payload);
    return res
      .status(HttpStatus.CREATED)
      .json(successResponse(HttpStatus.CREATED, "Create group success", data));
  },

  findGroupByUser: async (req: Request, res: Response) => {
    const user = res.locals.user;
    const data = await GroupService.findGroupByUser(user.userId);
    return res.json(successResponse(HttpStatus.OK, "Get data success", data));
  },

  addMemberToGroup: async (req: Request, res: Response) => {
    const data = await GroupService.addMemberToGroup(req.body);
    return res.json(
      successResponse(HttpStatus.OK, "Add member to group success", data)
    );
  },

  deleteGroup: async (req: Request, res: Response) => {
    const { groupId } = req.params;
    await GroupService.deleteGroup(groupId);
    return res.json(successResponse(HttpStatus.OK, "Delete group success"));
  },
};
