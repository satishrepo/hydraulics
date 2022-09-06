import axios from "axios";
import authHeader from "./auth-header";

const ADDROLE_API_POST_URL = "/api/add_new_role";
const GET_ROLES = "/api/get_roles";
const GET_SINGLE_ROLE = "/api/get_role";
const DELETE_ROLE = "/delete_role";
const EDIT_ROLE = "/api/edit_role";

class RoleService {
  addRole(payload) {
    return axios.post(ADDROLE_API_POST_URL, payload, {
      headers: authHeader(),
    });
  }
  getRoles() {
    return axios.get(GET_ROLES, {
      headers: authHeader(),
    });
  }
  getSingleRole(roleId) {
    return axios.get(`${GET_SINGLE_ROLE}?id=${roleId}`, {
      headers: authHeader(),
    });
  }
  deleteRole(roleId) {
    return axios.delete(`${DELETE_ROLE}?id=${roleId}`, {
      headers: authHeader(),
    });
  }
  editRole(id, payload) {
    return axios.put(`${EDIT_ROLE}?id=${id}`, payload, {
      headers: authHeader(),
    });
  }
}

export default new RoleService();
