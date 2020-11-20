<template>
<!-- <div id="app">


  <input type="text"
         placeholder="Filter by department or employee"
         v-model="filter" />

 <tr v-for="(row, index) in filteredRows" :key="`firstName-${index}`">
  ...
</tr> -->

  <el-table
    :data="schedulereport"
    border
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column

      prop="firstName"
      label="First Name"
      width="180">
    </el-table-column>
    <!-- <el-table-column
      prop=""
      label=""
      width="180">
    </el-table-column> -->
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
     <!-- </div> -->
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
      schedulereport: [],
      filter: '',

    };
  },
  async created() {
    try {

      this.schedulereport = await ScheduleReportService.getAll();

    } catch (err) {
      this.error = err.message;
    }
  },

  computed: {
    filteredRows() {
      return this.schedulereport.filter(row => {
        const firstName = schedulereport.firstName.toString().toLowerCase();
        const lastName = schedulereport.lastName.toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return lastName.includes(searchTerm) ||
          firstName.includes(searchTerm);
      });
    }
  },

};



</script>
