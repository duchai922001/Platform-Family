import { Request, Response } from "express";
import { SubcriptionPackageService } from "../../services/subcription-package.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";

export const SubcriptionPackageController = {
  create: async (req: Request, res: Response) => {
    const rawData = req.body;
    const newPackage = await SubcriptionPackageService.create(rawData);
    return res.json(
      successResponse(
        HttpStatus.CREATED,
        "Subscription Package created successfully",
        newPackage
      )
    );
  },
};
