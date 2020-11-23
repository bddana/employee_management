<template>
<el-container>
  <el-header>
    <el-row>
      <el-button type="primary" @click="show()" round>New</el-button>
      
      <el-row align="center" style="text-align:center;font-size:30px;color:blue">
        The total number of boats:{{this.tableData.length}} Boats</el-row>
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
      label="Captain First Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="captainLastName"
      label="Captain Last Name"
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
          <el-button @click="handleClick(scope.row), deleteEmployee(scope.row.boatStatusReportId),toURL()" type="text" size="small">DELETE</el-button>
          <el-button type="text" size="small"  @click="editShow(scope.row.boatStatusReportId)">MODIFY</el-button>
        </template>
        <el-dialog :showClose="false" :title="titleName[dialogStatus]" :visible.sync="dialogVisible" :append-to-body="true" width="30%">
        <el-form ref="form" :model="form" label-width="180px">
          <el-form-item label="Boat Status Report ID">
            <el-input v-model="form.boatStatusReportId" disabled></el-input>
          </el-form-item>
          <el-form-item label="Boat Name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Boat Description">
            <el-input v-model="form.boatDescription"></el-input>
          </el-form-item>
          <el-form-item label="Maintenance Required">
            <el-input v-model="form.maintenanceRequired" placeholder='"Yes" or "No"'></el-input>
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="Captain First Name">
            <el-input v-model="form.captainFirstName"></el-input>
          </el-form-item>
          <el-form-item label="Captain Last Name">
            <el-input v-model="form.captainLastName"></el-input>
          </el-form-item>
          <el-form-item label="Schedule Date">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.scheduleDate" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Shift Time">
            <el-input v-model="form.shift" placeholder="ex. 10 am shift"></el-input>
            <!-- <el-col :span="11">
              <el-time-picker placeholder="Pick a time" type="TIME" v-model="form.shift" @change="getTime" format="HH:mm:ss" 
              value-format="HH:mm:ss" style="width: 100%;"></el-time-picker>
            </el-col> -->
          </el-form-item>
          <el-form-item>
            <!-- <template slot-scope="scope"> -->
            <el-button type="primary" @click="AddModify()">Conform</el-button>
            <el-button @click="onCancel">Cancel</el-button>
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
      handleClick(row) {
        console.log(row);
      },
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
      async deleteEmployee(boatStatusReportId){
        await this.$http.delete('/boatmanager/'+boatStatusReportId).then(res => {
          //console.log(res.data);
          this.$message({
            message:"Delete new Employee success!",
            type:"warning"
          })
          this.$http.get('boatmanager').then(res => {
            this.tableData = res.data
          })
        })
      },
      async onSubmit(){
          await this.$http.post('/boatmanager/',this.form).then(res => {
          //console.log(res.data);
          this.$message({
            message:"Add new Boat success!",
            type:"success"
          })
          this.dialogVisible=false
          //this.dialogStatus="add"
          // this.$http.get('boatmanager').then(res => {
          //   this.tableData = res.data
          // })
          // this.$refs[form].resetFields();
          window.location.reload();
          
        })
      },
      AddModify(){
        this.dialogVisible=false
        if(this.dialogStatus=='add'){
          this.onSubmit();
        
      
        }else{
          this.modifyEmployee()
        }
      },
      show (){
        this.dialogVisible = true
        this.dialogStatus='add'
      },
      async modifyEmployee(){
        await this.$http.put('/boatmanager/'+this.form.boatStatusReportId,this.form).then(res => {
          console.log(res.data);
          this.$message({
            message:"Modify boat success!",
            type:"success"
          })
          this.dialogVisible=false
          // this.$http.get('boatmanager').then(res => {
          //   this.tableData = res.data
          // })
          // this.$refs[form].resetFields();
          window.location.reload();
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
        await this.$http.get('/boatmanager/'+boatStatusReportId).then(res => {
          console.log(res.data);
          this.form = res.data
           this.dialogVisible = true
        })
      },
      getTime(date){
          this.time = date;
          console.log(this.time);
      },
      onCancel(){
        this.form = ''
        this.dialogVisible=false
      }
    },

    data() {
      return {titleName:{
          add:'Add Boat',
          edit:'Modify Boat'
        },
        dialogStatus:'',
        tableData:[],
        dialogVisible:false,
        //editForm:{},
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
      this.$http.get('boatmanager').then(res => {
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