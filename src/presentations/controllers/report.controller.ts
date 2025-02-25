import { Request, Response } from "express";
import { ReportService } from "../../services/report.service";
import { HttpStatus } from "../../domain/enums/http-status.enum";
import { successResponse } from "../../utils/response-success";

export const ReportController = {
  createReport: async (req: Request, res: Response) => {
    const payload = req.body;
    const newReport = await ReportService.createReport(payload);
    return res
      .status(HttpStatus.CREATED)
      .json(successResponse(HttpStatus.CREATED, "Created Success", newReport));
  },

  getReports: async (req: Request, res: Response) => {
    const data = await ReportService.getReports();
    return res.json(successResponse(HttpStatus.OK, "Get data success", data));
  },

  deleteReport: async (req: Request, res: Response) => {
    const { reportId } = req.params;
    await ReportService.deleteReport(reportId);
    return res.json(successResponse(HttpStatus.OK, "Delete Success"));
  },
};
