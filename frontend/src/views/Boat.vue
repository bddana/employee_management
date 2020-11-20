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
    <el-table-column
      prop="boatStatusReportId"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="boatDescription"
      label="boatDescription"
      width="180">
    </el-table-column>
    <el-table-column
      prop="maintenanceRequired"
      label="maintenanceRequired"
      width="180">
    </el-table-column>
    <el-table-column
      prop="description"
      label="description"
      width="180">
    </el-table-column>
    <el-table-column
      prop="captainFirstName"
      label="captainFirstName"
      width="180">
    </el-table-column>
    <el-table-column
      prop="captainLastName"
      label="captainLastName"
      width="180">
    </el-table-column>
    <el-table-column
      prop="scheduleDate"
      label="scheduleDate"
      width="180">
    </el-table-column>
    <el-table-column
      prop="shift"
      label="shift"
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
          <el-form-item label="boatStatusReportId">
            <el-input v-model="form.boatStatusReportId" disabled></el-input>
          </el-form-item>
          <el-form-item label="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="boatDescription">
            <el-input v-model="form.boatDescription"></el-input>
          </el-form-item>
          <el-form-item label="maintenanceRequired">
            <el-input v-model="form.maintenanceRequired"></el-input>
          </el-form-item>
          <el-form-item label="description">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="captainFirstName">
            <el-input v-model="form.captainFirstName"></el-input>
          </el-form-item>
          <el-form-item label="captainLastName">
            <el-input v-model="form.captainLastName"></el-input>
          </el-form-item>
          <el-form-item label="scheduleDate">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.scheduleDate" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="shift">
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