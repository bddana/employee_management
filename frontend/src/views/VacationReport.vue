<template>

  <el-table
    :data="vacationreport"
    border
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      :render-header="renderHeader"
      fixed
      prop="employeeId"
      label="ID"
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
      prop="phone"
      label="Phone"
      width="180">
    </el-table-column>
    <el-table-column
      prop="vacationEndDate"
      label="Vacation end date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="vacationStartDate"
      label="Vacation start date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="vacationStatus"
      label="Vacation status"
      width="180">
    </el-table-column>
    <el-table-column
      prop="vacationType"
      label="Vacation type"
      width="180">
    </el-table-column>
    <el-table-column
      fixed="vacationStatus"
      label="Vacation status"
      width="180">
        <template>
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">DELETE</el-button>
        <el-button type="text" size="small">MODIFY</el-button> -->
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
// import VacationService from "../services/vacationService.js";
// import VacationStatusService from "../services/vacationstatusService.js";
// import VacationTypeService from "../services/vacationtypeService.js";

import VacationReportService from "../services/vacationreportService.js";

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
      vacationreport: []


    };
  },
  async created() {
    try {
      // this.vacation = await VacationService.getAll();
      // this.vacationstatus = await VacationStatusService.getAll();
      // this.vacationtype = await VacationTypeService.getAll();
      this.vacationreport = await VacationReportService.getAll();


      // this.testTutors = await TutorService.getTutors();
      // this.tutors = await TutorService.getTutors();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>
