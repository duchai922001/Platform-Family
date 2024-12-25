import { Request, Response } from "express";
import { SubcriptionInstanceService } from "../../services/subcription-instance.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";

export const SubcriptionInstanceController = {
  registerSerivcePacakge: async (req: Request, res: Response) => {
    const rawData = req.body;
    const newRegisterPackage =
      await SubcriptionInstanceService.registerServicePackage(rawData);
    res.json(
      successResponse(
        HttpStatus.CREATED,
        "Service package registered successfully",
        newRegisterPackage
      )
    );
  },
};
