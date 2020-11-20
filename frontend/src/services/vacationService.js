const axios = require("axios");
const URL = "http://localhost:8081/";
// import http from "../http-common";

class vacationService {
  static getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${URL}vacation/all`);
        const vacation = res.data;
        resolve(
          vacation.map((vacation) => ({
            ...vacation,
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}
export default vacationService;
