const axios = require("axios");
const URL = "http://localhost:8081/";
// import http from "../http-common";

class vacationstatusService {
  static getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${URL}vacationstatus/all`);
        const vacationstatus = res.data;
        resolve(
          vacationstatus.map((vacationstatus) => ({
            ...vacationstatus,
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}
export default vacationstatusService;
