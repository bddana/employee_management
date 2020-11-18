<template>

  <el-table
    :data="boatstatusreport"
    border
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      :render-header="renderHeader"
      fixed
      prop="boatStatus"
      label="Boat status"
      width="180">
    </el-table-column>
    <el-table-column
      prop="description"
      label="Description"
      width="180">
    </el-table-column>
    <el-table-column
      prop="firstName"
      label="First Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="lastName"
      label="Last Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name of the boat"
      width="180">
    </el-table-column>
    <el-table-column
      prop="scheduleDate"
      label="Schedule date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="shift"
      label="Shift"
      width="180">
    </el-table-column>
    
  </el-table>
</template>


<script>
// import VacationService from "../services/vacationService.js";
// import VacationStatusService from "../services/vacationstatusService.js";
// import VacationTypeService from "../services/vacationtypeService.js";

import BoatStatusReportService from "../services/boatstatusreportService.js";

export default {
  // methods: {
  //   handleClick(row) {
  //     console.log(row);
  //   },
  //   renderHeader() {
  //     return (
  //       <div>
  //         <el-button size="small" on-click={() => this.exportExcel()}>
  //           {" "}
  //           <span class="el-icon-upload2"></span> ADD
  //         </el-button>
  //       </div>
  //     );
  //   }
  // },
  data() {
    return {
      // vacation: [],
      // vacationstatus: [],
      // vacationtype: []
      boatstatusreport: []


    };
  },
  async created() {
    try {
      // this.vacation = await VacationService.getAll();
      // this.vacationstatus = await VacationStatusService.getAll();
      // this.vacationtype = await VacationTypeService.getAll();
      this.boatstatusreport = await BoatStatusReportService.getAll();


      // this.testTutors = await TutorService.getTutors();
      // this.tutors = await TutorService.getTutors();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>
