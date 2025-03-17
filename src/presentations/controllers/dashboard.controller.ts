import { Request, Response } from "express";
import { DashboardService } from "../../services/dashboard.service";
import { successResponse } from "../../utils/response-success";
import { HttpStatus } from "../../domain/enums/http-status.enum";

export const DashboardController = {
  getDashboard: async (req: Request, res: Response) => {
    const { startDate, endDate } = req.body;
    const data = await DashboardService.getDashboards(startDate, endDate);
    return res.json(successResponse(HttpStatus.OK, "Get data success", data));
  },
};
