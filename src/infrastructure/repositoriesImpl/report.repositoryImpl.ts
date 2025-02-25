import { IReportRepository } from "../../domain/repositories/report.repository";
import { IReport } from "../../types/report/report.interface";
import { Report } from "../model/report.model";

export class ReportRepositoryImpl implements IReportRepository {
  async createReport(report: IReport): Promise<IReport> {
    return await Report.create(report);
  }
  async getReports(): Promise<IReport[]> {
    return await Report.find()
      .populate({ path: "postId", model: "Post" }) // Lấy dữ liệu bài post
      .populate({ path: "userReport", model: "User", select: "name _id" }) // Lấy name và _id của userReport
      .populate({ path: "userViolation", model: "User", select: "name _id" }) // Lấy name và _id của userViolation
      .sort({ createdAt: -1 });
  }
  async deleteReport(reportId: string): Promise<void | null> {
    return await Report.findByIdAndDelete(reportId);
  }
}
