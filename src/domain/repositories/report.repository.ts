import { IReport } from "../../types/report/report.interface";

export interface IReportRepository {
  createReport(report: IReport): Promise<IReport>;
  getReports(): Promise<IReport[]>;
  deleteReport(reportId: string): Promise<void | null>;
}
