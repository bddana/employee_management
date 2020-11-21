<template>
  <div>
    <h1>Schedule Report</h1>
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
    <el-table :data="filteredFeed" border style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column :render-header="renderHeader" fixed prop="employeeId" label="ID" width="180"></el-table-column>
      <el-table-column prop="firstName" label="First Name" width="180"></el-table-column>
      <el-table-column prop="lastName" label="Last Name" width="180"></el-table-column>
      <el-table-column class="schedDate" prop="scheduleDate" label="Schedule Date" width="180"></el-table-column>
      <el-table-column prop="shift" label="Shift" width="180"></el-table-column>
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
import ScheduleReportService from "../services/schedulereportService.js";
const axios = require("axios");
export default {
  data() {
    return {
      schedulereport: [],
      filterData: ""
    };
  },
  //Watches for changes in the DOM and then changes the page's state accordingly
  computed: {
    filteredFeed: function() {
      var Schedules = this.schedulereport;
      let search = (this.filterData || "").toLowerCase();

      return this.schedulereport.filter(function(item) {
        let date = (item.scheduleDate || "").toLowerCase();
        let name = (item.firstName || "").toLowerCase();
        return date.indexOf(search) > -1 || name.indexOf(search) > -1;
      });
    }
  },

  async created() {
    try {
      this.schedulereport = await ScheduleReportService.getAll();
      setTimeout(() => (this.schedulereport = schedulereport), 500);
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>