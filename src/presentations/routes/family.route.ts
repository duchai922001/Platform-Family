import { Router } from "express";
import { transformAndValidate } from "../../middlewares/transform-validate.middleware";
import { createFamilyDTO } from "../dtos/family/create.dto";
import { catchAsync } from "../../utils/catchAsync";
import { FamilyController } from "../controllers/family.controller";
import { addAndRemoveMemberDTO } from "../dtos/family/add-member.dto";
import { featureFamilyDTO } from "../dtos/family/feature-family.dto";
import { verifyToken } from "../../middlewares/verify.middlewares";
import { JoinFamilyDTO } from "../dtos/family/join-family.dto";
const familyRoutes = Router();

familyRoutes.post(
  "/create",
  transformAndValidate(createFamilyDTO),
  catchAsync(FamilyController.create)
);

familyRoutes.post(
  "/add-members",
  transformAndValidate(addAndRemoveMemberDTO),
  catchAsync(FamilyController.addNewMembers)
);

familyRoutes.post(
  "/remove-members",
  transformAndValidate(addAndRemoveMemberDTO),
  catchAsync(FamilyController.removeMembers)
);

familyRoutes.post(
  "/features-family",
  transformAndValidate(featureFamilyDTO),
  catchAsync(FamilyController.featuresFamily)
);

familyRoutes.get(
  "/get-members/:familyId",
  catchAsync(FamilyController.getMembersFamily)
);

familyRoutes.post(
  "/join-family",
  verifyToken,
  transformAndValidate(JoinFamilyDTO),
  catchAsync(FamilyController.joinFamily)
);

familyRoutes.get(
  "/get-family-user",
  verifyToken,
  catchAsync(FamilyController.getFamilyOfUser)
);
export default familyRoutes;
