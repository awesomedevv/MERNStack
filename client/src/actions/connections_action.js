import axios from "axios";
import { CONNECTION_LIST } from "./types";

const ROOT_URL = process.env.API_URI || "http://localhost:8000";

axios.defaults.baseURL = ROOT_URL;
// if (localStorage.getItem('auth_jwt_token')) {
//     axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
// }
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function getConnections(pageNum = 1) {
  return function (dispatch) {
    // Submit email/password to server
    axios
      .get(`/mynetwork/connections?page=${pageNum}`)
      .then((res) => {
        dispatch({ type: CONNECTION_LIST, payload: res.data });
        // localStorage.setItem('connection_list', res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

const request = axios;
export { request };
