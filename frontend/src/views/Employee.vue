<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>


export default {
  name: 'employee',
  
  data() {
      return {
          msg:'Employee Management',
      }
  },
}
  </script>

<style>

.login {
  height: 100vh;
}

.auth-box {
  background-color: white;
  box-shadow: 5px 6px 10px 0px #2e3532;
}
</style>