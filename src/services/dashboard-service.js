import axios from "axios";
import authHeader from "./auth-header";

const DASHBOARD_API_GET_ALL_URL = "/api/storedProcedure";

class DashboardService {
  getDashboardData(payload) {
    return axios.post(DASHBOARD_API_GET_ALL_URL, payload, {
      headers: authHeader(),
    });
  }
}

export default new DashboardService();
