const axios = require("axios");
const URL = "http://localhost:8081/";
// import http from "../http-common";

class boatstatusreportService {
  static getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${URL}boatstatusreport/all`);
        const boatstatusreport = res.data;
        resolve(
          boatstatusreport.map((boatstatusreport) => ({
            ...boatstatusreport,
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}
export default boatstatusreportService;
