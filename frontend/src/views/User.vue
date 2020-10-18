<template>
  <div>
    <div class="login">
      <div class="content">
        <div class="auth-box">
          <user-account @loginSuccess="loggedIn()"></user-account>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserAccount from '@/components/UserAccount.vue';

export default {
  name: 'User',
  components: {
    UserAccount,
  },

  data() {
    return {
      registrationClass: ['registration-mode'],
      userLoggedIn: false,
    };
  },

  methods: {
    loggedIn() {
      // Do something when logged in.
      this.$router.push('/');
      this.$store.commit('loaderStore/unsetLoader');
    },
  },
};
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
