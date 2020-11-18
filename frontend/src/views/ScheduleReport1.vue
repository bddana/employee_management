<template>

  <el-table
    :data="schedulereport"
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
      prop="scheduleDate"
      label="Schedule Date"
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

import ScheduleReportService from "../services/schedulereportService.js";

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
      schedulereport: []


    };
  },
  async created() {
    try {
      // this.vacation = await VacationService.getAll();
      // this.vacationstatus = await VacationStatusService.getAll();
      // this.vacationtype = await VacationTypeService.getAll();
      this.schedulereport = await ScheduleReportService.getAll();


      // this.testTutors = await TutorService.getTutors();
      // this.tutors = await TutorService.getTutors();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>
