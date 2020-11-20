<template>
<div id="app">
  Filter: <input type="text" v-model="filterValue" />
 
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
     </div>
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

      this.schedulereport = await ScheduleReportService.getAll();

    } catch (err) {
      this.error = err.message;
    }
  },

  // data: {
  //   test: "ABC123",
  //   filterValue: "",
  //   events
  // },

 computed: {
    searchevents: function(){
      let result = this.schedulereport
      if (!this.filterValue)
        return result
      
      const filterValue = this.filterValue.toLowerCase()

      const filter = event => 
          schedulereport.employeeId.toLowerCase().includes(filterValue) ||
          schedulereport.firstName.toLowerCase().includes(filterValue) ||
          schedulereport.lastName.some(tag => tag.toLowerCase().includes(filterValue))
      
      return result.filter(filter)
    },
    searchevents2: function(){
      var searchRegex = new RegExp(this.filterValue,'i')
      return this.events.filter(event => 
        !this.filterValue || searchRegex.test(schedulereport.employeeId) || schedulereport.test(event.firstName))
    }
  },
  

  
};


// new Vue({
//   el:"#app",
//   data: {
//     test: "ABC123",
//     filterValue: "",
//     events
//   },

//   computed: {
//     searchevents: function(){
//       let result = this.schedulereport
//       if (!this.filterValue)
//         return result
      
//       const filterValue = this.filterValue.toLowerCase()

//       const filter = event => 
//           schedulereport.employeeId.toLowerCase().includes(filterValue) ||
//           schedulereport.firstName.toLowerCase().includes(filterValue) ||
//           schedulereport.lastName.some(tag => tag.toLowerCase().includes(filterValue))
      
//       return result.filter(filter)
//     },
//     searchevents2: function(){
//       var searchRegex = new RegExp(this.filterValue,'i')
//       return this.events.filter(event => 
//         !this.filterValue || searchRegex.test(schedulereport.employeeId) || schedulereport.test(event.firstName))
//     }
//   },
// })
</script>
