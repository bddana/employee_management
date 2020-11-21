<template>
<el-container>
  <el-header>
    <el-row>
      <span style="font-size:30px;color:blue">{{this.tableData.length}} Boats</span>
    </el-row>
  </el-header>
  <el-main>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <!-- <el-table-column
      prop="boatStatusReportId"
      label="ID"
      width="180">
    </el-table-column> -->
    <el-table-column
      prop="name"
      label="Boat Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="boatDescription"
      label="Boat Description"
      width="180">
    </el-table-column>
    <el-table-column
      prop="maintenanceRequired"
      label="Maintenance Required"
      width="180">
    </el-table-column>
    <el-table-column
      prop="description"
      label="Description"
      width="180">
    </el-table-column>
    <el-table-column
      prop="captainFirstName"
      label="Captain FirstName"
      width="180">
    </el-table-column>
    <el-table-column
      prop="captainLastName"
      label="Captain LastName"
      width="180">
    </el-table-column>
    <el-table-column
      prop="scheduleDate"
      label="Schedule Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="shift"
      label="Shift Time"
      width="180">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="Option"
      width="280">
        <!-- <el-button size='small' @click="deleteBoat(index)"> <span  class='el-icon-upload2' ></span>DELETE</el-button>
        <el-button size='small'> <span  class='el-icon-upload2'></span> MODIFY</el-button> -->
        <template slot-scope="scope">
        <el-button type="primary"  @click="editShow(scope.row.boatStatusReportId)" round>MODIFY</el-button>
        </template>
        <el-dialog title="Modify Boat" :visible.sync="dialogVisible" :append-to-body="true" width="30%">
        <el-form :model="form" label-width="80px">
          <el-form-item label="Boat Id">
            <el-input v-model="form.boatStatusReportId" disabled></el-input>
          </el-form-item>
          <el-form-item label="Boat Name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Boat Description">
            <el-input v-model="form.boatDescription"></el-input>
          </el-form-item>
          <el-form-item label="Maintenance Required">
            <el-input v-model="form.maintenanceRequired"></el-input>
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="Captain FirstName">
            <el-input v-model="form.captainFirstName"></el-input>
          </el-form-item>
          <el-form-item label="Captain LastName">
            <el-input v-model="form.captainLastName"></el-input>
          </el-form-item>
          <el-form-item label="ScheduleDate">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.scheduleDate" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Shift Time">
            <el-col :span="11">
              <el-time-picker placeholder="Pick a time" v-model="form.shift" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item>
            <!-- <template slot-scope="scope"> -->
            <el-button type="primary" @click="modifyEmployee()">Conform</el-button>
            <!-- </template> -->
            <!-- <el-button @click="onCancel">Cancel</el-button> -->
          </el-form-item>
        </el-form>
    </el-dialog>
    </el-table-column>
  </el-table>
  </el-main>
  </el-container>
</template>



<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }else if (rowIndex === 5) {
          return 'success-row';
        }else if (rowIndex === 7) {
          return 'success-row';
        } else if (rowIndex === 9) {
          return 'success-row';
        }
        return '';
      },
      async modifyEmployee(){
        await this.$http.put('/boat/'+this.form.boatStatusReportId,this.form).then(res => {
          console.log(res.data);
          this.$message({
            message:"Modify boat success!",
            type:"success"
          })
          this.dialogVisible=false
          this.$http.get('boat').then(res => {
            this.tableData = res.data
          })
          //window.location.reload()
        })
      },
      toURL(){
        window.location.reload()
        this.$message({
            message:"Modify boat success!",
            type:"success"
          })
      },
      async editShow(boatStatusReportId){
        await this.$http.get('/boat/'+boatStatusReportId).then(res => {
          console.log(res.data);
          this.form = res.data
           this.dialogVisible = true
        })
      },
      
    },

    data() {
      return {
        tableData:[],
        dialogVisible:false,
        editForm:{},
        form:{
          boatStatusReportId:'',
          name:'',
          boatDescription:'',
          maintenanceRequired:'',
          description:'',
          captainFirstName:'',
          captainLastName:'',
          scheduleDate:'',
          shift:''
        }
      };
    },
    created(){
      this.$http.get('boat').then(res => {
        this.tableData = res.data
      })
    }
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>