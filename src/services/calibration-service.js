import axios from 'axios'
import authHeader from "./auth-header";

const CALIBRATION_API_GET_URL = "/api/getCalibrationFile/";
const CALIBRATION_API_PUT_URL = "/api/update/CalibrationFile/";

class CalibrationService 
{
    getCalibration(id)
    {
        return axios.get(CALIBRATION_API_GET_URL+id, { headers: authHeader() });
    }
    putCalibration(machine_id,sensor_name,calibration)
    {
        return axios.put(CALIBRATION_API_PUT_URL+machine_id + "/"+ sensor_name,calibration,{ headers: authHeader()});
    }
}

export default new CalibrationService()