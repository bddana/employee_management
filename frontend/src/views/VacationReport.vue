<template>
<div>
  <h1>Vacation Report</h1>

      <div>
      <div>
        <v-text-field
          class="searchBox"
          label="Search"
          placeholder="Search for Name or Date"
          outlined
          v-model="filterData"
        ></v-text-field>
      </div>
    </div>
  <el-table
    :data="filteredFeed"
    border
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      :render-header="renderHeader"
      fixed
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
</div>
</template>
<style  scoped>
.searchBox {
  padding-top: 5px;
  width: 20%;
}
</style>

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
      vacationreport: [],
      filterData: ""


    };
  },

    computed: {
    filteredFeed: function() {
      var Vacation = this.vacationreport;
      let search = (this.filterData || "").toLowerCase();

      return this.vacationreport.filter(function(item) {
        let date = (item.vacationStartDate || "").toLowerCase();
        let name = (item.firstName || "").toLowerCase();
        return date.indexOf(search) > -1 || name.indexOf(search) > -1;
      });
    }
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
