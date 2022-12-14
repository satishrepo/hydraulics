import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://34.224.0.0:8090/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(payload) {
    return axios.post(API_URL + "signup", payload);
  }

  getUsers() {
    return axios.get(API_URL + "get_users", {
      headers: authHeader(),
    });
  }

  deleteUser(userId) {
    return axios.delete(`${API_URL}/delete_user?id=${userId}`, {
      headers: authHeader(),
    });
  }
}

export default new AuthService();
