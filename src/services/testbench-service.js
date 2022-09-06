import axios from 'axios'
import authHeader from "./auth-header";

const TESTBENCH_API_POST_URL = "/api/add_machine";
const TESTBENCH_API_GET_ALL_URL ="/api/getAllMachine"

class TestbenchService 
{
    postTestbench(testbench)
    {
        return axios.post(TESTBENCH_API_POST_URL,testbench, { headers: authHeader() });
    }
    getAllTestbench()
    {
        return axios.get(TESTBENCH_API_GET_ALL_URL, { headers: authHeader() });
    }
}

export default new TestbenchService()