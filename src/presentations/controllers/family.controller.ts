import { Request, Response } from "express";
import { FamilyService } from "../../services/family.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";

export const FamilyController = {
  create: async (req: Request, res: Response) => {
    const rawData = req.body;
    const newFamily = await FamilyService.create(rawData);
    res.json(
      successResponse(
        HttpStatus.CREATED,
        "Family created successfully",
        newFamily
      )
    );
  },
  addNewMembers: async (req: Request, res: Response) => {
    const rawData = req.body;
    const membersNew = await FamilyService.addMember(
      rawData.familyId,
      rawData.members
    );
    res.json(
      successResponse(HttpStatus.OK, "Members added successfully", membersNew)
    );
  },

  removeMembers: async (req: Request, res: Response) => {
    const rawData = req.body;
    const removeMembers = await FamilyService.removeMembers(
      rawData.familyId,
      rawData.members
    );
    res.json(
      successResponse(
        HttpStatus.OK,
        "Members removed successfully",
        removeMembers
      )
    );
  },

  featuresFamily: async (req: Request, res: Response) => {
    const familyId = req.body.family;
    const featureOfFamily = await FamilyService.featuresFamily(familyId);
    res.json(
      successResponse(
        HttpStatus.OK,
        "Featured family successfully",
        featureOfFamily
      )
    );
  },
};
