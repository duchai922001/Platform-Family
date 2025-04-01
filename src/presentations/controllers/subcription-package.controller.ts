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

  update: async (req: Request, res: Response) => {
    const packageId = req.params.packageId;
    const rawData = req.body;
    const updatedPackage = await SubcriptionPackageService.update(
      packageId,
      rawData
    );
    return res.json(
      successResponse(
        HttpStatus.OK,
        "Subscription Package updated successfully",
        updatedPackage
      )
    );
  },

  getAllPackage: async (req: Request, res: Response) => {
    const data = await SubcriptionPackageService.getAllPackage();
    return res.json(
      successResponse(HttpStatus.OK, "Get data successfully", data)
    );
  },
};
