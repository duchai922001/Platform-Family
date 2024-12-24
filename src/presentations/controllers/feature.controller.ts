import { Request, Response } from "express";
import { FeatureService } from "../../services/feature.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";

export const FeatureController = {
  create: async (req: Request, res: Response) => {
    const rawData = req.body;
    const newFeature = await FeatureService.create(rawData);
    return res.json(
      successResponse(
        HttpStatus.CREATED,
        "Feature created successfully",
        newFeature
      )
    );
  },
};
