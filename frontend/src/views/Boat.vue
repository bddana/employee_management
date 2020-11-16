<template>
<el-container>
  <el-header>
    <el-row>
      <el-button type="primary" @click="dialogVisible = true" round>New</el-button>
      <span style="font-size:30px;color:blue">{{this.tableData.length}} Boats</span>
      <el-dialog title="Add Employee" :visible.sync="dialogVisible" :append-to-body="true" width="30%">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="ID">
            <el-input v-model="tableData.boatStatusReportId"></el-input>
          </el-form-item>
          <el-form-item label="firstName">
            <el-input v-model="tableData.firstName"></el-input>
          </el-form-item>
          <el-form-item label="lastName">
            <el-input v-model="tableData.lastName"></el-input>
          </el-form-item>
          <el-form-item label="scheduleDate">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="shift">
            <el-col :span="11">
              <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="boatStatus">
            <el-input v-model="tableData.status"></el-input>
          </el-form-item>
          <!-- <el-form-item label="Date">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;" format="MM-dd-yyyy"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item> -->
          <el-form-item label="boatId">
            <el-input v-model="tableData.boatId"></el-input>
          </el-form-item>
          <el-form-item label="Boat name">
            <el-input v-model="tableData.name"></el-input>
          </el-form-item>
          <el-form-item label="description">
            <el-input v-model="tableData.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Conform</el-button>
            <!-- <el-button @click="onCancel">Cancel</el-button> -->
          </el-form-item>
        </el-form>
    </el-dialog>
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
      prop="firstName"
      label="firstName"
      width="180">
    </el-table-column>
    <el-table-column
      prop="lastName"
      label="lastName"
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
      prop="boatStatus"
      label="boatStatus"
      width="180">
    </el-table-column>
    <el-table-column
      prop="boatId"
      label="boatId"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="description"
      label="description"
      width="180">
    </el-table-column>
    <el-table-column
      prop="option"
      label="Option"
      width="280">
        <el-button size='small' @click="deleteBoat(index)"> <span  class='el-icon-upload2' ></span>DELETE</el-button>
        <el-button size='small'> <span  class='el-icon-upload2'></span> MODIFY</el-button>
    </el-table-column>
  </el-table>
  </el-main>
  </el-container>
</template>



<script>
  export default {
    methods: {
      // formatBoatRentalStatus(row,column){
      //   return row.boatRentalStatusId === 1 ? 'Docked' :
      //           row.boatRentalStatusId === 2 ? 'Out Bound' :
      //           'In Bound'
      // },
      // formatBoatId(row,column){
      //   return row.boatId === 1 ? '24 Bentley Tritoon 243 Cruise' :
      //           row.boatId === 2 ? '25 Bentley Tritoon 243 Cruise' :
      //           '24 Bentley Tritoon 243 Cruise'
      // },
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
      deleteBoat(index){
        this.tableData.splice(index,1);
      },
       onSubmit(){
        this.tableData.push(this.form);
        this.form='';
      },
      onCancel(){
        resetField(form);
      }
    },

    data() {
      return {
        tableData:[],
        dialogVisible:false,
        form: {
          employeeId: '',
          firstname: '',
          lastname: '',
          email: '',
          Phone: '',
          address: '',
          employeeTypeId: '',
          employeeStatusId:''
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