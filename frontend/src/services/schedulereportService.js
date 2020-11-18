const axios = require("axios");
const URL = "http://localhost:8081/";
// import http from "../http-common";

class schedulereportService {
  static getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${URL}schedulereport/all`);
        const schedulereport = res.data;
        resolve(
          schedulereport.map((schedulereport) => ({
            ...schedulereport,
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}
export default schedulereportService;
