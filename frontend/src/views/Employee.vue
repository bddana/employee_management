<template>
  <container>
  <el-header>
    <el-row>
      <el-button type="primary" @click="dialogVisible = true" round>New</el-button>
      <span style="font-size:30px;color:blue">{{this.tableData.length}} Employees</span>
      <el-dialog title="Add Employee" :visible.sync="dialogVisible" :append-to-body="true" width="30%">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="Employee Id">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="First Name">
            <el-input v-model="form.firstName"></el-input>
          </el-form-item>
          <el-form-item label="Last Name">
            <el-input v-model="form.lastName"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="TEL">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          
          <!-- <el-form-item label="Date">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item> -->
          
          <el-form-item label="Address">
            <el-input type="textarea" v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="Employee Type">
            <el-input v-model="form.employeeType"></el-input>
          </el-form-item>
          <el-form-item label="Employee Status">
            <el-input v-model="form.employeeStatus"></el-input>
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
    border
    style="width: 80%"
    :row-class-name="tableRowClassName">
    <el-table-column

      prop="id"
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
      prop="email"
      label="Email"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="Tel"
      width="180">
    </el-table-column>
    <!-- <el-table-column
      prop="date"
      label="DATE"
      width="180">
    </el-table-column> -->
    <el-table-column
      prop="address"
      label="Address"
      width="580">
    </el-table-column>
    <el-table-column
      prop="employeeType"
      label="Employee Type"
      width="180">
    </el-table-column>
    <el-table-column
      prop="employeeStatus"
      label="Employee Status"
      width="180">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Option"
      width="180">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row), deleteEmployee(index)" type="text" size="small">DELETE</el-button>
        <el-button type="text" size="small">MODIFY</el-button>
        
      </template>
    </el-table-column>
  </el-table>
  </el-main>
</container>
  
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      deleteEmployee(index){
        this.tableData.splice(index,1);
      } , 
      onSubmit(){
        this.tableData.push(this.form);
        this.form='';
      },
      onCancel(){
        resetField(form);
      }
    },
    data() {
      
      const item = {
        id: '1',
        firstName: 'Chonghe',
        lastName: 'Ping',
        email: 'cping@uh.edu',
        tel: '7138887878',
        address: '4800 Calhoun Rd, Houston, TX 77004',
        employeeType: 'captain',
        employeeStatus:'Active'
      };
      return {
        tableData: Array(10).fill(item),
        dialogVisible:false,
        form: {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          tel: '',
          address: '',
          employeeType: '',
          employeeStatus:''
        }

      };
    },

  }
</script>