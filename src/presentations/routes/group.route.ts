import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { catchAsync } from "../../utils/catchAsync";
import { GroupController } from "../controllers/group.controller";
import { GroupDTO } from "../dtos/group/group.dto";
import { verifyToken } from "../../middlewares/verify.middlewares";
import { AddMembersGroupDTO } from "../dtos/group/add-member-group.dto";

const groupRoutes = Router();

groupRoutes.post(
  "/create",
  transformAndValidate(GroupDTO),
  catchAsync(GroupController.createGroup)
);

groupRoutes.get(
  "/get-group-user",
  verifyToken,
  catchAsync(GroupController.findGroupByUser)
);

groupRoutes.put(
  "/add-members-group",
  transformAndValidate(AddMembersGroupDTO),
  catchAsync(GroupController.addMemberToGroup)
);
groupRoutes.delete("/delete/:groupId", catchAsync(GroupController.deleteGroup));
export default groupRoutes;
