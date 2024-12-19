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
};
