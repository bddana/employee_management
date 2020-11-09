<template>
<el-container>
  <el-header>
    <el-row>
      <el-button type="primary" @click="dialogVisible = true" round>New</el-button>
      <span style="font-size:30px;color:blue">{{this.tableData.length}} Boats</span>
      <el-dialog title="Add Employee" :visible.sync="dialogVisible" :append-to-body="true" width="30%">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="ID">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="Model">
            <el-input v-model="form.model"></el-input>
          </el-form-item>
          <el-form-item label="Serial number">
            <el-input v-model="form.serialNumber"></el-input>
          </el-form-item>
          <el-form-item label="Captain">
            <el-input v-model="form.captain"></el-input>
          </el-form-item>
          <el-form-item label="Status">
            <el-input v-model="form.status"></el-input>
          </el-form-item>
          <el-form-item label="Date">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;" format="MM-dd-yyyy"></el-date-picker>
            </el-col>
            <!-- <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col> -->
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
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="model"
      label="Model"
      width="180">
    </el-table-column>
    <el-table-column
      prop="serialNumber"
      label="Serial number"
      width="180">
    </el-table-column>
    <el-table-column
      prop="captain"
      label="Captain"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Status"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="DATE"
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
      const item = {
        id: '1',
        model: 'PRESTIGE 520',
        serialNumber: '301',
        captain: 'Chonghe Ping',
        status: 'working',
        date: '10-25-2020',
      };
      return {
        tableData: Array(10).fill(item),
        dialogVisible:false,
        form: {
          id: '',
          model:'',
          serialNumber:'',
          captain:'',
          status:'',
          date:'',
        }
      };
    },
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