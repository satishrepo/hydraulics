import axios from "axios";
import authHeader from "./auth-header";

const REPORT_DATA_URL = "/api/reportOrderItem";

class ReportService {
  getReportData(payload) {
    return axios.post(REPORT_DATA_URL, payload, { headers: authHeader() });
  }
}

export default new ReportService();
